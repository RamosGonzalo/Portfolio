import Image from "next/image"
import { Project } from "@/types/Project"

type Props = {
    project: Project
    inProgress?: boolean
}

export default function ProjectCard({ project, inProgress = false }: Props) {
    return (
        <div
        className={`w-[90%] md:w-[95%] bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden mx-auto 
            transition-all hover:scale-[1.02] 
            ${inProgress ? "opacity-60 hover:opacity-100" : ""}`}
        >
        {project.image && (
            <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={200}
            className="w-full h-48 object-cover"
            />
        )}

        <div className="p-4">
            {inProgress && (
            <span className="text-xs text-blue-400 font-semibold uppercase">In Progress</span>
            )}
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-neutral-400 mb-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
            {project.stack.map((tech) => (
                <span key={tech} className="bg-neutral-800 px-2 py-1 rounded">{tech}</span>
            ))}
            </div>

            {project.github && (
            <div className="mt-4 flex gap-4">
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
                >
                GitHub
                </a>
            </div>
            )}

            {inProgress && (
            <div className="mt-4 text-sm text-neutral-500">
                Coming soon...
            </div>
            )}
        </div>
        </div>
    )
}
