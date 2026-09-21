"use client";

import React from "react";
import { socialLinks } from "@/lib/constants";

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="border-t py-8 text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-text-primary">Alex Rivera</span>
          <span>— Software Engineer • Full-Stack • AI/ML</span>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors"
            >
              {link.icon === "email" ? "Email" : link.icon === "github" ? "GitHub" : "LinkedIn"}
            </a>
          ))}
          <button onClick={onOpenResume} className="hover:text-accent transition-colors">Resume.pdf</button>
          <span className="text-text-subtle">© 2025 Alex Rivera</span>
        </div>
      </div>
    </footer>
  );
};