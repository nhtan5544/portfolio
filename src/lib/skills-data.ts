import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiReactquery,
  SiRedux,
  SiFigma,
  SiGit,
  SiExpo,
  SiVite,
  SiEslint,
  SiJest,
} from "react-icons/si";

// TODO(nhtan5544): xác nhận danh sách & mức độ ưu tiên công nghệ dưới đây có
// đúng với thực tế hiện tại của bạn không trước khi public.
export const skillsData = {
  core: [
    { name: "HTML5", color: "#E34F26", icon: SiHtml5 },
    { name: "CSS3 / Sass", color: "#1572B6", icon: SiCss },
    { name: "JavaScript", color: "#F0B429", icon: SiJavascript },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    { name: "Node.js", color: "#339933", icon: SiNodedotjs },
  ],
  frameworks: [
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "Next.js", color: "#818CF8", icon: SiNextdotjs },
    { name: "React Native", color: "#61DAFB", icon: SiReact },
    { name: "Tailwind CSS", color: "#38BDF8", icon: SiTailwindcss },
    { name: "Framer Motion", color: "#EC4899", icon: SiFramer },
    { name: "TanStack Query", color: "#FF4154", icon: SiReactquery },
    { name: "Redux Toolkit", color: "#764ABC", icon: SiRedux },
  ],
  tools: [
    { name: "Figma", color: "#F24E1E", icon: SiFigma },
    { name: "Git & GitHub", color: "#F05032", icon: SiGit },
    { name: "Expo", color: "#818CF8", icon: SiExpo },
    { name: "Vite", color: "#F0B429", icon: SiVite },
    { name: "ESLint & Prettier", color: "#4B32C3", icon: SiEslint },
    { name: "Jest / Testing Library", color: "#C21325", icon: SiJest },
  ],
} as const;

export type SkillCategory = keyof typeof skillsData;

export const allSkills = [
  ...skillsData.core,
  ...skillsData.frameworks,
  ...skillsData.tools,
];
