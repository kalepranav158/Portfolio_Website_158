import { SkipLink } from "@/components/ui/SkipLink";
import { SiteNav } from "@/components/layout/SiteNav";
import { Hero } from "@/components/hero/Hero";
import { TelemetryStrip } from "@/components/telemetry/TelemetryStrip";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { TimelineSection } from "@/components/timeline/TimelineSection";
import { JournalSection } from "@/components/journal/JournalSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col focus:outline-none">
        <Hero />

        <Reveal delay={0.1}>
          <TelemetryStrip />
        </Reveal>

        <Reveal delay={0.15}>
          <AboutSection />
        </Reveal>

        <Reveal delay={0.15}>
          <ProjectsSection />
        </Reveal>

        <Reveal delay={0.15}>
          <SkillsSection />
        </Reveal>

        <Reveal delay={0.15}>
          <TimelineSection />
        </Reveal>

        <Reveal delay={0.15}>
          <JournalSection />
        </Reveal>

        <Reveal delay={0.15}>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
