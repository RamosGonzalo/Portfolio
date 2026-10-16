
"use client";
import { useEffect, useState } from "react";
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
    }, 120);

    return () => clearInterval(id);
  }, [fullText, prefersReduced]);

  return (
    <main className="flex items-center justify-center min-h-dvh px-6 sm:px-10 lg:px-24 xl:px-32 py-36">
      <div className="animate-fadeIn w-full max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-playfair font-bold bg-gradient-to-r from-[#634559] to-[#4D607A] bg-clip-text text-transparent min-h-[100px]">
          <span className="sr-only">{fullText}</span>
          <span aria-hidden="true">
            {typedText}
            {!prefersReduced && (
              <span className="font-mono text-neutral-400 animate-pulse">
                |
              </span>
            )}
          </span>
        </h1>

        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-inter tracking-widest text-neutral-400">
          <li className="rounded-full border border-neutral-700 px-3 py-1">
            Python
          </li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">
            FastAPI
          </li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">
            SQL
          </li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">
            Pandas
          </li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">
            Excel
          </li>
          <li className="rounded-full border border-neutral-700 px-3 py-1">
            Power BI
          </li>
        </ul>

        <p className="text-lg text-neutral-400 font-sans italic mt-6 mb-8 mx-auto">
          {home[lang].description}
        </p>
      </div>
    </main>
  );
}
