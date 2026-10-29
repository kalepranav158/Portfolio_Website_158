import React from "react";
import { ProjectArchitecture } from "@/types/project";
import { HudPanel } from "@/components/ui/HudPanel";
import { ArrowRight } from "lucide-react";

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
  accent: "emerald" | "amber" | "cyan" | "lime";
}

export function ArchitectureDiagram({ architecture, accent }: ArchitectureDiagramProps) {
  const accentBorder = {
    emerald: "border-[#34D399]/40",
    amber: "border-[#F5B83D]/40",
    cyan: "border-[#38BDF8]/40",
    lime: "border-[#A3E635]/40",
  }[accent];

  const accentTag = {
    emerald: "text-[#34D399] bg-[#34D399]/10",
    amber: "text-[#F5B83D] bg-[#F5B83D]/10",
    cyan: "text-[#38BDF8] bg-[#38BDF8]/10",
    lime: "text-[#A3E635] bg-[#A3E635]/10",
  }[accent];

  return (
    <div className="w-full space-y-4">
      {/* Visual Flow Container */}
      <HudPanel
        variant="charcoal"
        accent={accent}
        cornerCutSize="sm"
        className={`p-6 bg-[#080B09] border ${accentBorder}`}
      >
        <div className="flex items-center justify-between border-b border-[#3A4650]/50 pb-3 mb-6 font-mono text-xs">
          <span className="text-[#9AA89F] uppercase tracking-wider">
            // ARCHITECTURE SCHEMATIC & DATA FLOW
          </span>
          <span className={`px-2 py-0.5 clip-corner-cut-sm font-semibold uppercase text-[10px] ${accentTag}`}>
            DATA PIPELINE
          </span>
        </div>

        {/* Node Flow Representation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {architecture.nodes.map((node, i) => (
            <div
              key={node.id}
              className="relative p-3.5 bg-[#141D16] border border-[#3A4650]/80 clip-corner-cut-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                <span className="text-[#F5B83D]">NODE 0{i + 1}</span>
                <span className="text-[#566B3F]">{node.id.toUpperCase()}</span>
              </div>
              <div className="font-display font-bold text-sm text-[#E6ECE8] uppercase">
                {node.label}
              </div>
              <div className="font-mono text-[11px] text-[#9AA89F] mt-1">
                {node.role}
              </div>
            </div>
          ))}
        </div>

        {/* Edge / Transition Connections */}
        <div className="p-4 bg-[#0C1014] border border-[#3A4650]/40 rounded-none">
          <div className="font-mono text-[10px] text-[#9AA89F] uppercase tracking-widest mb-3">
            // DATA TRANSITIONS & ROUTING RULES
          </div>
          <div className="space-y-2">
            {architecture.edges.map((edge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 font-mono text-xs text-[#E6ECE8]"
              >
                <span className="px-1.5 py-0.5 bg-[#161C22] text-[#34D399] border border-[#3A4650] text-[10px]">
                  {edge.from.toUpperCase()}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5B83D] shrink-0" />
                <span className="px-1.5 py-0.5 bg-[#161C22] text-[#38BDF8] border border-[#3A4650] text-[10px]">
                  {edge.to.toUpperCase()}
                </span>
                {edge.label && (
                  <span className="text-[#9AA89F] text-[11px] ml-1">
                    ({edge.label})
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </HudPanel>

      {/* Caption */}
      <p className="font-mono text-xs text-[#9AA89F] italic px-1">
        Figure: {architecture.caption}
      </p>
    </div>
  );
}
