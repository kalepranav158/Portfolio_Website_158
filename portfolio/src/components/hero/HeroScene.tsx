import React from "react";

export function HeroScene() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[560px] mx-auto flex items-center justify-center">
      {/* Outer Tactical Frame */}
      <div className="absolute inset-0 border border-[#3A4650]/60 bg-[#0C1014]/60 clip-corner-cut backdrop-blur-sm pointer-events-none z-10" />

      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#34D399] z-20" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#34D399] z-20" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#34D399] z-20" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#34D399] z-20" />

      {/* Main Vector Artwork */}
      <svg
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover rounded-none"
        aria-hidden="true"
      >
        <defs>
          {/* Deep Space Atmosphere */}
          <radialGradient
            id="spaceGlow"
            cx="50%"
            cy="40%"
            r="60%"
            fx="50%"
            fy="30%"
          >
            <stop offset="0%" stopColor="#16281E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0B130E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#05070A" stopOpacity="1" />
          </radialGradient>

          {/* Megastructure Ring Gradient */}
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#566B3F" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#34D399" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#3A4650" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#161C22" stopOpacity="0.9" />
          </linearGradient>

          {/* Armor Silhouette Gradients */}
          <linearGradient id="armorMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E3A24" />
            <stop offset="50%" stopColor="#1B2216" />
            <stop offset="100%" stopColor="#0C1014" />
          </linearGradient>

          <linearGradient id="visorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5B83D" />
            <stop offset="50%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#F5B83D" />
          </linearGradient>

          {/* Atmospheric Beam */}
          <linearGradient id="atmosphericBeam" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#34D399" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#05070A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Space Background Layer */}
        <rect width="600" height="450" fill="url(#spaceGlow)" />

        {/* Stellar Background Star Grid */}
        <g opacity="0.35">
          <circle cx="80" cy="70" r="1" fill="#FFFFFF" />
          <circle cx="140" cy="40" r="1.5" fill="#38BDF8" />
          <circle cx="210" cy="90" r="1" fill="#FFFFFF" />
          <circle cx="280" cy="50" r="1.5" fill="#34D399" />
          <circle cx="390" cy="65" r="1" fill="#FFFFFF" />
          <circle cx="480" cy="45" r="1.5" fill="#F5B83D" />
          <circle cx="530" cy="85" r="1" fill="#FFFFFF" />
          <circle cx="100" cy="160" r="1" fill="#38BDF8" />
          <circle cx="520" cy="170" r="1" fill="#34D399" />
        </g>

        {/* Atmospheric Sky Beam */}
        <polygon points="260,0 340,0 420,380 180,380" fill="url(#atmosphericBeam)" />

        {/* Halo-Inspired Ring Megastructure Arch */}
        <path
          d="M -50 480 C 120 180, 480 180, 650 480"
          stroke="url(#ringGrad)"
          strokeWidth="24"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M -50 480 C 120 180, 480 180, 650 480"
          stroke="#05070A"
          strokeWidth="12"
          fill="none"
        />
        <path
          d="M -30 470 C 130 195, 470 195, 630 470"
          stroke="#34D399"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          fill="none"
          opacity="0.9"
        />

        {/* Planetary Horizon Glow */}
        <ellipse cx="300" cy="430" rx="340" ry="80" fill="#141D16" />
        <ellipse
          cx="300"
          cy="420"
          rx="320"
          ry="65"
          stroke="#34D399"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Tactical Telemetry Rings / Reticle */}
        <g opacity="0.4">
          <circle
            cx="300"
            cy="240"
            r="120"
            stroke="#3A4650"
            strokeWidth="1"
            strokeDasharray="8 6"
          />
          <circle
            cx="300"
            cy="240"
            r="70"
            stroke="#566B3F"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line x1="160" y1="240" x2="440" y2="240" stroke="#3A4650" strokeWidth="0.75" />
          <line x1="300" y1="100" x2="300" y2="380" stroke="#3A4650" strokeWidth="0.75" />
        </g>

        {/* Stylized Spartan-Inspired Armored Silhouette */}
        <g id="spartanFigure" transform="translate(180, 140)">
          {/* Base Shadow */}
          <ellipse cx="120" cy="275" rx="75" ry="15" fill="#05070A" opacity="0.8" />

          {/* Heavy Armored Boots & Shins */}
          <polygon points="85,275 95,230 110,230 108,275" fill="url(#armorMetal)" stroke="#3A4650" />
          <polygon points="155,275 145,230 130,230 132,275" fill="url(#armorMetal)" stroke="#3A4650" />

          {/* Armored Thighs & Codpiece */}
          <polygon points="98,230 104,180 120,195 110,230" fill="#1B2216" stroke="#3A4650" />
          <polygon points="142,230 136,180 120,195 130,230" fill="#1B2216" stroke="#3A4650" />
          <polygon points="112,180 128,180 124,205 116,205" fill="#2E3A24" stroke="#566B3F" />

          {/* Chest & Torso Plates (Tactical Angular Armor) */}
          <polygon
            points="80,115 160,115 150,180 90,180"
            fill="url(#armorMetal)"
            stroke="#566B3F"
            strokeWidth="1.5"
          />
          {/* Abdominal tech plating */}
          <line x1="95" y1="140" x2="145" y2="140" stroke="#3A4650" strokeWidth="2" />
          <line x1="98" y1="155" x2="142" y2="155" stroke="#3A4650" strokeWidth="2" />
          <line x1="102" y1="170" x2="138" y2="170" stroke="#3A4650" strokeWidth="2" />

          {/* Pauldrons (Heavy Shoulder Armor) */}
          <polygon
            points="55,100 85,110 80,145 50,135"
            fill="#2E3A24"
            stroke="#34D399"
            strokeWidth="1.2"
          />
          <polygon
            points="185,100 155,110 160,145 190,135"
            fill="#2E3A24"
            stroke="#34D399"
            strokeWidth="1.2"
          />

          {/* Forearms & Gauntlets */}
          <polygon points="50,135 75,145 68,200 45,190" fill="#161C22" stroke="#3A4650" />
          <polygon points="190,135 165,145 172,200 195,190" fill="#161C22" stroke="#3A4650" />

          {/* Neck Guard & Collar */}
          <polygon points="100,105 140,105 132,118 108,118" fill="#141D16" stroke="#3A4650" />

          {/* Spartan Helmet */}
          {/* Outer Helmet Dome */}
          <path
            d="M 98 100 C 96 60, 144 60, 142 100 L 138 105 L 102 105 Z"
            fill="url(#armorMetal)"
            stroke="#566B3F"
            strokeWidth="1.5"
          />
          {/* Helmet Brow & Ridge */}
          <polygon points="98,82 142,82 136,75 104,75" fill="#2E3A24" stroke="#3A4650" />

          {/* Spartan Amber Visor (Gleaming Hex Visor) */}
          <polygon
            points="106,85 134,85 130,96 110,96"
            fill="url(#visorGlow)"
            stroke="#F5B83D"
            strokeWidth="1.5"
          />
          {/* Visor Specular Reflection */}
          <line
            x1="110"
            y1="88"
            x2="124"
            y2="88"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Helmet Chin Guard & Respirator Filters */}
          <polygon points="112,98 128,98 124,106 116,106" fill="#0C1014" stroke="#3A4650" />
          <circle cx="114" cy="102" r="1.5" fill="#34D399" />
          <circle cx="126" cy="102" r="1.5" fill="#34D399" />
        </g>

        {/* Ambient HUD Coordinates Overlay */}
        <g fontFamily="monospace" fontSize="9" fill="#9AA89F" opacity="0.75">
          <text x="25" y="35">OBJ // MEGASTRUCTURE RING ARCH-07</text>
          <text x="25" y="50">GRID: 18.5204° N, 73.8567° E</text>
          <text x="440" y="35" textAnchor="end" fill="#34D399">
            LINK: ENCRYPTED // UNSC-SEC
          </text>
          <text x="575" y="425" textAnchor="end" fill="#F5B83D">
            OPERATIONAL // SPARTAN.01
          </text>
        </g>
      </svg>
    </div>
  );
}
