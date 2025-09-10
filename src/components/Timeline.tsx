"use client";

import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { useLang } from "@/context/langContext";
import type { Lang } from "@/types/timeline";
import { timelineByLang, timelineCopy } from "@/i18n/timeline";

const dotColor = (c?: string) => {
    switch (c) {
        case "blue": return "bg-blue-500";
        case "amber": return "bg-amber-300";
        case "green": return "bg-green-500";
        case "red": return "bg-red-500";
        default: return "bg-blue-500";
    }
    };

    const easeOutBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];

    const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.35,
        ease: easeOutBezier,
        when: "beforeChildren",
        staggerChildren: 0.06,
        },
    },
    };

    const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, ease: easeOutBezier },
    },
    };

    export default function Timeline() {
    const lang = useLang() as Lang;
    const items = useMemo(() => timelineByLang[lang], [lang]);
    const copy = timelineCopy[lang];

    return (
        <section id="experience" className="py-10 px-6 sm:px-10 lg:px-24 xl:px-32">
        <div className="w-full max-w-3xl mx-auto">
            <motion.div
            key={lang}
            className="space-y-1 rounded-xl overflow-hidden cursor-default transform-gpu origin-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.30, ease: easeOutBezier }}
            >
            <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4">
                <h2 className="text-lg font-semibold pt-4">{copy.heading}</h2>

                <div className="relative pl-4 pt-4">
                
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

                <div className="space-y-4 mb-8">
                    {items.map((item, idx) => (
                    <div key={idx} className="relative">
                        <div
                        className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${dotColor(
                            item.color
                        )} ring-4 ring-white dark:ring-gray-900`}
                        />

                        <motion.div
                        className="py-2 px-2 rounded-md transform-gpu origin-left"
                        variants={itemVariants}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.16, ease: easeOutBezier }}
                        >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold hover:underline underline-offset-4"
                            >
                                {item.org}
                            </a>
                            ) : (
                            <p className="font-bold">{item.org}</p>
                            )}

                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                            {item.period}
                            </p>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {item.title}
                        </p>

                        {!!item.bullets?.length && (
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                            {item.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                            </ul>
                        )}
                        </motion.div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </motion.div>
        </div>
        </section>
    );
}
