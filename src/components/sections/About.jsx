import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "HTML5", 
        "CSS3", 
        "JavaScript",
        "React.js", 
        "TailwindCSS", 
        "Bootstrap"
    ]
    const backendSkills = [
        "Node.js", 
        "APIs REST", 
        "C#"
    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                to-purple-600 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border border-white/10 bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg transition-all">
                    <p className="text-gray-300 mb-6 text-center">
                        My goal is to become a great software developer, delivering 
                        innovative solutions that solve real problems, collaborating 
                        on multidisciplinary teams, and maintaining a commitment to clean 
                        code and industry best practices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                key={key}
                                className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                "
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-8 border border-white/10 bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-4">Education #1</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Computer Engineering </strong> - UBA 
                                (2025 - Current)
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-8 border border-white/10 bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-4">Education #2</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> University Bachelor's Degree in Programming </strong> - UTN 
                                (2024 - Current) 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}