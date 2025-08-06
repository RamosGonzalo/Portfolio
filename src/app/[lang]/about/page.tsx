import Image from "next/image";

export default function AboutPage() {
    return (
        <>
        <section className="pt-40 pb-16 px-6 sm:px-10 lg:px-24 xl:px-32">
            <div className="animate-fadeIn w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl font-bold mb-2 text-neutral-100">About me</h2>
                    <div className="h-1 w-24 bg-neutral-600 rounded mb-6" />

                    <p className="opacity-80 text-lg mb-4 leading-relaxed text-neutral-300">
                    I'm currently completing my{" "}
                    <span className="text-white">Programming degree</span> at{" "}
                    <a className="font-semibold text-neutral-400 hover:text-white hover:underline transition-colors" href="https://www.frgp.utn.edu.ar/" target="_blank" rel="noopener noreferrer">
                        UTN
                    </a>
                    , and preparing to start{" "}
                    <span className="text-white">Computer Engineering</span> at{" "}
                    <a className="font-semibold text-neutral-400 hover:text-white hover:underline transition-colors" href="https://www.uba.ar/" target="_blank" rel="noopener noreferrer">
                        University of Buenos Aires
                    </a>
                    . I co-founded{" "}
                    <a href="https://www.kiad.dev/" target="_blank" className="text-white font-semibold">KIAD</a>, a software startup focused on modern web development and creative digital solutions.
                    </p>

                    <p className="opacity-50 italic mb-4">
                        I believe in building things that matter, growing a little every day, and never settling. My goal is to join companies that push boundaries — whether that's Google, Amazon, or startups with vision.
                    </p>

                    <h3 className="text-md font-semibold opacity-80 mt-6 mb-2">Technologies I've been working with:</h3>
                    <ul className="grid grid-cols-2 opacity-80 text-sm gap-y-1 list-disc list-inside">
                        <li>TypeScript</li>
                        <li>React.js</li>
                        <li>TailwindCSS</li>
                        <li>Node.js</li>
                        <li>Java</li>
                        <li>JavaScript ES6+</li>
                        <li>Python</li>
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

        <section className="px-6 sm:px-10 lg:px-24 xl:px-32 my-10">
            <div className="animate-fadeIn w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-md text-white font-semibold mb-4">My daily routine:</h3>
                    <ul className="text-sm opacity-80 leading-relaxed list-disc list-inside space-y-1">
                        <li>🥊 Kickboxing training</li>
                        <li>🧠 Studying programming and sharpening my skills daily</li>
                        <li>📚 Reading books on personal growth, psychology, and technology</li>
                        <li>📓 Writing future goals and journaling every morning</li>
                        <li>💻 Working on side projects and building ideas that excite me</li>
                        <li>☕ Starting each day with strong coffee and stronger intention</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-start">
                    <h3 className="text-md font-semibold text-white mb-4">🎧 My playlist while I'm coding</h3>
                    <div className="rounded-xl overflow-hidden w-full max-w-md mx-auto">
                        <iframe
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/playlist/7zQib0qiaLvQaT2Oj0YJvM?utm_source=generator&theme=0"
                        width="100%"
                        height="160"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
