"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/context/langContext";
import { contactCopy } from "@/i18n/contact";

export default function ContactSection() {
    const lang = useLang();
    const t = contactCopy[lang];
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
    const update = () => {
        const fmt = new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Argentina/Buenos_Aires",
        }).format(new Date());
        setLocalTime(fmt);
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
    }, [lang]);

    const mailtoHref = `mailto:gonzaloramos.dev@gmail.com?subject=${encodeURIComponent(t.cta.emailSubject)}&body=${encodeURIComponent(t.cta.emailBody)}`;

    const contacts = [
        {
        label: t.items.email,
        sub: "gonzaloramos.dev@gmail.com",
        href: "mailto:gonzaloramos.dev@gmail.com",
        icon: "/icons/email.svg",
        size: 22,
        },
        {
        label: t.items.instagram,
        sub: "@gonmadeit",
        href: "https://instagram.com/gonmadeit",
        icon: "/icons/instagram.svg",
        size: 22,
        },
        {
        label: t.items.linkedin,
        sub: "in/ramosgonzalo",
        href: "https://linkedin.com/in/ramosgonzalo",
        icon: "/icons/linkedin.svg",
        size: 28,
        },
        {
        label: t.items.medium,
        sub: "gonmadeit.medium.com",
        href: "https://medium.com/@gonmadeit",
        icon: "/icons/medium.svg",
        size: 26,
        },
    ];

    return (
        <section id="contact" className="pt-36 px-6 sm:px-10 lg:px-24 xl:px-32">
            <div className="animate-fadeIn w-full max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <p className="text-sm sm:text-base leading-relaxed mb-6 opacity-80">{t.subtitle}</p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t.lead}</p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                >
                {t.cta.write}
                </a>

                <a
                href="/Gonzalo_Ramos_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm hover:bg-white/5 transition"
                >
                {t.cta.download}
                </a>

                <span className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 dark:border-gray-700/60 px-3 py-1 text-xs text-gray-600 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.cta.city} • {localTime} ({t.cta.tz})
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contacts.map((c) => (
                <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                    aria-label={c.label}
                >
                    <Image
                    src={c.icon}
                    alt={c.label}
                    width={c.size}
                    height={c.size}
                    className="opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-200"
                    unoptimized
                    />
                    <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{c.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{c.sub}</p>
                    </div>
                </a>
                ))}
            </div>
            </div>
        </section>
    );
}
