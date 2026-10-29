import React from "react";
import { cn } from "@/lib/cn";

interface HudPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "charcoal" | "steel" | "olive" | "transparent";
  accent?: "emerald" | "amber" | "cyan" | "lime" | "metal" | "none";
  cornerCut?: boolean;
  cornerCutSize?: "sm" | "md" | "lg";
  glowOnHover?: boolean;
  showBrackets?: boolean;
  as?: React.ElementType;
}

export function HudPanel({
  children,
  className,
  variant = "charcoal",
  accent = "emerald",
  cornerCut = true,
  cornerCutSize = "md",
  glowOnHover = false,
  showBrackets = true,
  as: Component = "div",
  ...props
}: HudPanelProps) {
  const variantStyles = {
    charcoal: "bg-[#0C1014]/90 border border-[#3A4650]/60",
    steel: "bg-[#161C22]/90 border border-[#3A4650]/80",
    olive: "bg-[#1B2216]/85 border border-[#566B3F]/70",
    transparent: "bg-transparent border border-[#3A4650]/40",
  };

  const cornerCutClass = cornerCut
    ? cornerCutSize === "sm"
      ? "clip-corner-cut-sm"
      : cornerCutSize === "lg"
      ? "clip-corner-cut-lg"
      : "clip-corner-cut"
    : "";

  const glowStyles = glowOnHover
    ? accent === "amber"
      ? "hover:hud-glow-amber transition-shadow duration-300"
      : accent === "cyan"
      ? "hover:hud-glow-cyan transition-shadow duration-300"
      : accent === "lime"
      ? "hover:shadow-[0_0_20px_rgba(163,230,53,0.18)] transition-shadow duration-300"
      : "hover:hud-glow-emerald transition-shadow duration-300"
    : "";

  const bracketColor = {
    emerald: "border-[#34D399]",
    amber: "border-[#F5B83D]",
    cyan: "border-[#38BDF8]",
    lime: "border-[#A3E635]",
    metal: "border-[#3A4650]",
    none: "",
  }[accent];

  return (
    <Component
      className={cn(
        "relative backdrop-blur-sm transition-all duration-200",
        variantStyles[variant],
        cornerCutClass,
        glowStyles,
        className
      )}
      {...props}
    >
      {/* Tactical HUD Corner Brackets */}
      {showBrackets && accent !== "none" && (
        <>
          <span
            className={cn(
              "absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 pointer-events-none transition-colors",
              bracketColor
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 pointer-events-none transition-colors",
              bracketColor
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 pointer-events-none transition-colors",
              bracketColor
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 pointer-events-none transition-colors",
              bracketColor
            )}
            aria-hidden="true"
          />
        </>
      )}

      {children}
    </Component>
  );
}
