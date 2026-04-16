import Link from "next/link"

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#personal-projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#links", label: "Links" },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <Link
          href="#overview"
          className="font-heading text-sm font-semibold tracking-[0.18em] text-primary uppercase"
        >
          Keisuke Shigenaga
        </Link>
        <nav
          className="flex max-w-[min(100%,28rem)] flex-wrap items-center justify-end gap-1 sm:max-w-none"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-primary sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
