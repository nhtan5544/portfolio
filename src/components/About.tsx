"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Mail, Smartphone, Monitor, Palette, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TODO(nhtan5544): mảng công nghệ dưới đây kế thừa từ danh sách kỹ năng —
// chỉnh lại nếu bộ công nghệ hiện tại đang dùng khác đi.
const currentTech = ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"];

const focusAreas = [
  { icon: Monitor, key: "about.focus.web" },
  { icon: Smartphone, key: "about.focus.mobile" },
  { icon: Palette, key: "about.focus.uiux" },
];

import { MagicCard } from "@/components/ui/magic-card";

// `className` positions the card in the grid and belongs on the animation wrapper.
// Padding lives on the MagicCard surface and alignment on the inner flex box, so both
// need their own prop — passing either through `className` silently does nothing.
function BentoCard({
  className,
  surfaceClassName,
  contentClassName,
  delay,
  isInView,
  children,
}: {
  className?: string;
  surfaceClassName?: string;
  contentClassName?: string;
  delay: number;
  isInView: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <MagicCard
        gradientColor="#8b5cf620"
        gradientFrom="#8b5cf6"
        gradientTo="#ec4899"
        className={cn(
          "h-full border-border/80 bg-card/60 backdrop-blur-sm p-6",
          surfaceClassName
        )}
      >
        <div className={cn("h-full flex flex-col", contentClassName)}>{children}</div>
      </MagicCard>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 flex items-baseline justify-between border-b border-border/60 pb-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(140px,auto)] grid-flow-dense gap-4">
          {/* Name / title */}
          <BentoCard className="col-span-2" delay={0.05} isInView={isInView}>
            <p className="text-3xl sm:text-4xl font-bold text-foreground leading-none">
              {t("hero.name")}
            </p>
            <div className="mt-3 h-px w-10 bg-primary" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {t("hero.title")}
            </p>
          </BentoCard>

          {/* Photo */}
          <BentoCard
            className="col-span-2 md:col-span-1 md:row-span-2"
            surfaceClassName="p-0"
            delay={0.1}
            isInView={isInView}
          >
            <div className="relative w-full h-full min-h-55 rounded-[calc(var(--radius)-1px)] overflow-hidden">
              <Image
                src="/IMG_7719.jpg"
                alt={t("about.photo_alt")}
                fill
                sizes="(min-width: 768px) 25vw, 90vw"
                className="object-cover object-bottom"
              />
            </div>
          </BentoCard>

          {/* Location */}
          <BentoCard className="col-span-2 md:col-span-1" delay={0.15} isInView={isInView}>
            <div className="flex items-center gap-2 text-accent-foreground mb-2">
              <MapPin className="size-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {t("about.info.location")}
              </span>
            </div>
            <p className="text-lg font-bold text-foreground leading-snug">
              {t("about.info.location_value")}
            </p>
            <p className="mt-auto pt-3 text-xs font-mono text-muted-foreground">
              10.8231° N, 106.6297° E — GMT+7
            </p>
          </BentoCard>

          {/* Bio 1 */}
          <BentoCard className="col-span-2" delay={0.2} isInView={isInView}>
            <p className="text-lg font-bold text-foreground mb-2">{t("about.mindset_title")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.description1")}
            </p>
          </BentoCard>

          {/* CV request */}
          <BentoCard
            className="col-span-2 md:col-span-1"
            contentClassName="items-center justify-center text-center"
            delay={0.25}
            isInView={isInView}
          >
            <Download className="size-6 text-accent-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-3">{t("about.cv_hint")}</p>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              nativeButton={false}
              render={
                <a
                  href={`mailto:nhtan5544@gmail.com?subject=${encodeURIComponent(
                    t("about.cv_subject")
                  )}`}
                />
              }
            >
              <Mail className="size-3.5" />
              {t("about.cv")}
            </Button>
          </BentoCard>

          {/* Bio 2 + tech */}
          <BentoCard className="col-span-2 md:col-span-4" delay={0.3} isInView={isInView}>
            <p className="text-lg font-bold text-foreground mb-2">{t("about.craft_title")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t("about.description2")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentTech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-border">
              {focusAreas.map(({ icon: Icon, key }) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                >
                  <Icon className="size-3.5 text-accent-foreground" />
                  {t(key)}
                </span>
              ))}
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t("about.open")}
              </span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
