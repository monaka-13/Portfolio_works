import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/portfolio-data"

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="scroll-mt-24 border-t border-border/60 bg-gradient-to-b from-secondary/70 via-background to-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-4 inline-flex rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium tracking-[0.2em] text-primary uppercase shadow-sm">
          {site.role}
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        <span className="text-primary">{site.name}</span><br />
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {site.bio}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-sm shadow-primary/15">
            <Link href="#links">
              Links
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
