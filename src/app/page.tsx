"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Gonza";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-24 xl:px-32 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-playfair font-bold  bg-gradient-to-r from-[#634559] to-[#4D607A] bg-clip-text text-transparent min-h-[100px]">
          {typedText}
          <span className="text-neutral-400 animate-pulse">|</span>
        </h1>

        <p className="text-lg text-neutral-400 font-sans italic mt-6 mb-8 max-w-xl mx-auto">
          Passionate about technology and learning. Focused on teamwork and industry best practices to solve real-world problems.
        </p>

        <button className="bg-neutral-800 text-white px-4 py-2 rounded-md hover:bg-neutral-600 transition-all cursor-pointer">
          View my CV
        </button>
      </div>
    </main>
  );
}
