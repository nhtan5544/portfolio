"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { skillsData, type SkillCategory } from "@/lib/skills-data";

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
          className="mb-6 text-center"
        >
          <p className="text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">
            {t("skills.subtitle")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            {t("skills.title")}
          </h2>
        </motion.div>

        <SkillsGlobe />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-4">
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
