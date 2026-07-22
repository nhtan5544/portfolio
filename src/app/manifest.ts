import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nguyen Huu Tan — Portfolio",
    short_name: "NguyenHuuTan",
    description: "Portfolio của Nguyen Huu Tan (Tronie Nguyen) — Frontend & Mobile Developer xây dựng giao diện web/app hiệu suất cao.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
