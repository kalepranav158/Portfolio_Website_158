import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "amber";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "left",
  isExternal = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 select-none clip-corner-cut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B83D] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-[11px] gap-1.5",
    md: "px-5 py-2.5 text-xs gap-2",
    lg: "px-7 py-3 text-sm gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#34D399] text-[#05070A] hover:bg-[#10B981] hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] border border-[#34D399]",
    secondary:
      "bg-[#1B2216] text-[#E6ECE8] hover:bg-[#2E3A24] border border-[#566B3F] hover:border-[#34D399] hover:text-[#34D399]",
    amber:
      "bg-[#F5B83D] text-[#05070A] hover:bg-[#D97706] hover:shadow-[0_0_15px_rgba(245,184,61,0.3)] border border-[#F5B83D]",
    ghost:
      "bg-transparent text-[#9AA89F] hover:text-[#E6ECE8] hover:bg-[#161C22]/60 border border-transparent hover:border-[#3A4650]",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles, variantStyles, className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles, variantStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
      {...props}
    >
      {content}
    </button>
  );
}
