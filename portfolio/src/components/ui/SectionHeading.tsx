import React from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {/* Eyebrow & Tactical Index */}
      <div
        className={cn(
          "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#34D399] mb-3",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="px-1.5 py-0.5 bg-[#1B2216] border border-[#566B3F]/60 text-[#F5B83D] text-[10px] font-semibold">
            {index}
          </span>
        )}
        <span>{eyebrow}</span>
        <span className="h-px bg-[#3A4650] flex-1 max-w-[60px]" aria-hidden="true" />
      </div>

      {/* Main Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display uppercase tracking-[0.04em] text-[#E6ECE8] leading-tight">
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p className="mt-4 text-[#9AA89F] text-sm sm:text-base leading-relaxed max-w-2xl font-body">
          {description}
        </p>
      )}

      {/* Decorative Tactical Accent Line */}
      <div
        className={cn(
          "flex items-center gap-1.5 mt-5",
          align === "center" && "justify-center"
        )}
        aria-hidden="true"
      >
        <span className="w-8 h-1 bg-[#34D399]" />
        <span className="w-2 h-1 bg-[#F5B83D]" />
        <span className="w-1.5 h-1 bg-[#3A4650]" />
        <span className="w-24 h-px bg-[#3A4650]/80" />
      </div>
    </div>
  );
}
