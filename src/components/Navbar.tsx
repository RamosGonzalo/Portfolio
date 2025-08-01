"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const languages = ["EN", "ES"];

const Navbar = () => {
    const [lang, setLang] = useState("EN");
    const pathname = usePathname();

    const changeLanguage = () => {
        const currentIndex = languages.indexOf(lang);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLang(languages[nextIndex]);
    };

    return (
        <header
        className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-fit transition-transform duration-500">
        <nav className="px-6 sm:px-10 py-4 bg-stone-950 border border-neutral-700 rounded-full shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-x-12">
            <div className="select-none text-neutral-300 font-semibold text-md">
                <Link
                href="/">
                <Image 
                src="/logo.png"
                alt="logo"
                width={35}
                height={35}
                unoptimized
                />
                </Link>
            </div>
            <ul className="flex items-center gap-x-8 text-md font-medium">
                <li>
                <Link
                href="/"
                className={`px-3 py-1 rounded-md transition-all ${
                    pathname === "/" ? "bg-neutral-800 text-white" : "hover:text-white"
                }`}>
                Home
                </Link>
                </li>
                <li>
                <Link
                    href="/about"
                    className={`px-3 py-1 rounded-md transition-all ${pathname === "/about" ? "bg-neutral-800 text-white" : "hover:text-white"}`}
                >
                    About
                </Link>
                </li>
                <li>
                <Link
                    href="/projects"
                    className={`px-3 py-1 rounded-md transition-all ${pathname === "/projects" ? "bg-neutral-800 text-white" : "hover:text-white"}`}
                >
                    Projects
                </Link>
                </li>
                <li>
                <Link
                    href="/blog"
                    className={`px-3 py-1 rounded-md transition-all ${pathname === "/blog" ? "bg-neutral-800 text-white" : "hover:text-white"}`}
                >
                    Blog
                </Link>
                </li>
            </ul>
            <div
                onClick={changeLanguage}
                className="text-sm px-3 py-1 rounded-2xl hover:bg-neutral-800 hover:text-white transition-all cursor-pointer select-none"
            >
                {lang}
            </div>
            </div>
        </nav>
        </header>
    );
};

export default Navbar;
