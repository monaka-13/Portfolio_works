import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillGroups } from "@/lib/portfolio-data"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border/60 bg-muted/20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Grouped by area—edit lists in{" "}
          <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs">
            lib/portfolio-data.ts
          </code>
          .
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} size="sm">
              <CardHeader>
                <CardTitle className="text-base">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
