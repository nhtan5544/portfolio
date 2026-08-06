"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock, Star, ShoppingCart, MessageCircle, Bot, Sparkles, BarChart3, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

// TODO(nhtan5544): đây là danh sách dự án kế thừa từ bản nháp — mã nguồn đang
// riêng tư nên chưa có nút "Xem GitHub". Thêm link "demo" thật khi có; nếu một
// dự án nào đó có repo public, thêm lại link vào đây.
const projectsData = [
    {
        title: "E-Commerce Platform",
        category: "WEB APP",
        description: {
            vi: "Nền tảng thương mại điện tử với thanh toán online, quản lý kho hàng và dashboard analytics.",
            en: "E-commerce platform with online payments, inventory management and an analytics dashboard.",
        },
        tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
        icon: ShoppingCart,
        gradient: "from-indigo-500 to-purple-600",
        featured: true,
        demo: null as string | null,
    },
    {
        title: "Real-time Chat App",
        category: "WEB APP",
        description: {
            vi: "Ứng dụng chat thời gian thực với phòng chat, tin nhắn riêng tư, chia sẻ file và thông báo đẩy.",
            en: "Real-time chat application with chat rooms, private messages, file sharing and push notifications.",
        },
        tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
        icon: MessageCircle,
        gradient: "from-emerald-500 to-teal-600",
        featured: true,
        demo: null as string | null,
    },
    {
        title: "AI Task Manager",
        category: "WEB APP",
        description: {
            vi: "Ứng dụng quản lý công việc tích hợp AI để tự động phân loại, ưu tiên và gợi ý task.",
            en: "Task management app with AI integration for automatic categorization, prioritization and suggestions.",
        },
        tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
        icon: Bot,
        gradient: "from-orange-500 to-rose-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Portfolio Website",
        category: "WEB APP",
        description: {
            vi: "Website portfolio cá nhân này — animation mượt, đa ngôn ngữ và chế độ sáng/tối.",
            en: "This personal portfolio site — smooth animations, multi-language support and light/dark mode.",
        },
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
        icon: Sparkles,
        gradient: "from-pink-500 to-violet-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Finance Dashboard",
        category: "WEB APP",
        description: {
            vi: "Dashboard tài chính cá nhân với biểu đồ tương tác, theo dõi chi tiêu và báo cáo tháng.",
            en: "Personal finance dashboard with interactive charts, expense tracking and monthly reports.",
        },
        tags: ["React", "Recharts", "Node.js", "PostgreSQL"],
        icon: BarChart3,
        gradient: "from-cyan-500 to-blue-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Blog CMS",
        category: "WEB APP",
        description: {
            vi: "Hệ thống quản lý nội dung blog với editor markdown, tối ưu SEO và CDN cho ảnh.",
            en: "Blog content management system with a markdown editor, SEO optimization and CDN image handling.",
        },
        tags: ["Next.js", "MDX", "Cloudinary", "Prisma"],
        icon: FileText,
        gradient: "from-amber-500 to-orange-600",
        featured: false,
        demo: null as string | null,
    },
];

export default function Projects() {
    const { t, locale } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 flex items-baseline justify-between border-b border-border/60 pb-4 text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("projects.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              className={cn(
                "flex h-full flex-col",
                project.featured ? "lg:col-span-6" : "lg:col-span-4"
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-3 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-6 bg-border" />
                <span className="tracking-widest">{project.category}</span>
              </div>

              {/* Card draws its edge with `ring-1`, not a border, so the hover accent has to
                  be a ring — and `transition-shadow`, since the ring is a box-shadow. */}
              <Card className="relative flex-1 py-0 gap-0 overflow-hidden hover:ring-primary/50 transition-shadow duration-300">
                {project.featured && (
                  <BorderBeam size={200} duration={12} delay={i * 3} colorFrom="#6366f1" colorTo="#ec4899" />
                )}
                <div className={cn("relative flex flex-col p-4 bg-linear-to-br", project.featured ? "h-48" : "h-40", project.gradient)}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <project.icon className={cn("text-white/90", project.featured ? "size-12" : "size-10")} strokeWidth={1.5} />
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 gap-1 bg-white/90 text-neutral-900 hover:bg-white/90">
                      <Star size={10} fill="currentColor" />
                      {t("projects.featured")}
                    </Badge>
                  )}
                </div>

                <CardContent className="pt-5 pb-5 flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description[locale as "vi" | "en"]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.demo && (
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        size="sm"
                        className="flex-1 rounded-full"
                        nativeButton={false}
                        render={<a href={project.demo} target="_blank" rel="noopener noreferrer" />}
                      >
                        <ExternalLink className="size-3.5" />
                        {t("projects.view_demo")}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
            </div>
        </section>
    );
}
