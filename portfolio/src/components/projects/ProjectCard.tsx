import React from "react";
import Link from "next/link";
import { Project } from "@/types/project";
import { HudPanel } from "@/components/ui/HudPanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectIllustration } from "./ProjectIllustration";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const missionId = `MSN-0${index + 1}`;

  return (
    <HudPanel
      variant="charcoal"
      accent={project.accent}
      cornerCutSize="md"
      glowOnHover
      className="flex flex-col h-full overflow-hidden group border-[#3A4650]/70"
    >
      {/* Card Header Telemetry */}
      <div className="flex items-center justify-between p-4 border-b border-[#3A4650]/50 bg-[#0C1014]/90 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#F5B83D] font-semibold">{missionId}</span>
          <span className="text-[#3A4650]">|</span>
          <span className="text-[#9AA89F] text-[11px] truncate max-w-[180px]">
            {project.category}
          </span>
        </div>
        <Badge status={project.status} size="sm" />
      </div>

      {/* Visual Architectural Motif / Thumbnail */}
      <div className="relative w-full h-44 bg-[#080B09] border-b border-[#3A4650]/40 overflow-hidden">
        <ProjectIllustration slug={project.slug} accent={project.accent} />
        {/* Subtle grid corner mark */}
        <div className="absolute top-2 right-2 font-mono text-[9px] text-[#3A4650]">
          SCHEMATIC v1.0
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-display font-bold uppercase tracking-wide text-[#E6ECE8] group-hover:text-[#34D399] transition-colors mb-2.5">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-[#9AA89F] font-body text-sm leading-relaxed mb-6">
            {project.summary}
          </p>
        </div>

        <div>
          {/* Tech Stack Matrix */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-[#161C22] border border-[#3A4650]/60 text-[#9AA89F] font-mono text-[10px] uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center justify-between pt-4 border-t border-[#3A4650]/40">
            <Button
              href={`/projects/${project.slug}`}
              variant="secondary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              MISSION DOSSIER
            </Button>

            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#9AA89F] hover:text-[#34D399] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
                aria-label={`View ${project.title} source repository on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </HudPanel>
  );
}
