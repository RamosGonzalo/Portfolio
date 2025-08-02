export default function ProjectsPage() {
    return (
        <section className="min-h-screen pt-40 px-6 sm:px-10 lg:px-24 xl:px-32">
            <div className="animate-fadeIn w-full max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-2 text-neutral-100 text-center">Recent Projects</h2>
                <div className="h-1 w-24 bg-neutral-600 rounded mx-auto mb-12" />

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-center max-w-[980px] mx-auto mb-20">
                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <img src="/projects/nothing" alt="Habit Tracker" className="w-full h-48 object-cover" />
                        <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">Habit Tracker</h3>
                        <p className="text-sm text-neutral-400 mb-2">Track your habits and build consistency through a clean, minimal UI.</p>
                        <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                            <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                            <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/ramosgonzalo/finance-dashboard" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">GitHub</a>
                        </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <img src="/projects/nothing" alt="Finance Dashboard" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white mb-1">Finance Dashboard</h3>
                            <p className="text-sm text-neutral-400 mb-2">Track your expenses, visualize income and manage goals in one sleek dashboard.</p>
                            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                                <span className="bg-neutral-800 px-2 py-1 rounded">React</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded">TailwindCSS</span>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <a href="https://github.com/RamosGonzalo/Finance-Dashboard" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden hover:scale-[1.02] transition-transform mx-auto">
                        <img src="/projects/crm.webp" alt="CRM Freelancer" className="w-full h-48 object-cover" />
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
                        <img src="/projects/medicalclinicsystem.webp" alt="Medical Clinic System" className="w-full h-48 object-cover" />
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

                </div>
            </div>
        </section>
    );
}
