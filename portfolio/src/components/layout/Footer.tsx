"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Emblem } from "@/components/ui/Emblem";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-[#3A4650]/50 bg-[#0C1014]/90 py-10 mt-auto relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <Emblem size={26} />
            <div>
              <div className="font-display font-bold text-sm tracking-[0.06em] uppercase text-[#E6ECE8]">
                PRANAV KALE
              </div>
              <div className="font-mono text-[10px] text-[#9AA89F] tracking-widest uppercase">
                AI ENGINEER // SYSTEMS BUILDER
              </div>
            </div>
          </div>

          {/* Center Tactical Status */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#9AA89F]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-[#34D399] font-medium">SYS: NOMINAL</span>
            </span>
            <span className="text-[#3A4650]">|</span>
            <span>SPEC: UNSC-TAC.01</span>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="font-mono text-xs text-[#9AA89F] text-center md:text-right space-y-1">
            <div>&copy; {currentYear} PRANAV KALE. ALL RIGHTS RESERVED.</div>
            <div className="text-[10px] text-[#566B3F]">
              ORIGINAL DESIGN // NOT AFFILIATED WITH OFFICIAL HALO/343 INDUSTRIES
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
