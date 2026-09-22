"use client";

import React from "react";
import { socialLinks, heroData } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8 text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-text-primary">Utkarsh Bhariya</span>
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
          <a 
            href={heroData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Resume.pdf
          </a>
          <span className="text-text-subtle">© 2025 Utkarsh Bhariya</span>
        </div>
      </div>
    </footer>
  );
};