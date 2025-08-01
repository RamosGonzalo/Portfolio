"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const languages = ["ES", "EN"];

const Navbar = () => {
    const [lang, setLang] = useState("ES");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const changeLanguage = () => {
        const currentIndex = languages.indexOf(lang);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLang(languages[nextIndex]);
    };

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
        className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 w-fit transition-transform duration-500 ${
            isVisible ? "translate-y-0" : "-translate-y-32"
        }`}
        >
        <nav className="px-6 sm:px-10 py-4 bg-stone-950 border border-neutral-700 rounded-full shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-x-12">
            <div className="select-none text-neutral-300 font-semibold text-md">
                {"<"}
                <span className="text-violet-600">GR</span>
                {"/>"}
            </div>
            <ul className="flex items-center gap-x-8 text-md font-medium">
                <li>
                <Link
                    href="/"
                    className="text-neutral-300 hover:text-violet-500 transition-all hover:translate-x-1"
                >
                    Inicio
                </Link>
                </li>
                <li>
                <Link
                    href="/about"
                    className="text-neutral-300 hover:text-violet-500 transition-all hover:translate-x-1"
                >
                    Sobre mí
                </Link>
                </li>
                <li>
                <Link
                    href="/projects"
                    className="text-neutral-300 hover:text-violet-500 transition-all hover:translate-x-1"
                >
                    Proyectos
                </Link>
                </li>
                <li>
                <Link
                    href="/blog"
                    className="text-neutral-300 hover:text-violet-500 transition-all hover:translate-x-1"
                >
                    Blog
                </Link>
                </li>
            </ul>
            <div
                onClick={changeLanguage}
                className="text-neutral-300 text-sm px-3 py-1 rounded-2xl hover:bg-neutral-800 hover:text-violet-500 transition-all cursor-pointer select-none"
            >
                {lang}
            </div>
            </div>
        </nav>
        </header>
    );
};

export default Navbar;
