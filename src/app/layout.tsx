import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
});

const siteUrl = "https://portfolio-nhtan5544.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nguyen Huu Tan — Frontend & Mobile Developer Portfolio",
    template: "%s | Nguyen Huu Tan Portfolio",
  },
  description:
    "Portfolio cá nhân của Nguyen Huu Tan (Tronie Nguyen) — Frontend & Mobile Developer chuyên xây dựng giao diện Web/App ấn tượng, mượt mà và tối ưu hiệu suất tại TP. Hồ Chí Minh.",
  keywords: [
    "Nguyen Huu Tan",
    // The diacritic spelling is a distinct Vietnamese search term from the plain one.
    "Nguyễn Hữu Tấn",
    "Tronie Nguyen",
    "Frontend Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Engineer",
    "TypeScript Portfolio",
    "Software Engineer Vietnam",
    "Lập trình viên Frontend TP.HCM",
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
    locale: "vi_VN",
    url: siteUrl,
    title: "Nguyen Huu Tan — Frontend & Mobile Developer",
    description:
      "Chuyên xây dựng trải nghiệm Web & App hiện đại, mượt mà với Next.js, React Native & TypeScript.",
    siteName: "Nguyen Huu Tan Portfolio",
    // og:image comes from `src/app/opengraph-image.tsx`, which renders a real 1200x630
    // card. The raw photo is 697x929 portrait and must not be advertised as 1200x630.
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Huu Tan — Frontend & Mobile Developer",
    description:
      "Chuyên xây dựng trải nghiệm Web & App hiện đại, mượt mà với Next.js, React Native & TypeScript.",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn("h-full", "antialiased", inter.variable, plusJakartaSans.variable, "font-sans")}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

