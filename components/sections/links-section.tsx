import { Code2, GitBranch, Link2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/portfolio-data"

const items = [
  {
    label: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: site.social.github,
    icon: GitBranch,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    icon: Link2,
    external: true,
  },
  {
    label: "LeetCode",
    href: site.social.leetcode,
    icon: Code2,
    external: true,
  },
] as const

export function LinksSection() {
  return (
    <section
      id="links"
      className="scroll-mt-24 border-t border-border/60 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Links
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Profiles and resources—swap URLs in portfolio data.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {items.map(({ label, href, icon: Icon, external }) => (
            <Button key={label} asChild variant="outline" size="lg">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <Icon data-icon="inline-start" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
