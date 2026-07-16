import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Nguyen Huu Tan — Frontend & Mobile Developer",
    description: "Portfolio của Nguyen Huu Tan (Tronie Nguyen) — Frontend & Mobile Developer xây dựng giao diện web/app rõ ràng, hiệu suất cao.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className={cn("h-full", "antialiased", inter.variable, "font-sans")} suppressHydrationWarning>
            <body className="min-h-full flex flex-col">
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
