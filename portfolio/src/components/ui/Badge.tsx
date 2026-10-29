import React from "react";
import { cn } from "@/lib/cn";

export type StatusType = "implemented" | "in-development" | "planned" | "experimental";

interface BadgeProps {
  status?: StatusType;
  label?: string;
  variant?: "emerald" | "amber" | "cyan" | "lime" | "metal";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  status,
  label,
  variant,
  size = "md",
  className,
}: BadgeProps) {
  // Determine variant based on status if not explicitly provided
  const resolvedVariant =
    variant ||
    (status === "implemented"
      ? "emerald"
      : status === "in-development"
      ? "amber"
      : status === "planned"
      ? "cyan"
      : status === "experimental"
      ? "lime"
      : "metal");

  const displayLabel =
    label ||
    (status === "implemented"
      ? "DEPLOYED // OPERATIONAL"
      : status === "in-development"
      ? "ACTIVE ENG // IN PROGRESS"
      : status === "planned"
      ? "PROPOSED // ARCHITECTURE"
      : status === "experimental"
      ? "EXPERIMENTAL SUITE"
      : "METRIC VALIDATED");

  const variantStyles = {
    emerald: "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/40",
    amber: "bg-[#F5B83D]/10 text-[#F5B83D] border-[#F5B83D]/40",
    cyan: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/40",
    lime: "bg-[#A3E635]/10 text-[#A3E635] border-[#A3E635]/40",
    metal: "bg-[#3A4650]/20 text-[#9AA89F] border-[#3A4650]/50",
  }[resolvedVariant];

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-[11px]",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono uppercase tracking-widest border clip-corner-cut-sm font-medium select-none",
        variantStyles,
        sizeStyles,
        className
      )}
    >
      <span
        className={cn("w-1.5 h-1.5 rounded-full shrink-0", {
          "bg-[#34D399] animate-pulse": resolvedVariant === "emerald",
          "bg-[#F5B83D]": resolvedVariant === "amber",
          "bg-[#38BDF8]": resolvedVariant === "cyan",
          "bg-[#A3E635]": resolvedVariant === "lime",
          "bg-[#9AA89F]": resolvedVariant === "metal",
        })}
        aria-hidden="true"
      />
      <span>{displayLabel}</span>
    </span>
  );
}
