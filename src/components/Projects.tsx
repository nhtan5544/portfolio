"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: {
      vi: "Nền tảng thương mại điện tử đầy đủ tính năng với thanh toán online, quản lý kho hàng và dashboard analytics.",
      en: "Full-featured e-commerce platform with online payments, inventory management and analytics dashboard.",
    },
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    color: "from-indigo-500 to-purple-600",
    emoji: "🛒",
    featured: true,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Real-time Chat App",
    description: {
      vi: "Ứng dụng chat thời gian thực với phòng chat, tin nhắn riêng tư, chia sẻ file và thông báo đẩy.",
      en: "Real-time chat application with chat rooms, private messages, file sharing and push notifications.",
    },
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    color: "from-green-500 to-emerald-600",
    emoji: "💬",
    featured: true,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Task Manager",
    description: {
      vi: "Ứng dụng quản lý công việc thông minh tích hợp AI để tự động phân loại, ưu tiên và gợi ý task.",
      en: "Smart task management app with AI integration for automatic categorization, prioritization and suggestions.",
    },
    tags: ["Next.js", "OpenAI API", "Tailwind", "Supabase"],
    color: "from-orange-500 to-rose-600",
    emoji: "🤖",
    featured: false,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: {
      vi: "Website portfolio cá nhân với animation mượt mà, đa ngôn ngữ và chế độ tối/sáng.",
      en: "Personal portfolio website with smooth animations, multi-language support and dark/light mode.",
    },
    tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    color: "from-pink-500 to-violet-600",
    emoji: "✨",
    featured: false,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Finance Dashboard",
    description: {
      vi: "Dashboard tài chính cá nhân với biểu đồ tương tác, theo dõi chi tiêu và báo cáo tháng.",
      en: "Personal finance dashboard with interactive charts, expense tracking and monthly reports.",
    },
    tags: ["React", "Recharts", "Node.js", "PostgreSQL"],
    color: "from-cyan-500 to-blue-600",
    emoji: "📊",
    featured: false,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Blog CMS",
    description: {
      vi: "Hệ thống quản lý nội dung blog với editor markdown, SEO optimization và CDN image.",
      en: "Blog content management system with markdown editor, SEO optimization and CDN image handling.",
    },
    tags: ["Next.js", "MDX", "Cloudinary", "Prisma"],
    color: "from-amber-500 to-orange-600",
    emoji: "📝",
    featured: false,
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Projects() {
  const { t, locale } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 dark:via-pink-950/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-widest mb-2">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="gradient-text">{t("projects.title")}</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 text-xs font-bold">
                  <Star size={10} fill="currentColor" />
                  {t("projects.featured")}
                </div>
              )}

              {/* Color header */}
              <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.span
                  animate={hoveredIndex === i ? { scale: 1.3, rotate: 15 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl"
                >
                  {project.emoji}
                </motion.span>
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description[locale as "vi" | "en"]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${project.color}`}
                  >
                    <ExternalLink size={12} />
                    {t("projects.view_demo")}
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github size={12} />
                    {t("projects.view_code")}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
