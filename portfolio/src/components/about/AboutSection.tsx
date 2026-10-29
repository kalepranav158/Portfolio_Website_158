import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudPanel } from "@/components/ui/HudPanel";
import { ShieldCheck, Target, Cpu, BookOpen, Compass, Award } from "lucide-react";

export function AboutSection() {
  const principles = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#34D399]" />,
      title: "EMPIRICAL BENCHMARKS OVER INTUITION",
      text: "Never trust an unbenchmarked pipeline. Every routing decision and generation step must be subjected to structured evaluation suites with quantifiable metrics.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#38BDF8]" />,
      title: "DETERMINISTIC GATES FOR PROBABILISTIC LLMS",
      text: "Probabilistic models hallucinate without boundaries. We constrain generative AI using deterministic validation gates, relevance filters, and strict schema contracts.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#F5B83D]" />,
      title: "ARCHITECTURAL MODULARITY & OBSERVABILITY",
      text: "Decouple ingestion, retrieval, routing, and synthesis into observable microservices. Keep frontend interfaces completely resilient to backend AI latency or outages.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#A3E635]" />,
      title: "AUTHENTIC PROBLEM-SOLVING",
      text: "Prioritize solving real operational friction—such as financial statement parsing or acoustic feedback—over erecting gratuitously complex SaaS abstractions.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative z-10" aria-label="About Pranav Kale">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="// SECTION 01"
          title="ENGINEERING INTENT & PHILOSOPHY"
          description="A systematic approach to architecting, evaluating, and deploying production-oriented artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Education Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <HudPanel variant="charcoal" accent="emerald" className="p-6 sm:p-8">
              <div className="font-mono text-xs text-[#34D399] uppercase tracking-widest mb-3">
                // OPERATIONAL PROFILE
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-[#E6ECE8] mb-4">
                PRANAV KALE // AI ENGINEER
              </h3>
              <p className="font-body text-sm sm:text-base text-[#9AA89F] leading-relaxed mb-4">
                I am a Computer Engineering undergraduate at JSPM&apos;s Rajarshi Shahu College of Engineering, Tathawade, Pune. My technical focus centers on transforming cutting-edge artificial intelligence research into robust, dependable engineering systems.
              </p>
              <p className="font-body text-sm sm:text-base text-[#9AA89F] leading-relaxed">
                Rather than treating AI as a magical black box, I approach intelligent applications through the lens of software engineering: analyzing failure modes, isolating latency bottlenecks, benchmarking retrieval precision, and designing deterministic safety guards.
              </p>
            </HudPanel>

            {/* Academic Station Panel */}
            <HudPanel variant="steel" accent="amber" className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1B2216] border border-[#566B3F] clip-corner-cut-sm shrink-0">
                  <BookOpen className="w-6 h-6 text-[#F5B83D]" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#F5B83D] uppercase tracking-widest mb-1">
                    // ACADEMIC CREDENTIAL
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-bold uppercase text-[#E6ECE8]">
                    B.Tech in Computer Engineering
                  </h4>
                  <p className="font-mono text-xs text-[#9AA89F] mt-1">
                    JSPM&apos;s Rajarshi Shahu College of Engineering, Tathawade, Pune
                  </p>
                  <p className="font-mono text-[11px] text-[#566B3F] mt-1">
                    STATUS: ACTIVE // FOCUS: ARTIFICIAL INTELLIGENCE & DISTRIBUTED SYSTEMS
                  </p>
                </div>
              </div>
            </HudPanel>
          </div>

          {/* Right Column: 4 Tactical Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] flex items-center gap-2 mb-2">
              <span>TACTICAL DIRECTIVES</span>
              <span className="h-px bg-[#3A4650] flex-1" />
            </div>

            {principles.map((principle, idx) => (
              <HudPanel
                key={idx}
                variant="charcoal"
                accent="metal"
                cornerCutSize="sm"
                className="p-4 sm:p-5"
              >
                <div className="flex items-start gap-3.5">
                  <span className="shrink-0 mt-0.5">{principle.icon}</span>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wide text-[#E6ECE8] mb-1.5">
                      {principle.title}
                    </h4>
                    <p className="font-body text-xs text-[#9AA89F] leading-relaxed">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </HudPanel>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
