"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { skillsData, allSkills, type SkillCategory } from "@/lib/skills-data";

const SkillsGlobe = dynamic(() => import("./SkillsGlobe"), {
  ssr: false,
  loading: () => (
    <div className="h-105 sm:h-130 w-full flex items-center justify-center">
      <div className="w-40 h-40 rounded-full border border-border animate-pulse" />
    </div>
  ),
});

const categoryKeys: SkillCategory[] = ["core", "frameworks", "tools"];

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-baseline justify-between border-b border-border/60 pb-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("skills.title")}
          </h2>
        </motion.div>

        <SkillsGlobe />

        {/* Marquee Tech Stack Banner */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-card/40 py-3 my-6 backdrop-blur-xs">
          <Marquee pauseOnHover className="[--duration:30s]">
            {allSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-background/80 text-xs font-semibold text-foreground shadow-xs hover:border-primary/50 transition-colors"
                >
                  <Icon style={{ color: skill.color }} className="size-4" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent" />
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6">
          {categoryKeys.map((category) => (
            <div key={category} className="flex flex-col items-center gap-2 max-w-xs">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t(`skills.categories.${category}`)}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {skillsData[category].map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

