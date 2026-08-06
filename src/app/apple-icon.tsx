import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -3,
        }}
      >
        NT
      </div>
    ),
    { ...size }
  );
}
