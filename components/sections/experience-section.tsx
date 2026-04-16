"use client"

import { Building2, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { type ExperienceItem, experiences } from "@/lib/portfolio-data"

function ExperienceCard({ job }: { job: ExperienceItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Card className="transition-shadow group-hover:shadow-lg group-hover:ring-foreground/10">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{job.role}</CardTitle>
                  <CardDescription className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="size-3.5" aria-hidden />
                      {job.company}
                    </span>
                    {job.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" aria-hidden />
                        {job.location}
                      </span>
                    ) : null}
                  </CardDescription>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-3xl bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <Calendar className="size-3.5" aria-hidden />
                  {job.date}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {job.techniques.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {job.summary}
              </p>
              <p className="text-xs font-medium text-primary">
                View details →
              </p>
            </CardContent>
          </Card>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[calc(100%-2rem)] sm:w-[75vw] sm:max-w-[75vw]">
        <DialogHeader>
          <DialogTitle className="text-lg">
            {job.role} · {job.company}
          </DialogTitle>
          <DialogDescription className="flex flex-wrap gap-x-3 gap-y-1">
            <span>{job.date}</span>
            {job.location ? <span>{job.location}</span> : null}
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-1 text-sm sm:pr-2">
          <div>
            <p className="mb-2 font-medium text-foreground">Techniques</p>
            <div className="flex flex-wrap gap-2">
              {job.techniques.map((tech) => (
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
              {job.details.map((line) => (
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

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border/60 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Click a role to view full details and accomplishments.
        </p>
        <div className="mt-10 grid gap-6">
          {experiences.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
