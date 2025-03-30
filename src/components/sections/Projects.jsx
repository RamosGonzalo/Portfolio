import Swal from 'sweetalert2'
import coding from '../../image/coding1.gif'
import portfolioImage from '../../image/portfolio.png'
import weatherImage from '../../image/weather-app1.png'
import menuShadows from '../../image/menu-screenshot.jpg'
import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    

                    {/* Portfolio */}
                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                    bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg
                    transition">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                Portfolio
                            </h3>
                            <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full flex items-center border border-green-400/20 ml-2">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Completed on Mar 30th
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                        This portfolio is a reflection of my growth as a developer. Here I showcase my projects, 
                        skills, and experience in the world of web and software development. 
                        I'm always striving to constantly improve my programming skills.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["React", "HTML5", "CSS3", "JavaScript", "SweetAlert2", "React Tsparticles", "tsparticles-slim"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 
                                text-blue-400 hover:text-blue-300 py-1 px-3 rounded-full text-sm font-mono
                                border border-white/10 hover:border-blue-400/30
                                transition-all hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
                                {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a className="text-blue-400 hover:text-blue-300 
                            transition-colors my-4 cursor-pointer" 
                            target="_blank"
                            onClick={() => Swal.fire({
                                title: "Portfolio",
                                html: `Repositorio: <a href="https://github.com/RamosGonzalo/Portfolio" 
                                target="_blank" class="text-blue-400 hover:text-blue-300">GitHub</a>`,
                                color: "#7F8487",
                                background: "#0F0F0F",
                                imageUrl: portfolioImage,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: "Portfolio"
                            })}>
                                View Project ⮕
                            </a>
                        </div>
                    </div>
                    
                    {/* Weather App */}
                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                    bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg
                    transition">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                Weather App
                            </h3>
                            <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full flex items-center border border-green-400/20 ml-2">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Completed on Mar 27th
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Weather App that displays the weather based on the city you 
                            enter in the search engine in real time using the 
                            OpenWeather API.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "HTML5", "CSS3", "JavaScript", "SweetAlert2"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 
                            text-blue-400 hover:text-blue-300 py-1 px-3 rounded-full text-sm font-mono
                            border border-white/10 hover:border-blue-400/30
                            transition-all hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
                            {tech}
                            </span>
                            ))}
                        </div>
            
                        <div className="flex justify-between items-center">
                        <a className="text-blue-400 hover:text-blue-300 
                            transition-colors my-4 cursor-pointer" 
                            target="_blank"
                            onClick={() => Swal.fire({
                                title: "Weather App",
                                html: `Repositorio: <a href="https://github.com/RamosGonzalo/Weather-App" 
                                target="_blank" class="text-blue-400 hover:text-blue-300">GitHub</a>`,
                                color: "#7F8487",
                                background: "#0F0F0F",
                                imageUrl: weatherImage,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: "Weather App"
                            })}>
                                View Project ⮕
                            </a>
                        </div>
                    </div>

                    {/* King Training */}
                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                    bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg
                    transition">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                King Training
                            </h3>
                            <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center border border-blue-400/20 ml-2">
                                <svg className="w-3 h-3 mr-1 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-blue-400" d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"/>
                                </svg>
                                In Development
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                        I decided to develop a landing page for the gym I attend on my own initiative to improve its online 
                        presence and make key information easier to access. 
                        Regardless of whether the gym adopts the website, this project allows me to apply and strengthen my 
                        web development skills.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 
                                text-blue-400 hover:text-blue-300 py-1 px-3 rounded-full text-sm font-mono
                                border border-white/10 hover:border-blue-400/30
                                transition-all hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a onClick={() => Swal.fire({
                                title: "Coming Soon!",
                                text: "We're working on that :D",
                                color: "#7F8487",
                                background: "#0F0F0F",
                                imageUrl: coding,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: "Capybara Working"
                            })} 
                            className="text-blue-400 hover:text-blue-300 
                            transition-colors my-4 cursor-pointer">
                                View Project ⮕
                            </a>
                        </div>
                    </div>
                    
                    {/* Shadows of Laenor 1.0 */}
                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                    bg-[rgba(20,20,30,0.6)] backdrop-blur-sm hover:shadow-lg
                    transition">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                Shadows of Laenor 1.0
                            </h3>
                            <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full flex items-center border border-green-400/20 ml-2">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Completed on Dec 25th
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                        Shadows of Laenor is a role-playing game (RPG) inspired by the dark and challenging 
                        atmosphere of Dark Souls and Bloodborne. This project was developed as a final 
                        integrative project for the Programming II course, with the goal of implementing 
                        advanced programming and design concepts.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {["C++", "SFML", "Box2D", "PiskelApp"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 
                                text-blue-400 hover:text-blue-300 py-1 px-3 rounded-full text-sm font-mono
                                border border-white/10 hover:border-blue-400/30
                                transition-all hover:scale-105 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                        <a className="text-blue-400 hover:text-blue-300 
                            transition-colors my-4 cursor-pointer" 
                            target="_blank"
                            onClick={() => Swal.fire({
                                title: "Shadows of Laenor 1.0",
                                html: `Repositorio: <a href="https://github.com/RamosGonzalo/Shadows-of-Laenor-1.0" 
                                target="_blank" class="text-blue-400 hover:text-blue-300">GitHub</a>`,
                                color: "#7F8487",
                                background: "#0F0F0F",
                                imageUrl: menuShadows,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: "Shadows of Laenor"
                            })}>
                                View Project ⮕
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}