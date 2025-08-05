import Image from "next/image";

export default function ProjectsPage() {
    return (
        <section className="min-h-screen pt-40 px-6 sm:px-10 lg:px-24 xl:px-32">
            <div className="animate-fadeIn w-full max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-2 text-neutral-100 text-center">Recent Projects</h2>
                <div className="h-1 w-24 bg-neutral-600 rounded mx-auto mb-12" />

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-center max-w-[980px] mx-auto mb-20">

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <Image src="/projects/crm.webp" 
                        alt="CRM Freelancer"
                        width={600}
                        height={200} 
                        className="w-full h-48 object-cover" />
                        <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">CRM Freelancer</h3>
                        <p className="text-sm text-neutral-400 mb-2">CRM application specially designed for freelancers who want to efficiently manage their clients.</p>
                        <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                            <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">Express</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">MongoDB</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/RamosGonzalo/CRM-Freelancer" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">GitHub</a>
                        </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <Image 
                        src="/projects/medicalclinicsystem.webp" 
                        alt="Medical Clinic System" 
                        width={600}
                        height={200}
                        className="w-full h-48 object-cover" />
                        <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">Medical Clinic System</h3>
                        <p className="text-sm text-neutral-400 mb-2">This is a multi-layered web application developed in C# using ASP.NET Web Forms and SQL Server.</p>
                        <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                            <span className="bg-neutral-800 px-2 py-1 rounded">.NET</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">MySQL</span>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/RamosGonzalo/MedicalClinicSystem" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">GitHub</a>
                        </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <Image src="/projects/menu-shadows-of-laenor.webp" 
                        alt="Habit Tracker"
                        width={600}
                        height={200}
                        className="w-full h-48 object-cover" />
                        <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">Shadows of Laenor</h3>
                        <p className="text-sm text-neutral-400 mb-2">This is a role-playing game developed with C++ and the SFML library for my final integrative programming II exam.</p>
                        <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                            <span className="bg-neutral-800 px-2 py-1 rounded">C++</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">SFML</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">Box2D</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">Piskel</span>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/RamosGonzalo/Shadows-of-Laenor-1.0" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">GitHub</a>
                        </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <Image src="/projects/weather-app.webp" 
                        alt="Habit Tracker"
                        width={600}
                        height={200}
                        className="w-full h-48 object-cover" />
                        <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">Weather App</h3>
                        <p className="text-sm text-neutral-400 mb-2">Simple weather app that displays the weather based on the city you enter into a search engine using the OpenWeather API.</p>
                        <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                            <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">JavaScript</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">OpenWeather API</span>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/RamosGonzalo/Weather-App" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">GitHub</a>
                        </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl font-bold mb-2 text-neutral-100 text-center">Currently working on...</h2>
                <div className="h-1 w-24 bg-neutral-600 rounded mx-auto mb-12" />

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-center max-w-[980px] mx-auto mb-20">
                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden opacity-60 hover:opacity-100 hover:scale-[1.02] transition-all mx-auto">
                        <div className="p-4">
                            <span className="text-xs text-blue-400 font-semibold uppercase">In Progress</span>
                            <h3 className="text-lg font-semibold text-white mb-1">Habit Tracker</h3>
                            <p className="text-sm text-neutral-400 mb-2">Track your habits and build consistency through a clean, minimal UI.</p>
                            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                                <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">Node.js</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">MongoDB</span>
                            </div>
                            <div className="mt-4 text-sm text-neutral-500">
                                Coming soon...
                            </div>
                        </div>
                    </div>
                    

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden opacity-60 hover:opacity-100 hover:scale-[1.02] transition-all mx-auto">
                        <div className="p-4">
                            <span className="text-xs text-blue-400 font-semibold uppercase">In Progress</span>
                            <h3 className="text-lg font-semibold text-white mb-1">Finance Dashboard</h3>
                            <p className="text-sm text-neutral-400 mb-2">Track your income and expenses with charts and date filters.</p>
                            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                                <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">Node.js</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">MongoDB</span>
                            </div>
                            <div className="mt-4 text-sm text-neutral-500">
                                Coming soon...
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden opacity-60 hover:opacity-100 hover:scale-[1.02] transition-all mx-auto">
                        <div className="p-4">
                            <span className="text-xs text-blue-400 font-semibold uppercase">In Progress</span>
                            <h3 className="text-lg font-semibold text-white mb-1">E-commerce Store</h3>
                            <p className="text-sm text-neutral-400 mb-2">Track your income and expenses with charts and date filters.</p>
                            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                                <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">Node.js</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">MongoDB</span>
                            </div>
                            <div className="mt-4 text-sm text-neutral-500">
                                Coming soon...
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden opacity-60 hover:opacity-100 hover:scale-[1.02] transition-all mx-auto">
                        <div className="p-4">
                            <span className="text-xs text-blue-400 font-semibold uppercase">In Progress</span>
                            <h3 className="text-lg font-semibold text-white mb-1">AI Resume Scanner</h3>
                            <p className="text-sm text-neutral-400 mb-2">Upload your CV and get instant feedback and suggestions using AI.</p>
                            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                                <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">OpenAI API</span>
                            </div>
                            <div className="mt-4 text-sm text-neutral-500">
                                Coming soon...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
