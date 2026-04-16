"use client"

import { ExternalLink, GitBranch } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { type PersonalProjectItem, personalProjects } from "@/lib/portfolio-data"

function PersonalProjectCard({ project }: { project: PersonalProjectItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Card className="transition-shadow group-hover:shadow-lg group-hover:ring-foreground/10">
            <CardHeader className="space-y-3">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-primary underline-offset-4 hover:underline"
                onClick={(event) => event.stopPropagation()}
              >
                <GitBranch className="size-3.5" aria-hidden />
                GitHub
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.techniques.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <p className="text-xs font-medium text-primary">
                View details →
              </p>
            </CardContent>
          </Card>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[calc(100%-2rem)] sm:w-[75vw] sm:max-w-[75vw]">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg">{project.title}</DialogTitle>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-primary underline-offset-4 hover:underline"
          >
            <GitBranch className="size-3.5" aria-hidden />
            {project.githubUrl}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </DialogHeader>
        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-1 text-sm sm:pr-2">
          <div>
            <p className="mb-2 font-medium text-foreground">Techniques</p>
            <div className="flex flex-wrap gap-2">
              {project.techniques.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-medium text-foreground">Details</p>
            <ul className="list-inside list-disc space-y-1.5 text-muted-foreground">
              {project.details.map((line) => (
                <li key={line} className="pl-0.5 marker:text-foreground/40">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <DialogClose asChild>
          <Button variant="outline" className="w-full sm:w-auto">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export function PersonalProjectsSection() {
  return (
    <section
      id="personal-projects"
      className="scroll-mt-24 border-t border-border/60 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Personal Projects
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Click a project to view implementation details and GitHub repository.
        </p>
        <div className="mt-10 grid gap-6">
          {personalProjects.map((project) => (
            <PersonalProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
