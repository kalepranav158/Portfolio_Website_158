import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudPanel } from "@/components/ui/HudPanel";
import { TIMELINE_ENTRIES } from "@/data/profile";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

export function TimelineSection() {
  const publishedEntries = TIMELINE_ENTRIES.filter((entry) => entry.published);

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10" aria-label="Experience and Education Timeline">
      <Container size="narrow">
        <SectionHeading
          index="04"
          eyebrow="// SECTION 04"
          title="CHRONOLOGICAL MISSION LOG"
          description="Verified academic records, research milestones, and technical accomplishments. Unverified entries remain strictly unpublished."
        />

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#3A4650]/80 space-y-12">
          {publishedEntries.map((entry, idx) => {
            const icon =
              entry.kind === "education" ? (
                <GraduationCap className="w-4 h-4 text-[#34D399]" />
              ) : (
                <Award className="w-4 h-4 text-[#F5B83D]" />
              );

            const badgeColor =
              entry.accent === "emerald"
                ? "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/40"
                : "bg-[#F5B83D]/10 text-[#F5B83D] border-[#F5B83D]/40";

            return (
              <div key={entry.id} className="relative group">
                {/* Tactical Node Circle on the Timeline */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#0C1014] border-2 border-[#34D399] flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                </div>

                {/* Entry Card */}
                <HudPanel
                  variant="charcoal"
                  accent={entry.accent}
                  cornerCutSize="sm"
                  className="p-6 transition-all duration-200 group-hover:border-[#566B3F]"
                >
                  {/* Top Bar: Kind Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 border clip-corner-cut-sm font-mono text-[10px] uppercase tracking-wider font-semibold ${badgeColor}`}
                    >
                      {entry.kind}
                    </span>

                    <div className="flex items-center gap-4 font-mono text-xs text-[#9AA89F]">
                      <span className="flex items-center gap-1.5 text-[#E6ECE8]">
                        <Calendar className="w-3.5 h-3.5 text-[#F5B83D]" />
                        {entry.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
                        {entry.location}
                      </span>
                    </div>
                  </div>

                  {/* Title and Organization */}
                  <div className="flex items-center gap-2 mb-1">
                    {icon}
                    <h3 className="text-lg sm:text-xl font-display font-bold uppercase text-[#E6ECE8]">
                      {entry.title}
                    </h3>
                  </div>

                  <div className="font-mono text-xs text-[#38BDF8] mb-4">
                    {entry.organization}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 font-body text-sm text-[#9AA89F]">
                    {entry.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#34D399] font-mono text-xs mt-1">▸</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </HudPanel>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
