import React from "react";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 relative z-10" aria-label="Featured Projects">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="// SECTION 02"
          title="FEATURED ENGINEERING MISSIONS"
          description="Detailed technical case studies showcasing autonomous agentic pipelines, hybrid retrieval RAG, acoustic signal processing, and production document parsing."
        />

        {/* 2x2 Tactical Mission Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
