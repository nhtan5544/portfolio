"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const skillsData = {
  core: [
    { name: "HTML5", level: 98, color: "#E34F26", icon: "🌐" },
    { name: "CSS3 / Sass", level: 95, color: "#1572B6", icon: "🎨" },
    { name: "JavaScript", level: 93, color: "#F7DF1E", icon: "🟨" },
    { name: "TypeScript", level: 88, color: "#3178C6", icon: "🔷" },
    { name: "Responsive Design", level: 96, color: "#06B6D4", icon: "📱" },
  ],
  frameworks: [
    { name: "React", level: 95, color: "#61DAFB", icon: "⚛️" },
    { name: "Next.js", level: 90, color: "#8B5CF6", icon: "▲" },
    { name: "Tailwind CSS", level: 94, color: "#06B6D4", icon: "💨" },
    { name: "Framer Motion", level: 82, color: "#FF4D8D", icon: "✨" },
    { name: "Redux / Zustand", level: 80, color: "#764ABC", icon: "🔄" },
  ],
  tools: [
    { name: "Figma", level: 85, color: "#F24E1E", icon: "🎯" },
    { name: "Git & GitHub", level: 92, color: "#F05032", icon: "🔥" },
    { name: "Vite / Webpack", level: 80, color: "#646CFF", icon: "⚡" },
    { name: "Storybook", level: 75, color: "#FF4785", icon: "📖" },
    { name: "Vercel", level: 90, color: "#7C3AED", icon: "🔺" },
  ],
};

type CategoryKey = keyof typeof skillsData;

const categoryKeys: CategoryKey[] = ["core", "frameworks", "tools"];

function SkillBar({ name, level, color, icon, index }: {
  name: string; level: number; color: string; icon: string; index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.5 }}
          className="text-xs font-bold text-slate-500 dark:text-slate-400"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/30 dark:via-violet-950/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-2">
            {t("skills.subtitle")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="gradient-text">{t("skills.title")}</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categoryKeys.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="bg-white dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm ${
                  catIndex === 0 ? "bg-gradient-to-br from-indigo-500 to-purple-600" :
                  catIndex === 1 ? "bg-gradient-to-br from-green-500 to-emerald-600" :
                  "bg-gradient-to-br from-orange-500 to-pink-600"
                }`}>
                  {catIndex === 0 ? "01" : catIndex === 1 ? "02" : "🛠"}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {t(`skills.categories.${category}`)}
                </h3>
              </div>

              <div className="space-y-4">
                {skillsData[category].map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Figma", "Git", "Vite", "Storybook"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
