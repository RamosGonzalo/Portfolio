"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/langContext";
import { home } from "@/i18n/home";

export default function HomePage() {
  const lang = useLang();
  const fullText = home[lang].title;
  const [typedText, setTypedText] = useState("");
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReduced(!!m?.matches);
    handler();
    m?.addEventListener?.("change", handler);
    return () => m?.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      setTypedText(fullText);
      return;
    }
    setTypedText("");
    let index = 0;
    const id = setInterval(() => {
      index++;
      setTypedText(fullText.slice(0, index));
      if (index >= fullText.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, [fullText, prefersReduced]);

  return (
    <main className="flex items-center justify-center min-h-dvh px-6 sm:px-10 lg:px-24 xl:px-32 py-10">
      <div className="animate-fadeIn w-full max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-playfair font-bold bg-gradient-to-r from-[#634559] to-[#4D607A] bg-clip-text text-transparent min-h-[100px]">
          <span className="sr-only">{fullText}</span>
          <span aria-hidden="true">
            {typedText}
            {!prefersReduced && (
              <span className="font-mono text-neutral-400 animate-pulse">|</span>
            )}
          </span>
        </h1>

        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-inter tracking-widest text-neutral-400">
          <li className="rounded-full border border-neutral-700 px-3 py-1">Java</li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">AWS</li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">Python</li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">React.js</li>
        </ul>

        <p className="text-lg text-neutral-400 font-sans italic mt-6 mb-8 mx-auto">
          {home[lang].description}
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="/Gonzalo_Ramos_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 px-4 py-2.5 rounded-md hover:bg-neutral-600 hover:text-white transition-all cursor-pointer"
          >
            {home[lang].cvButton}
          </a>

          <Link
            href={`/${lang}/contact`}
            className="px-4 py-2.5 rounded-md border border-neutral-700 hover:bg-white/5 transition-all"
          >
            {lang === "es" ? "Contacto" : "Contact"}
          </Link>
        </div>
      </div>
    </main>
  );
}
