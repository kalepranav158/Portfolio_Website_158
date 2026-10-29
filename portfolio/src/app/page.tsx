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

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TelemetryStrip />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <JournalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
