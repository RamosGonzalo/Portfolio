export type Project = {
    title: string
    description: string
    image: string
    stack: string[]
    github?: string
    status: "done" | "in-progress"
}