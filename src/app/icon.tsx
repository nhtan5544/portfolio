import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Monogram kept well inside the frame so the same asset also works as a maskable icon,
// where the outer ~20% can be cropped away by the launcher.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#7c3aed",
          backgroundImage: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
          color: "#ffffff",
          fontSize: 232,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        NT
      </div>
    ),
    { ...size }
  );
}
