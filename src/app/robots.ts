import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://portfolio-nhtan5544.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // `/_next/` must stay crawlable — it serves the CSS and JS Googlebot needs to
        // render the page.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
