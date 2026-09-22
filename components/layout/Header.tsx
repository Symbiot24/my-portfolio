"use client";

import React from "react";
import { navLinks, heroData } from "@/lib/constants";

interface HeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onMobileMenuToggle: (open: boolean) => void;
  mobileMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onMobileMenuToggle,
  mobileMenuOpen,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1">
            <span className="w-8 h-8 rounded border border-border bg-bg-card flex items-center justify-center font-mono font-bold text-sm text-accent group-hover:border-accent transition-colors">
              UB
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight transition-colors group-hover:text-accent">
                Utkarsh Bhariya
              </span>
              <span className="text-[11px] font-mono leading-none text-text-muted">
                B.Tech&apos;26
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & View Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Resume CTA */}
          <a 
            href={heroData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all shadow-sm bg-bg-card hover:bg-bg-card-hover text-text-muted hover:text-text-primary border-border"
          >
            <span className="material-symbols-outlined text-sm text-accent">description</span>
            <span>Resume.pdf</span>
          </a>

          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium bg-accent hover:bg-accent-hover text-white transition-colors shadow-sm font-mono"
          >
            Hire / Contact
          </a>

          {/* Theme Switcher */}
          <div className="flex items-center rounded-lg border border-opacity-40 p-0.5 text-xs font-mono">
            <button
              onClick={onToggleTheme}
              className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${
                theme === "dark" ? "bg-accent text-white font-semibold shadow-sm" : "text-text-muted hover:text-text-primary"
              }`}
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xs">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
              <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </div>

          {/* Mobile Drawer Button */}
          <button 
            onClick={() => onMobileMenuToggle(!mobileMenuOpen)} 
            className={`md:hidden p-2 rounded-lg border border-border text-text-muted`}
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden border-b px-6 py-4 space-y-3 font-medium text-sm ${theme === "light" ? "bg-[#fbfbf9] border-[#e2ded5]" : "bg-bg-card border-border"}`}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} onClick={() => onMobileMenuToggle(false)} className="block py-1 hover:text-accent">
            {link.label}
          </a>
        ))}
        <div className="pt-3 border-t border-border flex gap-2">
          <a 
            href={heroData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onMobileMenuToggle(false)}
            className="flex-1 py-2 text-center text-xs font-mono font-medium border border-border rounded-lg"
          >
            View Resume
          </a>
          <a 
            href="#contact" 
            onClick={() => onMobileMenuToggle(false)} 
            className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-accent text-white"
          >
            Hire / Contact
          </a>
        </div>
      </div>
    </header>
  );
};