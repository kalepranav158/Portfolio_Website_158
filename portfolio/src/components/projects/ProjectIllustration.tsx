import React from "react";

interface ProjectIllustrationProps {
  slug: string;
  accent: "emerald" | "amber" | "cyan" | "lime";
}

export function ProjectIllustration({ slug, accent }: ProjectIllustrationProps) {
  const accentColors = {
    emerald: {
      primary: "#34D399",
      glow: "rgba(52, 211, 153, 0.25)",
      stroke: "#566B3F",
    },
    cyan: {
      primary: "#38BDF8",
      glow: "rgba(56, 189, 248, 0.25)",
      stroke: "#3A4650",
    },
    amber: {
      primary: "#F5B83D",
      glow: "rgba(245, 184, 61, 0.25)",
      stroke: "#85581A",
    },
    lime: {
      primary: "#A3E635",
      glow: "rgba(163, 230, 53, 0.25)",
      stroke: "#4A6126",
    },
  }[accent];

  if (slug === "advanced-self-rag") {
    return (
      <svg
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <rect width="400" height="220" fill="#0C1014" />
        {/* Background Grid */}
        <path d="M0 55 H400 M0 110 H400 M0 165 H400" stroke="#1B2216" strokeWidth="1" />
        <path d="M100 0 V220 M200 0 V220 M300 0 V220" stroke="#1B2216" strokeWidth="1" />

        {/* Cyclical Graph Nodes & Flow */}
        <circle cx="80" cy="110" r="28" fill="#141D16" stroke={accentColors.primary} strokeWidth="1.5" />
        <text x="80" y="113" textAnchor="middle" fill="#E6ECE8" fontSize="9" fontFamily="monospace">ROUTER</text>

        <circle cx="200" cy="55" r="28" fill="#141D16" stroke={accentColors.primary} strokeWidth="1.5" />
        <text x="200" y="58" textAnchor="middle" fill="#E6ECE8" fontSize="9" fontFamily="monospace">FAISS</text>

        <circle cx="320" cy="110" r="28" fill="#141D16" stroke={accentColors.primary} strokeWidth="1.5" />
        <text x="320" y="113" textAnchor="middle" fill="#E6ECE8" fontSize="9" fontFamily="monospace">GRADER</text>

        <circle cx="200" cy="165" r="28" fill="#141D16" stroke="#F5B83D" strokeWidth="1.5" />
        <text x="200" y="168" textAnchor="middle" fill="#F5B83D" fontSize="8" fontFamily="monospace">REWRITE</text>

        {/* Directed Arrows */}
        <path d="M108 95 L172 68" stroke={accentColors.primary} strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M228 68 L292 95" stroke={accentColors.primary} strokeWidth="1.5" />
        <path d="M305 130 L226 156" stroke="#F5B83D" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M174 156 L95 130" stroke="#F5B83D" strokeWidth="1.5" />

        <text x="200" y="210" textAnchor="middle" fill="#9AA89F" fontSize="8" fontFamily="monospace">
          // CYCLIC LANGGRAPH ROUTING LOOP
        </text>
      </svg>
    );
  }

  if (slug === "venora-ai-flute-tutor") {
    return (
      <svg
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <rect width="400" height="220" fill="#0C1014" />
        {/* Background Grid */}
        <path d="M0 40 H400 M0 80 H400 M0 120 H400 M0 160 H400" stroke="#161C22" strokeWidth="1" />

        {/* Pitch Curves: Reference (Emerald) vs Student (Cyan) */}
        <path
          d="M 20 110 Q 70 40, 130 90 T 250 80 T 380 130"
          stroke="#34D399"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 20 125 Q 80 60, 140 105 T 260 95 T 380 145"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* DTW Alignment Connectors */}
        <line x1="70" y1="62" x2="80" y2="78" stroke="#3A4650" strokeWidth="1" />
        <line x1="130" y1="90" x2="140" y2="105" stroke="#3A4650" strokeWidth="1" />
        <line x1="190" y1="85" x2="200" y2="100" stroke="#3A4650" strokeWidth="1" />
        <line x1="250" y1="80" x2="260" y2="95" stroke="#3A4650" strokeWidth="1" />
        <line x1="310" y1="105" x2="320" y2="120" stroke="#3A4650" strokeWidth="1" />

        {/* Acoustic Resonance Nodes */}
        <circle cx="130" cy="90" r="4" fill="#34D399" />
        <circle cx="140" cy="105" r="4" fill="#38BDF8" />

        <text x="20" y="25" fill="#34D399" fontSize="8" fontFamily="monospace">REF: MASTER CONTOUR</text>
        <text x="380" y="25" textAnchor="end" fill="#38BDF8" fontSize="8" fontFamily="monospace">STUDENT: DTW WARP</text>
        <text x="200" y="205" textAnchor="middle" fill="#9AA89F" fontSize="8" fontFamily="monospace">
          // ACOUSTIC FREQUENCY ALIGNMENT (DTW)
        </text>
      </svg>
    );
  }

  if (slug === "smart-budget-management") {
    return (
      <svg
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <rect width="400" height="220" fill="#0C1014" />
        {/* Ledger Document Frame */}
        <rect x="50" y="30" width="300" height="150" fill="#141D16" stroke="#3A4650" strokeWidth="1" />
        <line x1="50" y1="60" x2="350" y2="60" stroke="#3A4650" strokeWidth="1" />
        <line x1="160" y1="60" x2="160" y2="180" stroke="#3A4650" strokeWidth="1" />
        <line x1="260" y1="60" x2="260" y2="180" stroke="#3A4650" strokeWidth="1" />

        {/* Header Tags */}
        <text x="70" y="48" fill="#F5B83D" fontSize="8" fontFamily="monospace">DATE / TXN</text>
        <text x="180" y="48" fill="#F5B83D" fontSize="8" fontFamily="monospace">CATEGORY</text>
        <text x="280" y="48" fill="#F5B83D" fontSize="8" fontFamily="monospace">AMOUNT</text>

        {/* Ledger Data Rows */}
        <rect x="65" y="80" width="75" height="6" fill="#3A4650" />
        <rect x="175" y="80" width="65" height="6" fill="#34D399" opacity="0.8" />
        <text x="330" y="86" textAnchor="end" fill="#E6ECE8" fontSize="8" fontFamily="monospace">+2,450.00</text>

        <rect x="65" y="110" width="85" height="6" fill="#3A4650" />
        <rect x="175" y="110" width="55" height="6" fill="#F5B83D" opacity="0.8" />
        <text x="330" y="116" textAnchor="end" fill="#F5B83D" fontSize="8" fontFamily="monospace">-380.50</text>

        <rect x="65" y="140" width="60" height="6" fill="#3A4650" />
        <rect x="175" y="140" width="70" height="6" fill="#38BDF8" opacity="0.8" />
        <text x="330" y="146" textAnchor="end" fill="#F5B83D" fontSize="8" fontFamily="monospace">-1,200.00</text>

        <text x="200" y="205" textAnchor="middle" fill="#9AA89F" fontSize="8" fontFamily="monospace">
          // BOUNDING-BOX PARSER & TAXONOMY CLASSIFIER
        </text>
      </svg>
    );
  }

  // civic-water-infrastructure
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
      aria-hidden="true"
    >
      <rect width="400" height="220" fill="#0C1014" />
      {/* Pipe Network Grid */}
      <line x1="60" y1="60" x2="340" y2="60" stroke="#3A4650" strokeWidth="4" />
      <line x1="200" y1="60" x2="200" y2="170" stroke="#3A4650" strokeWidth="4" />
      <line x1="60" y1="170" x2="340" y2="170" stroke="#3A4650" strokeWidth="4" />

      {/* Sensor / Leakage Detection Crosshair */}
      <circle cx="200" cy="115" r="30" stroke="#A3E635" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="160" y1="115" x2="240" y2="115" stroke="#A3E635" strokeWidth="1" />
      <line x1="200" y1="75" x2="200" y2="155" stroke="#A3E635" strokeWidth="1" />

      {/* Pressure Nodes */}
      <circle cx="60" cy="60" r="6" fill="#38BDF8" />
      <circle cx="340" cy="60" r="6" fill="#38BDF8" />
      <circle cx="200" cy="60" r="6" fill="#34D399" />
      <circle cx="60" cy="170" r="6" fill="#38BDF8" />
      <circle cx="340" cy="170" r="6" fill="#38BDF8" />
      <circle cx="200" cy="170" r="6" fill="#A3E635" />

      <text x="200" y="125" textAnchor="middle" fill="#A3E635" fontSize="8" fontFamily="monospace">
        LEAK: DETECTED (YOLO)
      </text>

      <text x="200" y="205" textAnchor="middle" fill="#9AA89F" fontSize="8" fontFamily="monospace">
        // GEOSPATIAL INFRASTRUCTURE & MULTIMODAL VISION
      </text>
    </svg>
  );
}
