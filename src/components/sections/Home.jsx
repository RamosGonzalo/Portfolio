import { RevealOnScroll } from "../RevealOnScroll"
import { ParticlesBackground } from "../ParticlesBackground"

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 z-0 opacity-20">
                <ParticlesBackground />
            </div>
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm Gonzalo Ramos
                </h1>

                <p className="text-gray-300/80 mb-8 max-w-lg mx-auto">
                Web & Software Developer | Computer Engineering Student. <br />
                Passionate about technology and learning. Focused on teamwork 
                and industry best practices to solve real-world problems.
                </p>
                <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all hover:bg-blue-600 hover:shadow-lg">
    View Projects
</a>

                    <a href="#contact" className="border border-blue-500/50 text-blue-500 
                    py-3 px-6 rounded font-medium transition-all duration-200 
                    hover:translate-y-0.5 hover:shadow-[0_0_1.5rem_rgba(59, 130, 246, 0.2)]
                    hover:bg-blue-500/10">
                        Contact Me
                    </a>

                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                    className="border border-blue-500/50 text-blue-500 
                    py-3 px-6 rounded font-medium transition-all duration-200 
                    hover:translate-y-0.5 hover:shadow-[0_0_1.5rem_rgba(59, 130, 246, 0.2)]
                    hover:bg-blue-500/10">
                    View my CV
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}