"use client";

import React from "react";
import { navLinks, heroData } from "@/lib/constants";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-bg-card border border-border w-full max-w-xl rounded-lg shadow-2xl flex flex-col">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-bg-canvas/80">
          <div>
            <h3 className="text-xl font-bold text-text-primary tracking-tight">Menu</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-border transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <nav className="space-y-2">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={onClose} className="block py-1 hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-borderSubtle">
            <div className="flex items-center gap-2">
              <a 
                href={heroData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 py-2 text-center text-xs font-mono font-medium border border-border rounded-lg"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                onClick={onClose}
                className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-accent text-white"
              >
                Hire / Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};