import React from "react";
import { Container } from "@/components/ui/Container";
import { HudPanel } from "@/components/ui/HudPanel";
import { Cpu, Database, CheckCircle2, Layers } from "lucide-react";

interface TelemetryItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  note: string;
  accent: "emerald" | "amber" | "cyan" | "lime";
  icon: React.ReactNode;
}

const TELEMETRY_DATA: TelemetryItem[] = [
  {
    id: "missions",
    label: "MISSIONS ARCHITECTED",
    value: "04",
    note: "Verified Engineering Dossiers",
    accent: "emerald",
    icon: <Layers className="w-4 h-4 text-[#34D399]" />,
  },
  {
    id: "domains",
    label: "CORE CAPABILITIES",
    value: "04",
    unit: "DOMAINS",
    note: "AI, Vision, Backend & Vector DBs",
    accent: "cyan",
    icon: <Cpu className="w-4 h-4 text-[#38BDF8]" />,
  },
  {
    id: "benchmark",
    label: "SELF-RAG ROUTER ACCURACY",
    value: "95.83%",
    unit: "(23/24)",
    note: "Historical Evaluation Run Result",
    accent: "amber",
    icon: <CheckCircle2 className="w-4 h-4 text-[#F5B83D]" />,
  },
  {
    id: "stack",
    label: "ASSISTANT ARCHITECTURE",
    value: "HYBRID",
    unit: "RAG",
    note: "BM25 + FAISS + FastAPI + LangChain",
    accent: "lime",
    icon: <Database className="w-4 h-4 text-[#A3E635]" />,
  },
];

export function TelemetryStrip() {
  return (
    <section className="relative z-20 py-8 border-y border-[#3A4650]/40 bg-[#080B09]/80 backdrop-blur-sm">
      <Container>
        {/* Header Eyebrow */}
        <div className="flex items-center justify-between mb-4 font-mono text-[11px] text-[#9AA89F]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            <span className="text-[#34D399] font-semibold">
              // TELEMETRY STRIP 01
            </span>
            <span className="text-[#3A4650]">|</span>
            <span>VERIFIED CAPABILITIES SNAPSHOT</span>
          </span>
          <span className="hidden sm:inline text-[#566B3F]">
            SYS.ID: PK-158-TEL
          </span>
        </div>

        {/* 4 Telemetry Cells Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TELEMETRY_DATA.map((item) => {
            const borderAccent = {
              emerald: "border-l-2 border-l-[#34D399]",
              amber: "border-l-2 border-l-[#F5B83D]",
              cyan: "border-l-2 border-l-[#38BDF8]",
              lime: "border-l-2 border-l-[#A3E635]",
            }[item.accent];

            return (
              <HudPanel
                key={item.id}
                variant="charcoal"
                accent={item.accent}
                cornerCutSize="sm"
                glowOnHover
                className={`p-4 ${borderAccent}`}
              >
                <div className="flex items-center justify-between text-[#9AA89F] mb-2 font-mono text-[10px] tracking-widest uppercase">
                  <span>{item.label}</span>
                  {item.icon}
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-[#E6ECE8] tracking-tight">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="font-mono text-xs text-[#9AA89F] uppercase">
                      {item.unit}
                    </span>
                  )}
                </div>

                <p className="font-mono text-[11px] text-[#9AA89F]">
                  {item.note}
                </p>
              </HudPanel>
            );
          })}
        </div>

        {/* Mandatory Context Note regarding Empirical Benchmarks */}
        <div className="mt-3 text-right">
          <p className="font-mono text-[10px] text-[#566B3F]">
            * Evaluation metrics represent verified historical benchmark runs from specific test suites; not universal production guarantees.
          </p>
        </div>
      </Container>
    </section>
  );
}
