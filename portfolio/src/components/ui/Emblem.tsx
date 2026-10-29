import React from "react";
import { cn } from "@/lib/cn";

interface EmblemProps {
  className?: string;
  size?: number;
}

export function Emblem({ className, size = 32 }: EmblemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-300 hover:scale-105", className)}
      aria-hidden="true"
    >
      {/* Outer segmented tactical ring */}
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="#3A4650"
        strokeWidth="1.5"
        strokeDasharray="8 4"
      />
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="#566B3F"
        strokeWidth="1"
        strokeDasharray="4 2"
        opacity="0.6"
      />

      {/* Spartan Chevron Monogram */}
      <path
        d="M12 28L24 14L36 28L31 32L24 23L17 32L12 28Z"
        fill="#34D399"
        fillOpacity="0.85"
      />
      <path
        d="M16 35L24 25L32 35L29 37L24 31L19 37L16 35Z"
        fill="#F5B83D"
        fillOpacity="0.7"
      />

      {/* Center Tactical Node */}
      <circle cx="24" cy="24" r="2" fill="#E6ECE8" />
    </svg>
  );
}
