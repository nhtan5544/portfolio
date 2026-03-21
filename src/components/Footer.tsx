"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400"
                >
                    <p>
                        © {year} Nguyen Huu Tan. {t("footer.rights")}
                    </p>
                    <p className="flex items-center gap-1.5">
                        {t("footer.made_with")}
                        <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
                            <Heart size={14} className="text-pink-500 fill-pink-500" />
                        </motion.span>
                        {t("footer.using")}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
