import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudPanel } from "@/components/ui/HudPanel";
import { SKILL_SUBSYSTEMS, SkillLevel } from "@/data/profile";
import { Cpu, Terminal, Database, Sparkles } from "lucide-react";

export function SkillsSection() {
  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case "working":
        return (
          <span className="px-2 py-0.5 bg-[#34D399]/10 border border-[#34D399]/40 text-[#34D399] font-mono text-[9px] uppercase tracking-wider clip-corner-cut-sm">
            WORKING
          </span>
        );
      case "familiar":
        return (
          <span className="px-2 py-0.5 bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-[9px] uppercase tracking-wider clip-corner-cut-sm">
            FAMILIAR
          </span>
        );
      case "exploring":
        return (
          <span className="px-2 py-0.5 bg-[#F5B83D]/10 border border-[#F5B83D]/40 text-[#F5B83D] font-mono text-[9px] uppercase tracking-wider clip-corner-cut-sm">
            EXPLORING
          </span>
        );
    }
  };

  const getSubsystemIcon = (id: string) => {
    switch (id) {
      case "ai-eng":
        return <Sparkles className="w-4 h-4 text-[#34D399]" />;
      case "ml-cv":
        return <Cpu className="w-4 h-4 text-[#38BDF8]" />;
      case "backend":
        return <Terminal className="w-4 h-4 text-[#F5B83D]" />;
      case "infra":
        return <Database className="w-4 h-4 text-[#A3E635]" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10" aria-label="Technical Skills">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="// SECTION 03"
          title="ENGINEERING SUBSYSTEM MATRIX"
          description="Technical capabilities structured into verified engineering domains. Proficiency is categorized by practical experience rather than arbitrary percentages."
        />

        {/* Level Legend Strip */}
        <div className="flex flex-wrap items-center gap-6 p-4 mb-8 bg-[#0C1014] border border-[#3A4650]/60 clip-corner-cut-sm font-mono text-xs">
          <span className="text-[#9AA89F] uppercase text-[10px] tracking-wider">
            // PROFICIENCY CRITERIA:
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34D399]" />
            <span className="text-[#34D399]">WORKING:</span>
            <span className="text-[#9AA89F] text-[11px]">Direct project implementation & evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-[#38BDF8]">FAMILIAR:</span>
            <span className="text-[#9AA89F] text-[11px]">Academic coursework & guided prototypes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5B83D]" />
            <span className="text-[#F5B83D]">EXPLORING:</span>
            <span className="text-[#9AA89F] text-[11px]">Active technical research & experimentation</span>
          </div>
        </div>

        {/* 4 Subsystem Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_SUBSYSTEMS.map((subsystem) => (
            <HudPanel
              key={subsystem.id}
              variant="charcoal"
              accent={subsystem.accent}
              cornerCutSize="md"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#3A4650]/50 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    {getSubsystemIcon(subsystem.id)}
                    <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-[#E6ECE8]">
                      {subsystem.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#F5B83D] font-semibold">
                    {subsystem.subsystemCode}
                  </span>
                </div>

                <p className="font-mono text-xs text-[#9AA89F] mb-6">
                  {subsystem.description}
                </p>

                {/* Skills Item Matrix */}
                <div className="space-y-2.5">
                  {subsystem.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 bg-[#141D16]/80 border border-[#3A4650]/50 clip-corner-cut-sm hover:border-[#566B3F] transition-colors"
                    >
                      <span className="font-mono text-xs text-[#E6ECE8]">
                        {skill.name}
                      </span>
                      {getLevelBadge(skill.level)}
                    </div>
                  ))}
                </div>
              </div>
            </HudPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
