"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/nhtan5544", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tan-nguyen-huu-0ab0721b1/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:nhtan5544@gmail.com", label: "Email" },
];

const quickLinks = [
  { key: "hero.quick.projects", href: "#projects" },
  { key: "hero.quick.about", href: "#about" },
  { key: "hero.quick.skills", href: "#skills" },
  { key: "hero.quick.contact", href: "#contact" },
];

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden pt-24 pb-20 sm:pb-0"
    >
      <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,color-mix(in_srgb,var(--primary)_15%,transparent),transparent_50%),radial-gradient(circle_at_85%_0%,color-mix(in_srgb,#ec4899_15%,transparent),transparent_50%),radial-gradient(circle_at_50%_100%,color-mix(in_srgb,var(--primary)_8%,transparent),transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,var(--background)_100%)]"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border shadow-lg mb-6"
        >
          <Image
            src="/IMG_7719.jpg"
            alt="Nguyen Huu Tan"
            fill
            sizes="128px"
            className="object-cover object-bottom"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3"
        >
          {t("hero.greeting")} <span className="gradient-text">{t("hero.name")}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-lg sm:text-xl font-medium text-muted-foreground mb-4"
        >
          {t("hero.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {quickLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleScroll(link.href)}
              className="px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              {t(link.key)}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Button size="lg" className="h-11 px-6 rounded-full" onClick={() => handleScroll("#projects")}>
            {t("hero.cta_primary")}
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-6 rounded-full"
            onClick={() => handleScroll("#contact")}
          >
            {t("hero.cta_secondary")}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-accent-foreground hover:border-primary/40 transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => handleScroll("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs"
      >
        <span>{t("hero.scroll")}</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
