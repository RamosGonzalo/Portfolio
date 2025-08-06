"use client"
import { useLang } from "@/context/langContext";
import { projectsPage } from "@/i18n/projects";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

const completed = projects.filter(p => p.status == 'done')
const inProgress = projects.filter(p => p.status == 'in-progress')

export default function ProjectsPage() {
    const lang = useLang()
    const t = projectsPage[lang]

    return (
        <section className="min-h-screen pt-40 px-6 sm:px-10 lg:px-24 xl:px-32">
            <div className="animate-fadeIn w-full max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-2 text-neutral-100 text-center">{t.title}</h2>
                <div className="h-1 w-24 bg-neutral-600 rounded mx-auto mb-12" />

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-center max-w-[980px] mx-auto mb-20">
                    {completed.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>

                <h2 className="text-4xl font-bold mb-2 text-neutral-100 text-center">{t.inProgressTitle}</h2>
                <div className="h-1 w-24 bg-neutral-600 rounded mx-auto mb-12" />
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-center max-w-[980px] mx-auto mb-20">
                    {inProgress.map((p) => (
                        <ProjectCard key={p.title} project={p} inProgress />
                    ))}
                </div>
            </div>
        </section>
    );
}
