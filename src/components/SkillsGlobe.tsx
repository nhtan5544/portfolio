"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend, type ThreeElement } from "@react-three/fiber";
import { Html, OrbitControls, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { allSkills } from "@/lib/skills-data";

const RADIUS = 3.2;

// Fresnel rim glow: nearly invisible face-on, glowing at the silhouette edge —
// the classic "hologram" shell look.
const GlowMaterial = shaderMaterial(
  { color: new THREE.Color("#a78bfa"), power: 2.6 },
  /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vViewDir;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewDir = normalize(-mvPosition.xyz);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* glsl */ `
    uniform vec3 color;
    uniform float power;
    varying vec3 vNormal;
    varying vec3 vViewDir;
    void main() {
      float fresnel = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vViewDir)), 0.0, 1.0), power);
      gl_FragColor = vec4(color, fresnel);
    }
  `
);
extend({ GlowMaterial });

// Displaces each vertex outward along its radius with a slow multi-sine wave —
// makes the wireframe surface undulate gently, like it's breathing.
const BreathingWireMaterial = shaderMaterial(
  { color: new THREE.Color("#6366f1"), opacity: 0.18, uTime: 0, amplitude: 0.1, frequency: 1.5 },
  /* glsl */ `
    uniform float uTime;
    uniform float amplitude;
    uniform float frequency;
    void main() {
      vec3 pos = position;
      float displacement = sin(pos.x * frequency + uTime)
        * sin(pos.y * frequency + uTime * 1.3)
        * sin(pos.z * frequency + uTime * 0.7);
      pos += normalize(pos) * displacement * amplitude;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  /* glsl */ `
    uniform vec3 color;
    uniform float opacity;
    void main() {
      gl_FragColor = vec4(color, opacity);
    }
  `
);
extend({ BreathingWireMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    glowMaterial: ThreeElement<typeof GlowMaterial>;
    breathingWireMaterial: ThreeElement<typeof BreathingWireMaterial>;
  }
}

// Even distribution of points on a sphere surface (golden-angle spiral).
function fibonacciSphere(index: number, total: number) {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const radiusAtY = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;
  return new THREE.Vector3(Math.cos(theta) * radiusAtY, y, Math.sin(theta) * radiusAtY).multiplyScalar(
    RADIUS
  );
}

// Latitude + longitude rings (real circles, not triangulated facets) — reads
// as a smooth "wireframe globe" instead of a faceted low-poly gem.
function createGlobeWireGeometry(
  radius: number,
  parallels: number,
  meridians: number,
  segments: number
) {
  const positions: number[] = [];

  for (let p = 1; p < parallels; p++) {
    const phi = (p / parallels) * Math.PI;
    const y = Math.cos(phi) * radius;
    const ringRadius = Math.sin(phi) * radius;
    for (let s = 0; s < segments; s++) {
      const t0 = (s / segments) * Math.PI * 2;
      const t1 = ((s + 1) / segments) * Math.PI * 2;
      positions.push(
        Math.cos(t0) * ringRadius, y, Math.sin(t0) * ringRadius,
        Math.cos(t1) * ringRadius, y, Math.sin(t1) * ringRadius
      );
    }
  }

  for (let m = 0; m < meridians; m++) {
    const theta = (m / meridians) * Math.PI;
    for (let s = 0; s < segments; s++) {
      const p0 = (s / segments) * Math.PI * 2;
      const p1 = ((s + 1) / segments) * Math.PI * 2;
      positions.push(
        Math.sin(p0) * Math.cos(theta) * radius, Math.cos(p0) * radius, Math.sin(p0) * Math.sin(theta) * radius,
        Math.sin(p1) * Math.cos(theta) * radius, Math.cos(p1) * radius, Math.sin(p1) * Math.sin(theta) * radius
      );
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

function WireframeSphere() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const matRef = useRef<InstanceType<typeof BreathingWireMaterial>>(null);
  const geometry = useMemo(
    () => createGlobeWireGeometry(RADIUS - 0.35, 7, 10, 64),
    []
  );

  useFrame((_, delta) => {
    if (lineRef.current) {
      lineRef.current.rotation.y += delta * 0.05;
      lineRef.current.rotation.x += delta * 0.02;
    }
    if (matRef.current) matRef.current.uTime += delta;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <breathingWireMaterial
        ref={matRef}
        color="#6366f1"
        opacity={0.18}
        amplitude={0.12}
        frequency={1.4}
        transparent
      />
    </lineSegments>
  );
}

// Smaller, coarser shell spinning counter to the outer wireframe — gives the
// globe a nested "gyroscope" look instead of one flat rotating mesh.
function InnerCore() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const matRef = useRef<InstanceType<typeof BreathingWireMaterial>>(null);
  const geometry = useMemo(
    () => createGlobeWireGeometry(RADIUS - 1.6, 5, 7, 48),
    []
  );

  useFrame((_, delta) => {
    if (lineRef.current) {
      lineRef.current.rotation.y -= delta * 0.09;
      lineRef.current.rotation.x -= delta * 0.04;
    }
    if (matRef.current) matRef.current.uTime += delta;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <breathingWireMaterial
        ref={matRef}
        color="#8b5cf6"
        opacity={0.12}
        amplitude={0.1}
        frequency={1.7}
        transparent
      />
    </lineSegments>
  );
}

function GlowShell({ meshRef }: { meshRef: React.RefObject<THREE.Mesh> }) {
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[RADIUS - 0.1, 64, 64]} />
      <glowMaterial
        color="#a78bfa"
        power={2.6}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Only test occlusion against the solid glow shell — the wireframe/inner-core
// shells are line geometry now, and raycasting against lines uses a generous
// distance threshold that would falsely occlude almost every label.
function SkillNodes({ occludeRef }: { occludeRef: React.RefObject<THREE.Mesh> }) {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(
    () => allSkills.map((_, i) => fibonacciSphere(i, allSkills.length)),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      {allSkills.map((skill, i) => (
        <Html
          key={skill.name}
          position={positions[i]}
          center
          distanceFactor={9}
          occlude={[occludeRef]}
        >
          <div
            title={skill.name}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card/90 backdrop-blur-sm shadow-sm select-none"
            style={{ color: skill.color }}
          >
            <skill.icon className="w-4.5 h-4.5" />
          </div>
        </Html>
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  const glowRef = useRef<THREE.Mesh>(null!);

  return (
    <div className="h-105 sm:h-130 w-full">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} dpr={[1, 1.5]}>
        <WireframeSphere />
        <InnerCore />
        <GlowShell meshRef={glowRef} />
        <SkillNodes occludeRef={glowRef} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
