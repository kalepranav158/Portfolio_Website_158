import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudPanel } from "@/components/ui/HudPanel";
import { BookOpen, Radio, Clock } from "lucide-react";

interface PlannedArticle {
  id: string;
  title: string;
  category: string;
  abstract: string;
  status: string;
}

const PLANNED_ARTICLES: PlannedArticle[] = [
  {
    id: "art-01",
    title: "CYCLIC REASONING & ACTIVE QUERY REWRITING IN LANGGRAPH",
    category: "AI WORKFLOWS // RAG",
    abstract:
      "Deep dive into constructing non-linear state machines where retrieved context is actively evaluated and reformed prior to token generation.",
    status: "TRANSMISSION DRAFTING",
  },
  {
    id: "art-02",
    title: "ACOUSTIC SIGNAL HARMONICS: MERGING DTW WITH LLM COACHING",
    category: "MULTIMODAL AI // SIGNAL PROCESSING",
    abstract:
      "Technical methodology behind extracting microtonal flute frequencies and computing warp distance matrices for music pedagogy.",
    status: "EMPIRICAL ANALYSIS",
  },
  {
    id: "art-03",
    title: "HYBRID RETRIEVAL BENCHMARKS: RECIPROCAL RANK FUSION EXPLAINED",
    category: "VECTOR INFRASTRUCTURE",
    abstract:
      "Empirical comparisons between pure dense vector similarity (cosine) versus hybrid lexical BM25 + FAISS index fusion on technical datasets.",
    status: "BENCHMARKING",
  },
  {
    id: "art-04",
    title: "COMPUTER VISION IN MUNICIPAL DEFECT DETECTION",
    category: "COMPUTER VISION // EDGE AI",
    abstract:
      "Formulating synthetic augmentation strategies and lightweight YOLO inference pipelines for urban water infrastructure triage.",
    status: "RESEARCH LOG",
  },
];

export function JournalSection() {
  return (
    <section id="journal" className="py-20 md:py-28 relative z-10" aria-label="Technical Journal">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="// SECTION 05"
          title="ENGINEERING JOURNAL & DISPATCHES"
          description="Technical dispatches and architectural post-mortems on Agentic AI, RAG optimization, and distributed systems. No fabricated articles or artificial publication dates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLANNED_ARTICLES.map((article) => (
            <HudPanel
              key={article.id}
              variant="charcoal"
              accent="metal"
              cornerCutSize="sm"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#3A4650]/50 pb-2.5 mb-3 font-mono text-xs">
                  <span className="text-[#38BDF8] text-[10px] tracking-wider uppercase">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#F5B83D] text-[10px]">
                    <Clock className="w-3 h-3 text-[#F5B83D]" />
                    {article.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base uppercase text-[#E6ECE8] mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="font-body text-xs text-[#9AA89F] leading-relaxed">
                  {article.abstract}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#3A4650]/40 flex items-center justify-between font-mono text-[11px] text-[#566B3F]">
                <span>TRANSMISSION: PENDING VERIFICATION</span>
                <span className="text-[#34D399]">SLOT // RESERVED</span>
              </div>
            </HudPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
