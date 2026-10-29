"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Terminal } from "lucide-react";
import { Emblem } from "@/components/ui/Emblem";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id));

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-3 py-2.5 sm:px-6 sm:py-3 transition-all duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Tactical Command Bar */}
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#0C1014]/90 border border-[#3A4650]/80 backdrop-blur-md clip-corner-cut shadow-2xl">
            {/* Corner Bracket Accents */}
            <span
              className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#34D399]"
              aria-hidden="true"
            />
            <span
              className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#34D399]"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#34D399]"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#34D399]"
              aria-hidden="true"
            />

            {/* Brand Monogram & Title */}
            <Link
              href="/#home"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B83D]"
              aria-label="Pranav Kale Tactical Portfolio Home"
            >
              <Emblem size={30} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-[0.08em] uppercase text-[#E6ECE8] group-hover:text-[#34D399] transition-colors">
                  PRANAV KALE
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#9AA89F] uppercase -mt-0.5">
                  AI ENGINEER // SYS.01
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 select-none clip-corner-cut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B83D]",
                      isActive
                        ? "text-[#34D399] bg-[#1B2216] border border-[#34D399]/60 shadow-[0_0_10px_rgba(52,211,153,0.2)]"
                        : "text-[#9AA89F] hover:text-[#E6ECE8] hover:bg-[#161C22]/80 border border-transparent hover:border-[#3A4650]/40"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#34D399]"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/#contact"
                variant="amber"
                size="sm"
                className="hidden sm:inline-flex"
                icon={<Terminal className="w-3.5 h-3.5" />}
              >
                INITIATE CONTACT
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 text-[#9AA89F] hover:text-[#E6ECE8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B83D]"
                aria-label="Open Mobile Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
