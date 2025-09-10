"use client"

import Image from "next/image"
import { about } from "@/i18n/about"
import { useLang } from "@/context/langContext"
import Timeline from "@/components/Timeline"

export default function AboutPage() {
    const lang = useLang()
    const t = about[lang]

    return (
        <>
            <section className="pt-40 pb-16 px-6 sm:px-10 lg:px-24 xl:px-32">
                <div className="animate-fadeIn w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl font-bold mb-2 text-neutral-100">{t.title}</h2>
                    <div className="h-1 w-24 bg-neutral-600 rounded mb-6" />

                    <p className="opacity-80 text-md mb-4 leading-relaxed text-neutral-300">
                    {t.description1.split("KIAD").map((part, index, arr) => (
                        <span key={index}>
                        {part}
                        {index < arr.length - 1 && (
                            <a
                            href="https://www.kiad.dev/"
                            target="_blank"
                            className="text-white font-semibold"
                            >
                            KIAD
                            </a>
                        )}
                        </span>
                    ))}
                    </p>

                    <p className="opacity-50 italic mb-4">{t.description2}</p>

                    <h3 className="text-md font-semibold opacity-80 mt-6 mb-2">
                    {t.technologiesTitle}
                    </h3>
                    <ul className="grid grid-cols-2 opacity-80 text-sm gap-y-1 list-disc list-inside">
                        <li>TypeScript</li>
                        <li>React.js</li>
                        <li>TailwindCSS</li>
                        <li>Node.js</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>C#</li>
                    </ul>
                </div>

                <div className="hidden md:flex justify-center md:justify-end items-center">
                    <Image
                    src="/perfil.webp"
                    alt="Gonzalo Ramos"
                    width={340}
                    height={340}
                    unoptimized
                    className="transition-transform duration-300 hover:scale-105 rounded-2xl shadow-2xl shadow-gray-900 border border-neutral-700 object-cover"
                    />
                </div>
                </div>
            </section>

            <Timeline />

            <section className="px-6 sm:px-10 lg:px-24 xl:px-32 my-10">
                <div className="animate-fadeIn w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-lg font-semibold pb-6">{t.routineTitle}</h3>
                        <ul className="text-sm opacity-80 leading-relaxed list-disc list-inside space-y-1">
                            <li>{t.routine1}</li>
                            <li>{t.routine2}</li>
                            <li>{t.routine3}</li>
                            <li>{t.routine4}</li>
                            <li>{t.routine5}</li>
                            <li>{t.routine6}</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-start space-y-6">
                    <h3 className="text-lg font-semibold">{t.playlist}</h3>
                        <div className="rounded-xl overflow-hidden w-full max-w-md mx-auto">
                            <iframe
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/playlist/7zQib0qiaLvQaT2Oj0YJvM?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            ></iframe>
                        </div>

                        <div className="rounded-xl overflow-hidden w-full max-w-md mx-auto">
                            <iframe
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/playlist/3zYeYx6g3ImzU1OLNPf1m5?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
