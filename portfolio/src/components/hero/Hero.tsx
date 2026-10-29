import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroScene } from "./HeroScene";
import { StatusPanel } from "./StatusPanel";
import { ArrowRight, FileText, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission Directives & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tactical Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1B2216] border border-[#566B3F] clip-corner-cut-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#34D399] font-medium">
                AI ENGINEER // SYSTEMS BUILDER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-[0.03em] text-[#E6ECE8] leading-[1.1] mb-6">
              BUILDING{" "}
              <span className="text-[#34D399] drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                INTELLIGENCE
              </span>{" "}
              FOR A BETTER TOMORROW
            </h1>

            {/* Professional Introduction */}
            <p className="text-[#9AA89F] font-body text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              I am <span className="text-[#E6ECE8] font-semibold">Pranav Kale</span>, a Computer Engineering student at JSPM&apos;s Rajarshi Shahu College of Engineering, Pune. I architect, evaluate, and deploy intelligent applications—specializing in Autonomous Agentic AI, Hybrid RAG workflows, and reliable production systems.
            </p>

            {/* Action CTA Matrix */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                VIEW MISSIONS
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
              >
                REQUEST DOSSIER / CV
              </Button>
            </div>

            {/* Social & Telemetry Link Array */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#3A4650]/40 w-full font-mono text-xs text-[#9AA89F]">
              <span className="uppercase text-[11px] tracking-widest text-[#566B3F]">
                // CHANNELS:
              </span>

              <a
                href="https://github.com/kalepranav158"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#34D399] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pranav-kale-a3b454261/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </a>

              <span className="ml-auto hidden sm:flex items-center gap-1.5 text-[11px] text-[#566B3F]">
                <Shield className="w-3 h-3 text-[#34D399]" />
                UNSC PROTOCOL ACTIVE
              </span>
            </div>
          </div>

          {/* Right Column: Spartan Scene Artwork & Diagnostics */}
          <div className="lg:col-span-5 flex flex-col items-center relative">
            <HeroScene />

            {/* Floating Telemetry Diagnostics Widget */}
            <div className="w-full mt-4 flex justify-center">
              <StatusPanel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
