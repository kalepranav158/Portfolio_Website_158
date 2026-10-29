import React from "react";
import { HudPanel } from "@/components/ui/HudPanel";
import { Activity, ShieldCheck, Cpu, MapPin } from "lucide-react";

export function StatusPanel() {
  return (
    <HudPanel
      variant="charcoal"
      accent="emerald"
      cornerCutSize="sm"
      className="p-3.5 sm:p-4 max-w-sm w-full bg-[#0C1014]/90 border-[#3A4650]/80 shadow-xl"
    >
      <div className="flex items-center justify-between border-b border-[#3A4650]/50 pb-2 mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9AA89F]">
          // SYSTEM STATUS TELEMETRY
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#34D399]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
          ONLINE
        </span>
      </div>

      <div className="space-y-2.5 font-mono text-xs">
        <div className="flex items-center justify-between text-[#E6ECE8]">
          <span className="flex items-center gap-2 text-[#9AA89F]">
            <Cpu className="w-3.5 h-3.5 text-[#34D399]" />
            ROLE:
          </span>
          <span className="font-semibold text-[#E6ECE8]">AI ENGINEER</span>
        </div>

        <div className="flex items-center justify-between text-[#E6ECE8]">
          <span className="flex items-center gap-2 text-[#9AA89F]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            SPECIALIZATION:
          </span>
          <span className="text-[#38BDF8]">AGENTIC AI / RAG</span>
        </div>

        <div className="flex items-center justify-between text-[#E6ECE8]">
          <span className="flex items-center gap-2 text-[#9AA89F]">
            <Activity className="w-3.5 h-3.5 text-[#F5B83D]" />
            EDUCATION:
          </span>
          <span className="text-[#F5B83D] truncate max-w-[170px]" title="JSPM's RSCOE, Pune">
            B.TECH (COMP ENG)
          </span>
        </div>

        <div className="flex items-center justify-between text-[#E6ECE8]">
          <span className="flex items-center gap-2 text-[#9AA89F]">
            <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
            STATION:
          </span>
          <span className="text-[#9AA89F]">PUNE, IN // 18.52° N</span>
        </div>
      </div>
    </HudPanel>
  );
}
