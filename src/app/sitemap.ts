import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-nhtan5544.vercel.app";
  const lastModified = new Date();

  // Single-page site: fragment URLs (`/#about`, …) are not separate documents and are
  // discarded by search engines, so the sitemap lists only the canonical root.
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
