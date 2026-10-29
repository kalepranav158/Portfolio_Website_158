import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HudPanel } from "@/components/ui/HudPanel";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { SiteNav } from "@/components/layout/SiteNav";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/SocialIcons";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Code2,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Mission Not Found // UNSC Archive" };
  }

  return {
    title: `${project.title} // Engineering Dossier`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  return (
    <>
      <SiteNav />

      <main className="flex-1 py-12 md:py-20 relative z-10">
        <Container size="narrow">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-[#9AA89F]">
            <Link
              href="/#projects"
              className="flex items-center gap-1.5 hover:text-[#34D399] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>// MISSIONS ARCHIVE</span>
            </Link>
            <span className="text-[#3A4650]">/</span>
            <span className="text-[#F5B83D]">DOSSIER: {project.slug.toUpperCase()}</span>
          </div>

          {/* Dossier Header Header */}
          <header className="mb-12 border-b border-[#3A4650]/60 pb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="font-mono text-xs text-[#34D399] tracking-widest uppercase">
                {project.category}
              </span>
              <Badge status={project.status} size="md" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-[#E6ECE8] mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#9AA89F] font-body leading-relaxed max-w-3xl mb-8">
              {project.summary}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4">
              {project.links.repo && (
                <Button
                  href={project.links.repo}
                  isExternal
                  variant="primary"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  VIEW SOURCE REPO
                </Button>
              )}

              {project.links.demo && (
                <Button
                  href={project.links.demo}
                  isExternal
                  variant="amber"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  LIVE SYSTEM DEMO
                </Button>
              )}
            </div>
          </header>

          <div className="space-y-12">
            {/* Problem & Objectives */}
            <section className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                <span>01 // PROBLEM STATEMENT & DIRECTIVES</span>
                <span className="h-px bg-[#3A4650] flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HudPanel variant="charcoal" accent="amber" className="p-6">
                  <h2 className="text-base font-display font-bold uppercase text-[#F5B83D] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    THE PROBLEM
                  </h2>
                  <p className="font-body text-sm text-[#9AA89F] leading-relaxed">
                    {project.problem}
                  </p>
                </HudPanel>

                <HudPanel variant="charcoal" accent="emerald" className="p-6">
                  <h2 className="text-base font-display font-bold uppercase text-[#34D399] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    CORE OBJECTIVES
                  </h2>
                  <ul className="space-y-2 font-body text-sm text-[#9AA89F]">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#34D399] font-mono text-xs mt-1">▸</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </HudPanel>
              </div>
            </section>

            {/* Architecture Section */}
            <section className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                <span>02 // SYSTEM ARCHITECTURE & DATA FLOW</span>
                <span className="h-px bg-[#3A4650] flex-1" />
              </div>

              <ArchitectureDiagram
                architecture={project.architecture}
                accent={project.accent}
              />
            </section>

            {/* Tech Stack Matrix */}
            <section className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                <span>03 // APPLIED TECHNOLOGIES & TOOLS</span>
                <span className="h-px bg-[#3A4650] flex-1" />
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#141D16] border border-[#566B3F] text-[#E6ECE8] font-mono text-xs uppercase tracking-wider clip-corner-cut-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Engineering Decisions & Trade-offs */}
            <section className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                <span>04 // ARCHITECTURAL DECISIONS & TRADE-OFFS</span>
                <span className="h-px bg-[#3A4650] flex-1" />
              </div>

              <div className="space-y-4">
                {project.decisions.map((dec, i) => (
                  <HudPanel key={i} variant="charcoal" accent="cyan" className="p-5">
                    <h3 className="font-display font-bold text-sm uppercase text-[#38BDF8] mb-2 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      {dec.title}
                    </h3>
                    <p className="font-body text-sm text-[#9AA89F] leading-relaxed">
                      {dec.detail}
                    </p>
                  </HudPanel>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                <span>05 // ENGINEERING CHALLENGES & RESOLUTIONS</span>
                <span className="h-px bg-[#3A4650] flex-1" />
              </div>

              <div className="space-y-4">
                {project.challenges.map((chal, i) => (
                  <HudPanel key={i} variant="charcoal" accent="amber" className="p-5">
                    <h3 className="font-display font-bold text-sm uppercase text-[#F5B83D] mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      CHALLENGE: {chal.challenge}
                    </h3>
                    <p className="font-body text-sm text-[#E6ECE8] leading-relaxed pl-6 border-l-2 border-[#34D399]">
                      <span className="text-[#34D399] font-semibold">RESOLUTION:</span> {chal.solution}
                    </p>
                  </HudPanel>
                ))}
              </div>
            </section>

            {/* Empirical Evaluation (if available) */}
            {project.evaluation && (
              <section className="space-y-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                  <span>06 // EMPIRICAL BENCHMARKS & EVALUATION</span>
                  <span className="h-px bg-[#3A4650] flex-1" />
                </div>

                <HudPanel variant="charcoal" accent="emerald" className="p-6">
                  {/* Context Note */}
                  <div className="p-3.5 bg-[#1B2216] border border-[#566B3F] text-xs font-mono text-[#F5B83D] mb-6">
                    NOTE: {project.evaluation.context}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.evaluation.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-4 bg-[#0C1014] border border-[#3A4650]/60 clip-corner-cut-sm"
                      >
                        <div className="font-mono text-[10px] text-[#9AA89F] uppercase mb-1">
                          {metric.label}
                        </div>
                        <div className="text-2xl font-display font-bold text-[#34D399]">
                          {metric.value}
                        </div>
                        {metric.note && (
                          <div className="font-mono text-[10px] text-[#9AA89F] mt-1">
                            {metric.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </HudPanel>
              </section>
            )}

            {/* Future Trajectory */}
            <section className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2">
                <span>07 // FUTURE IMPROVEMENTS & ROADMAP</span>
                <span className="h-px bg-[#3A4650] flex-1" />
              </div>

              <ul className="space-y-2 font-mono text-xs text-[#9AA89F]">
                {project.futureWork.map((fw, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#38BDF8]">✦</span>
                    <span>{fw}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Previous / Next Mission Navigation */}
            <nav
              className="flex items-center justify-between pt-8 border-t border-[#3A4650]/60 font-mono text-xs"
              aria-label="Mission Pagination"
            >
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="flex items-center gap-2 text-[#9AA89F] hover:text-[#34D399] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>PREV: {prevProject.title}</span>
                </Link>
              ) : (
                <span />
              )}

              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="flex items-center gap-2 text-[#9AA89F] hover:text-[#34D399] transition-colors ml-auto"
                >
                  <span>NEXT: {nextProject.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </nav>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
