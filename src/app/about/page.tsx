import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-20">
        <div className="w-full mx-[500px] grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1100px]">
            <div>
            <h2 className="text-4xl font-bold mb-2">About me</h2>
            <div className="h-1 w-24 bg-violet-700 rounded mb-6" />

            <p className="opacity-80 text-lg mb-4 leading-relaxed">
                I'm currently in the final stretch of my <span className="text-violet-300">programming degree</span> at the{" "}
                <a
                className="font-semibold text-violet-500 hover:underline"
                href="https://www.frgp.utn.edu.ar/"
                target="_blank"
                rel="noopener noreferrer"
                >
                UTN
                </a>
                , and preparing to begin <span className="text-violet-300">Computer Engineering</span> at the{" "}
                <a
                className="font-semibold text-violet-500 hover:underline"
                href="https://www.uba.ar/"
                target="_blank"
                rel="noopener noreferrer"
                >
                University of Buenos Aires
                </a>
                . In parallel, I'm building full-stack projects and continuously improving my skills.
            </p>

            <p className="opacity-50 italic mb-4">
                I'm passionate about technology, personal growth, and solving real-world problems. I aim to work abroad in the future, preferably at companies like Google, Amazon, or forward-thinking startups.
            </p>

            <h3 className="text-md font-semibold opacity-80 mt-6 mb-2">
                Technologies I've been working with:
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 opacity-80 text-sm gap-y-1 list-disc list-inside">
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

            <div className="flex justify-center md:justify-end items-center">
            <Image
                src="/perfil.webp"
                alt="Gonzalo Ramos"
                width={340}
                height={340}
                unoptimized
                className="hover:scale-102 rounded-2xl shadow-2xl shadow-gray-900 border border-neutral-700 object-cover"
            />
            </div>
        </div>
        </section>
    );
}
