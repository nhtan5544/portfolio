"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column — Content & Actions */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Quick links tag strip */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleScroll(link.href)}
                  className="px-3.5 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {t(link.key)}
                </button>
              ))}
            </motion.div>

            {/* Transform-only animation: an `opacity: 0` initial state would ship the LCP
                heading hidden in the prerendered HTML. */}
            <motion.h1
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-1 leading-tight"
            >
              {t("hero.greeting")} <span className="gradient-text">{t("hero.name")}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex items-center gap-2 mb-3 min-h-[36px]"
            >
              <span className="text-lg sm:text-xl font-semibold text-muted-foreground">
                {t("hero.i_am_a")}
              </span>
              <WordRotate
                words={["Frontend Developer", "React.js Developer", "UI/UX Craftsman"]}
                className="text-lg sm:text-xl font-bold text-primary gradient-text"
              />
            </motion.div>

            <motion.p
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="text-base text-muted-foreground max-w-xl leading-relaxed mb-6"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <ShimmerButton
                className="h-11 px-6 text-sm font-semibold rounded-full shadow-lg"
                onClick={() => handleScroll("#projects")}
              >
                <span className="flex items-center gap-2 text-white dark:text-white">
                  {t("hero.cta_primary")}
                  <ArrowRight className="size-4" />
                </span>
              </ShimmerButton>
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-6 rounded-full"
                onClick={() => handleScroll("#contact")}
              >
                {t("hero.cta_secondary")}
              </Button>
            </motion.div>

            {/* NumberTicker Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-3 gap-4 py-3 border-y border-border/60 w-full max-w-lg mb-6"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono flex items-center">
                  <NumberTicker value={6} className="text-foreground" />+
                </p>
                <p className="text-xs text-muted-foreground font-medium">{t("hero.stats.experience")}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono flex items-center">
                  <NumberTicker value={9} className="text-foreground" />
                </p>
                <p className="text-xs text-muted-foreground font-medium">{t("hero.stats.projects")}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono flex items-center">
                  <NumberTicker value={100} className="text-foreground" />%
                </p>
                <p className="text-xs text-muted-foreground font-medium">{t("hero.stats.commitment")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs font-medium text-muted-foreground mr-1">{t("hero.connect")}</span>
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

          {/* Right Column — Visual Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group max-w-xs sm:max-w-sm w-full"
            >
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary/30 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative p-3 bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                <BorderBeam size={200} duration={12} delay={9} colorFrom="#8b5cf6" colorTo="#ec4899" />
                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden border border-border/50">
                  <Image
                    src="/image.png"
                    alt={t("hero.avatar_alt")}
                    fill
                    sizes="(min-width: 1024px) 400px, 300px"
                    className="object-cover object-bottom transform group-hover:scale-105 transition duration-500"
                    priority
                  />
                </div>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-foreground">{t("hero.name")}</p>
                    <p className="text-[11px] text-muted-foreground">Frontend Developer</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t("hero.available")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
