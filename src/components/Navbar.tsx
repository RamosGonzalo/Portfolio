"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useLang } from "@/context/langContext"
import { navbar } from "@/i18n/navbar"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
    const lang = useLang()
    const pathname = usePathname()
    const router = useRouter()

    const [highlight, setHighlight] = useState({ left: 0, width: 0 })
    const containerRef = useRef<HTMLUListElement | null>(null)
    const linkRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({})

    const labels = navbar[lang]

    const links = [
        { label: labels.home, path: "" },
        { label: labels.about, path: "about" },
        { label: labels.projects, path: "projects" },
        { label: labels.blog, path: "blog" },
    ]

    const toggleLanguage = () => {
        const newLang = lang === "en" ? "es" : "en"
        const newPath = pathname.replace(/^\/(en|es)/, `/${newLang}`)
        router.push(newPath)
    }

    const normalizedPathname =
        pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname

    useEffect(() => {
        const elem = linkRefs.current[normalizedPathname]
        const container = containerRef.current

        if (elem && container) {
        const elRect = elem.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        setHighlight({
            left: elRect.left - containerRect.left,
            width: elRect.width,
        })
        }
    }, [normalizedPathname])

    return (
        <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-fit">
        <nav className="px-6 sm:px-10 py-4 bg-stone-950 border border-neutral-700 rounded-full shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-x-12">
            <Link href={`/${lang}`}>
                <Image src="/logo.png" alt="logo" width={35} height={35} unoptimized />
            </Link>

            <ul
                ref={containerRef}
                className="relative flex items-center gap-x-8 text-md font-medium"
            >
                <div
                className="absolute h-8 bg-neutral-800 rounded-md z-[-1] transition-all duration-300 ease-in-out"
                style={{ width: highlight.width, left: highlight.left }}
                />

                {links.map(({ label, path }) => {
                const href = path === "" ? `/${lang}` : `/${lang}/${path}`
                return (
                    <li key={href}>
                    <Link href={href}>
                        <span
                        ref={(el) => {
                            linkRefs.current[href] = el
                        }}
                        className={`px-3 py-1 rounded-md transition-all ${
                            normalizedPathname === href
                            ? "text-white"
                            : "hover:text-white"
                        }`}
                        >
                        {label}
                        </span>
                    </Link>
                    </li>
                )
                })}
            </ul>

            <div
                onClick={toggleLanguage}
                className="text-sm px-3 py-1 rounded-2xl hover:bg-neutral-800 hover:text-white transition-all cursor-pointer select-none"
            >
                {lang === "en" ? "EN" : "ES"}
            </div>
            </div>
        </nav>
        </header>
    )
}

export default Navbar
