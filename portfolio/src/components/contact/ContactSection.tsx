"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudPanel } from "@/components/ui/HudPanel";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import {
  Send,
  Terminal,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Radio,
  Loader2,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AI Engineering Opportunity",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedbackMessage(
          data.message || "Transmission successfully delivered to Pranav Kale."
        );
        setFormData({
          name: "",
          email: "",
          subject: "AI Engineering Opportunity",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.message || "Transmission failed. Please use LinkedIn or GitHub."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "Network transmission error. Please reach out directly on LinkedIn."
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10" aria-label="Contact Pranav Kale">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="// SECTION 06"
          title="INITIATE SECURE TRANSMISSION"
          description="Open channels for AI engineering roles, technical collaboration, and system design consultations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tactical Comm Details */}
          <div className="lg:col-span-5 space-y-6">
            <HudPanel variant="charcoal" accent="emerald" className="p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#34D399] uppercase tracking-widest mb-4">
                <Radio className="w-4 h-4 text-[#34D399] animate-pulse" />
                <span>// COMM RELAY: ACTIVE</span>
              </div>

              <h3 className="font-display font-bold text-lg uppercase text-[#E6ECE8] mb-3">
                LET&apos;S BUILD SOMETHING EXTRAORDINARY
              </h3>

              <p className="font-body text-sm text-[#9AA89F] leading-relaxed mb-6">
                Whether you have an inquiry regarding Autonomous AI architectures, RAG pipeline evaluation, or prospective full-time engineering roles, I welcome your transmission.
              </p>

              {/* Coordinates & Availability */}
              <div className="space-y-3 font-mono text-xs border-t border-[#3A4650]/40 pt-4 text-[#9AA89F]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#34D399]" />
                  <span>STATION: PUNE, MAHARASHTRA, INDIA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#F5B83D]" />
                  <span>RESPONSE TIME: &lt; 24 HOURS (IST)</span>
                </div>
              </div>
            </HudPanel>

            {/* Direct Tactical Network Links */}
            <HudPanel variant="steel" accent="cyan" className="p-6">
              <div className="font-mono text-xs text-[#38BDF8] uppercase tracking-widest mb-4">
                // EXTERNAL FREQUENCIES
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/pranav-kale-a3b454261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#141D16] border border-[#3A4650]/70 clip-corner-cut-sm hover:border-[#38BDF8] transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
                    <span className="font-mono text-xs text-[#E6ECE8] uppercase group-hover:text-[#38BDF8] transition-colors">
                      LINKEDIN DISPATCH
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#566B3F]">CONNECT ↗</span>
                </a>

                <a
                  href="https://github.com/kalepranav158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#141D16] border border-[#3A4650]/70 clip-corner-cut-sm hover:border-[#34D399] transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B83D]"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#34D399]" />
                    <span className="font-mono text-xs text-[#E6ECE8] uppercase group-hover:text-[#34D399] transition-colors">
                      GITHUB REPOSITORIES
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#566B3F]">EXPLORE ↗</span>
                </a>
              </div>
            </HudPanel>
          </div>

          {/* Right Column: Terminal Input Console */}
          <div className="lg:col-span-7">
            <HudPanel variant="charcoal" accent="amber" className="p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#3A4650]/50 pb-3 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#E6ECE8]">
                  <Terminal className="w-4 h-4 text-[#F5B83D]" />
                  <span>TRANSMISSION CONSOLE // V1.0</span>
                </div>
                <span className="text-[#34D399] text-[10px] uppercase font-semibold">
                  SECURE RELAY
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from view) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-[#9AA89F] mb-1.5"
                    >
                      CALLSIGN / FULL NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Commander Sarah Palmer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0C1014] border border-[#3A4650]/80 text-[#E6ECE8] font-mono text-xs focus:border-[#34D399] focus:outline-none clip-corner-cut-sm transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-[#9AA89F] mb-1.5"
                    >
                      RETURN FREQUENCY (EMAIL) *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@unsc-command.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0C1014] border border-[#3A4650]/80 text-[#E6ECE8] font-mono text-xs focus:border-[#34D399] focus:outline-none clip-corner-cut-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9AA89F] mb-1.5"
                  >
                    MISSION OBJECTIVE / SUBJECT
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0C1014] border border-[#3A4650]/80 text-[#E6ECE8] font-mono text-xs focus:border-[#34D399] focus:outline-none clip-corner-cut-sm transition-colors cursor-pointer"
                  >
                    <option value="AI Engineering Opportunity">AI Engineering Opportunity</option>
                    <option value="Research & Agentic Collaboration">Research & Agentic Collaboration</option>
                    <option value="System Architecture Review">System Architecture Review</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9AA89F] mb-1.5"
                  >
                    TRANSMISSION PAYLOAD (MESSAGE) *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Provide details regarding the project scope, technical requirements, or collaboration goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0C1014] border border-[#3A4650]/80 text-[#E6ECE8] font-mono text-xs focus:border-[#34D399] focus:outline-none clip-corner-cut-sm transition-colors resize-none"
                  />
                </div>

                {/* Feedback Banners */}
                {status === "success" && (
                  <div className="p-3.5 bg-[#1B2216] border border-[#34D399] text-[#34D399] font-mono text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 bg-[#2E1B1B] border border-[#EF4444] text-[#EF4444] font-mono text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="amber"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full justify-center py-3.5"
                    icon={
                      status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {status === "loading"
                      ? "ROUTING TRANSMISSION..."
                      : "TRANSMIT MESSAGE // SEND"}
                  </Button>
                </div>
              </form>
            </HudPanel>
          </div>
        </div>
      </Container>
    </section>
  );
}
