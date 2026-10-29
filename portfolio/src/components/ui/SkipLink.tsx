import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F5B83D] text-[#05070A] font-mono text-xs uppercase font-bold tracking-wider clip-corner-cut-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-[#34D399]"
    >
      SKIP TO MAIN COMMAND INTERFACE
    </a>
  );
}
