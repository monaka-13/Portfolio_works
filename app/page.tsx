import { SiteHeader } from "@/components/site-header"
import { ExperienceSection } from "@/components/sections/experience-section"
import { LinksSection } from "@/components/sections/links-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { PersonalProjectsSection } from "@/components/sections/personal-projects-section"
import { SkillsSection } from "@/components/sections/skills-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <OverviewSection />
        <ExperienceSection />
        <PersonalProjectsSection />
        <SkillsSection />
        <LinksSection />
      </main>
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Portfolio — built with Next.js &amp; Tailwind
      </footer>
    </div>
  )
}
