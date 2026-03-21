"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Heart, Download, Code2, Coffee, FolderGit2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
    { icon: FolderGit2, value: "20+", key: "about.stats.projects", gradient: "from-indigo-500 to-purple-600" },
    { icon: Code2, value: "3+", key: "about.stats.experience", gradient: "from-violet-500 to-pink-600" },
    { icon: Coffee, value: "∞", key: "about.stats.coffee", gradient: "from-amber-500 to-orange-600" },
];

const infoItems = [
    { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam", color: "text-pink-500" },
    { icon: Briefcase, label: "Role", value: "Frontend Developer", color: "text-indigo-500" },
    { icon: GraduationCap, label: "Education", value: "Software Engineering", color: "text-violet-500" },
    { icon: Heart, label: "Passion", value: "UI/UX & Creative Code", color: "text-rose-500" },
];

export default function About() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 dark:via-indigo-950/20 to-transparent" />

            {/* Decorative blobs */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-2">
                        {t("about.subtitle")}
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black">
                        <span className="gradient-text">{t("about.title")}</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left - Avatar col */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-2 flex flex-col items-center gap-6"
                    >
                        {/* Avatar */}
                        <div className="relative">
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-pink-500 blur-2xl opacity-30 scale-110" />
                            <div className="relative w-60 h-60 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                                <Image
                                    src="/IMG_7719.jpg"
                                    alt="Nguyen Huu Tan"
                                    fill
                                    className="object-cover object-bottom"
                                    priority
                                />
                            </div>

                            {/* Badge top-right */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-3 -right-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg px-3 py-1.5 flex items-center gap-1.5 border border-slate-100 dark:border-slate-700"
                            >
                                <span className="text-base">⚡</span>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">FE Dev</span>
                            </motion.div>

                            {/* Badge bottom-left */}
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-3 -left-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg px-3 py-1.5 flex items-center gap-1.5 border border-slate-100 dark:border-slate-700"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Open to work</span>
                            </motion.div>
                        </div>

                        {/* Info cards */}
                        <div className="w-full space-y-3">
                            {infoItems.map(({ icon: Icon, label, value, color }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700"
                                >
                                    <div
                                        className={`shrink-0 w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-700/80 flex items-center justify-center ${color}`}
                                    >
                                        <Icon size={15} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{label}</p>
                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">
                                            {value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CV Button */}
                        <motion.a
                            href="#"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.9 }}
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                        >
                            <Download size={15} />
                            Download CV
                        </motion.a>
                    </motion.div>

                    {/* Right - Content col */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-3 flex flex-col gap-8"
                    >
                        {/* Description */}
                        <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{t("about.description1")}</p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t("about.description2")}</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map(({ icon: Icon, value, key, gradient }, i) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    className="relative group bg-white dark:bg-slate-800/50 rounded-2xl p-5 text-center border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                                >
                                    {/* bg glow on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                                    />
                                    <div
                                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-3`}
                                    >
                                        <Icon size={16} className="text-white" />
                                    </div>
                                    <p className="text-2xl font-black text-slate-800 dark:text-slate-100">{value}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{t(key)}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="bg-gradient-to-br from-indigo-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:to-pink-500/10 rounded-3xl p-6 border border-indigo-100 dark:border-indigo-900/50"
                        >
                            <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3">
                                Currently working with
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.9 + i * 0.06 }}
                                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 shadow-sm"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
