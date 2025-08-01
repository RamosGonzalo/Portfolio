import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-24 xl:px-32">
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
            <h2 className="text-4xl font-bold mb-2 text-neutral-100">About me</h2>
            <div className="h-1 w-24 bg-neutral-600 rounded mb-6" />

            <p className="opacity-80 text-lg mb-4 leading-relaxed text-neutral-300">
            I'm currently finishing my{" "}
            <span className="text-white">Programming degree</span> at{" "}
            <a
                className="font-semibold text-neutral-400 hover:text-white hover:underline transition-colors"
                href="https://www.frgp.utn.edu.ar/"
                target="_blank"
                rel="noopener noreferrer"
            >
                UTN
            </a>, and preparing to start{" "}
            <span className="text-white">Computer Engineering</span> at{" "}
            <a
                className="font-semibold text-neutral-400 hover:text-white hover:underline transition-colors"
                href="https://www.uba.ar/"
                target="_blank"
                rel="noopener noreferrer"
            >
                University of Buenos Aires
            </a>
            <br />
            When I'm not coding, you'll probably find me training in kickboxing, learning something new, or writing future dreams in my notebook
            </p>

            <p className="opacity-50 italic mb-4">
                I'm passionate about technology, personal growth, and solving real-world problems. I aim to work abroad in the future, preferably at companies like Google, Amazon, or forward-thinking startups.
            </p>

            <h3 className="text-md font-semibold opacity-80 mt-6 mb-2">
                Technologies I've been working with:
            </h3>
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
    );
}
