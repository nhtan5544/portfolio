import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page site: fragment URLs (`/#about`, …) are not separate documents and are
  // discarded by search engines, so the sitemap lists only the canonical root.
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
