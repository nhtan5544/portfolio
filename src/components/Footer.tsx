"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: Github, href: "https://github.com/nhtan5544", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tan-nguyen-huu-0ab0721b1/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:nhtan5544@gmail.com", label: "Email" },
];

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
                >
                    <p className="flex items-center gap-2">
                        <span className="font-bold text-foreground">NT</span>
                        <span className="text-border">·</span>
                        © {year} {t("hero.name")}. {t("footer.rights")}
                    </p>
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
