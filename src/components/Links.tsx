"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const links = [
  {
    icon: Github,
    key: "github",
    href: "https://github.com/nhtan5544",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    key: "linkedin",
    href: "https://www.linkedin.com/in/tan-nguyen-huu-0ab0721b1/",
    color: "text-sky-500",
  },
  {
    icon: Mail,
    key: "email",
    href: "mailto:nhtan5544@gmail.com",
    color: "text-accent-foreground",
  },
];

export default function Links() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="links" className="py-16 sm:py-20 lg:py-24 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <p className="text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">
            {t("links.subtitle")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t("links.title")}
          </h2>
          <p className="text-muted-foreground">{t("links.description")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ icon: Icon, key, href, color }, i) => (
            <motion.a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <Card className="h-full [--card-spacing:--spacing(5)] transition-shadow group-hover:ring-primary/40">
                <CardContent className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Icon className={`size-6 ${color}`} />
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t(`links.${key}`)}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{t(`links.${key}_desc`)}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
