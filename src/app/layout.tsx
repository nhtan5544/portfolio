import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nguyen Huu Tan — Frontend Developer Portfolio",
    template: "%s | Nguyen Huu Tan Portfolio",
  },
  description:
    "Personal portfolio of Nguyen Huu Tan (Tronie Nguyen) — Frontend Developer with 6+ years of React.js/Next.js experience, shipping products for clients in Vietnam, Japan and Australia/New Zealand.",
  keywords: [
    "Nguyen Huu Tan",
    // SEO only (never rendered): the diacritic spelling is a distinct search term from the plain one.
    "Nguyễn Hữu Tấn",
    "Tronie Nguyen",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Portfolio",
    "Software Engineer Vietnam",
    "Frontend Developer Ho Chi Minh City",
  ],
  authors: [{ name: "Nguyen Huu Tan", url: siteUrl }],
  creator: "Nguyen Huu Tan",
  publisher: "Nguyen Huu Tan",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Nguyen Huu Tan — Frontend Developer",
    description:
      "6+ years of React.js/Next.js experience — projects for clients in Vietnam, Japan and Australia/New Zealand.",
    siteName: "Nguyen Huu Tan Portfolio",
    // og:image comes from `src/app/opengraph-image.tsx`, which renders a real 1200x630
    // card. The raw photo is 697x929 portrait and must not be advertised as 1200x630.
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Huu Tan — Frontend Developer",
    description:
      "6+ years of React.js/Next.js experience — projects for clients in Vietnam, Japan and Australia/New Zealand.",
    // No twitter:image declared — Twitter falls back to og:image above.
    creator: "@nhtan5544",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Token is supplied by the site owner via env; never hard-coded.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

// Dark is the only theme: native UI (scrollbars, form controls) follows it via color-scheme.
export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // `dark` is fixed (no theme switching); it still drives the `dark:` utilities in components.
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", inter.variable, plusJakartaSans.variable, "font-sans")}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

