"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ExternalLink, Terminal } from "lucide-react";
import { Emblem } from "@/components/ui/Emblem";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface NavLink {
  label: string;
  href: string;
  id: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
  activeSection,
}: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and handle body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#05070A]/95 backdrop-blur-md md:hidden"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#3A4650]/80 bg-[#0C1014]">
        <div className="flex items-center gap-3">
          <Emblem size={28} />
          <div>
            <div className="font-mono text-xs text-[#E6ECE8] font-bold tracking-wider uppercase">
              PRANAV KALE
            </div>
            <div className="font-mono text-[10px] text-[#34D399] tracking-widest">
              // TACTICAL HUD
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#9AA89F] hover:text-[#E6ECE8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B83D]"
          aria-label="Close Navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <nav ref={drawerRef} className="flex-1 overflow-y-auto p-6 space-y-3">
        <div className="font-mono text-[10px] text-[#9AA89F] tracking-widest uppercase mb-4">
          // MISSION SECTORS
        </div>
        {links.map((link, idx) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.id}
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between p-3.5 border transition-all duration-200 clip-corner-cut-sm font-mono text-sm uppercase tracking-wider",
                isActive
                  ? "bg-[#1B2216] border-[#34D399] text-[#34D399] shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                  : "bg-[#0C1014] border-[#3A4650]/60 text-[#E6ECE8] hover:border-[#566B3F] hover:bg-[#161C22]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#9AA89F]">0{idx + 1}</span>
                <span>{link.label}</span>
              </div>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              )}
            </Link>
          );
        })}

        <div className="pt-6">
          <Button
            href="#contact"
            variant="amber"
            className="w-full justify-center py-3"
            onClick={onClose}
            icon={<Terminal className="w-4 h-4" />}
          >
            INITIATE CONTACT
          </Button>
        </div>
      </nav>

      {/* Drawer Footer Telemetry */}
      <div className="p-4 border-t border-[#3A4650]/60 bg-[#0C1014] text-[11px] font-mono text-[#9AA89F] flex items-center justify-between">
        <span>SYS: ONLINE</span>
        <span className="text-[#34D399]">LINK: ENCRYPTED</span>
      </div>
    </div>
  );
}
