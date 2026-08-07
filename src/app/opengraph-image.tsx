import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Nguyen Huu Tan — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// All text drawn here stays ASCII on purpose: ImageResponse has no Vietnamese-capable
// font bundled, so diacritics would not render. Adding VI text means bundling a font.
export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), "public", "image.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(124,58,237,0.45), transparent 55%), radial-gradient(circle at 90% 100%, rgba(236,72,153,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "72px 0 72px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: "#a78bfa",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 44, height: 3, backgroundColor: "#a78bfa" }} />
            <div>Portfolio</div>
          </div>

          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              marginTop: 26,
            }}
          >
            Nguyen Huu Tan
          </div>

          <div style={{ fontSize: 38, fontWeight: 600, color: "#e9d5ff", marginTop: 14 }}>
            Frontend Developer
          </div>

          <div style={{ fontSize: 25, color: "#a1a1aa", marginTop: 26 }}>
            React · Next.js · TypeScript
          </div>

          <div style={{ fontSize: 22, color: "#71717a", marginTop: 40 }}>
            Ho Chi Minh City, Vietnam
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 430,
            height: "100%",
            padding: 60,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={310}
            height={400}
            style={{
              width: 310,
              height: 400,
              objectFit: "cover",
              borderRadius: 28,
              border: "3px solid rgba(167,139,250,0.55)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
