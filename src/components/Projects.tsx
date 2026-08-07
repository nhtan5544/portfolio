"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock, Star, Baby, Warehouse, HardHat, CalendarCheck, Landmark, Carrot, Car, Pizza, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

// Real project history, sourced from CV. All repos are private client/company
// codebases (no public demo links) — newest/ongoing engagements first.
const projectsData = [
    {
        title: "Care For Kids",
        category: "B2B2C PLATFORM",
        period: "2023 — Ongoing",
        description: {
            vi: "Nền tảng B2B2C quy mô lớn kết nối phụ huynh với các cơ sở giữ trẻ tại Úc và New Zealand — tìm kiếm trung tâm, đặt lịch tham quan, đánh giá, quản lý hồ sơ nhà cung cấp, blog nội dung, thanh toán online và các quy trình tự động.",
            en: "Large-scale B2B2C platform connecting parents with childcare providers across Australia and New Zealand — centre search, tour bookings, reviews, provider profile management, content blogging, online payments and automated workflows.",
        },
        tags: [".NET 10 / ASP.NET Core", "React", "TypeScript", "SQL Server", "Tailwind CSS", "Entity Framework Core", "Hangfire"],
        icon: Baby,
        gradient: "from-rose-500 to-pink-600",
        featured: true,
        demo: null as string | null,
    },
    {
        title: "Sitesmart Technology",
        category: "CONSTRUCTION MANAGEMENT",
        period: "2022 — Ongoing",
        description: {
            vi: "Ứng dụng web và di động quản lý toàn bộ nguồn lực công trình xây dựng — máy móc và hồ sơ đi kèm, nhân sự và chứng chỉ, công việc và nhiều hơn nữa.",
            en: "Web and mobile application to manage every resource of a construction site — machines and their documents, workers and their licenses, tasks and more.",
        },
        tags: ["React", "Micro-frontend", "Flutter", "Node.js", "AWS Fargate", "MongoDB"],
        icon: HardHat,
        gradient: "from-amber-500 to-yellow-600",
        featured: true,
        demo: null as string | null,
    },
    {
        title: "TWSS Web Application",
        category: "INVENTORY MANAGEMENT",
        period: "2022 — Ongoing",
        description: {
            vi: "Hệ thống quản lý tồn kho, giúp nhà cung cấp, nhà phân phối và người bán mua bán sản phẩm lẫn nhau trong khi vẫn theo dõi lượng hàng tồn của riêng mình.",
            en: "Inventory management platform where suppliers, distributors, and merchants trade with each other while tracking their own stock levels.",
        },
        tags: ["React", "Next.js", "TypeScript", "Flutter", "Python", "Django REST Framework", "MySQL", "AWS", "Terraform"],
        icon: Warehouse,
        gradient: "from-sky-500 to-indigo-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Bizbookly Web Application",
        category: "SALON BOOKING",
        period: "2021 — Ongoing",
        description: {
            vi: "Nền tảng đặt lịch cho tiệm nail — chủ động sắp xếp thời gian, phân bổ công việc hợp lý và theo dõi thu nhập nhân viên theo từng chi nhánh.",
            en: "Booking platform for nail salons — be proactive with time, arrange work properly, and track staff income by salon branch.",
        },
        tags: ["React", "Next.js", "TypeScript", "Flutter", "Python", "Django REST Framework", "MySQL", "AWS", "Terraform"],
        icon: CalendarCheck,
        gradient: "from-fuchsia-500 to-purple-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Japan Banking",
        category: "BANKING",
        period: "2021",
        description: {
            vi: "Nền tảng ngân hàng phục vụ cả khách hàng và nhân viên tại Nhật Bản — quy trình vay, trả nợ và quản lý tài khoản.",
            en: "Banking platform serving both customers and staff in Japan — loan procedures, repayments, and account management.",
        },
        tags: ["React", ".NET", "MySQL", "TypeScript", "Jest"],
        icon: Landmark,
        gradient: "from-blue-600 to-slate-700",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Vegetable E-Commerce Website",
        category: "E-COMMERCE",
        period: "2020 — 2021",
        description: {
            vi: "Sàn thương mại điện tử kết nối trực tiếp nông trại rau củ với khách hàng.",
            en: "E-commerce marketplace connecting vegetable farms directly with customers.",
        },
        tags: ["React", "Flutter", "Node.js", "MongoDB", "MySQL"],
        icon: Carrot,
        gradient: "from-green-500 to-emerald-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "AZGO",
        category: "TRANSPORTATION",
        period: "2020",
        description: {
            vi: "Ứng dụng dịch vụ vận chuyển tại Việt Nam.",
            en: "Transportation service application in Vietnam.",
        },
        tags: ["React", "Laravel", "MySQL", "Redux Saga", "SCSS", "Webpack"],
        icon: Car,
        gradient: "from-orange-500 to-red-600",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "Domino Pizza Website",
        category: "E-COMMERCE",
        period: "2020",
        description: {
            vi: "Nền tảng đặt hàng trực tuyến cho chuỗi pizza — quản lý đơn hàng, vận chuyển và tích hợp cổng thanh toán.",
            en: "Online ordering platform for a pizza chain — order management, shipping, and payment gateway integration.",
        },
        tags: ["Next.js", ".NET Core", "SQL Server", "TypeScript", "SCSS Modules"],
        icon: Pizza,
        gradient: "from-red-500 to-rose-700",
        featured: false,
        demo: null as string | null,
    },
    {
        title: "[Freelancer] Module App Chat",
        category: "FREELANCE",
        period: "2020",
        description: {
            vi: "Module freelance quản lý khung giờ và phòng livestream, hỏi đáp khách hàng và xử lý chatbox thời gian thực.",
            en: "Application to manage live stream time frames and rooms, handle customer questions and real-time chatbox.",
        },
        tags: ["React", ".NET Core", "SQL Server", "TypeScript", "Ant Design", "AWS Amplify"],
        icon: MessageCircle,
        gradient: "from-teal-500 to-cyan-600",
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
          className="mb-10 sm:mb-12 border-b border-border/60 pb-4 text-left"
        >
          <p className="text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("projects.title")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">{t("projects.role_note")}</p>
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
                <span className="ml-auto">{project.period}</span>
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

                  {project.demo ? (
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
                  ) : (
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                      <Lock className="size-3.5" />
                      {t("projects.private")}
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
