"use client";

import React from "react";
import { heroData, socialLinks } from "@/lib/constants";

interface HeroProps {
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border overflow-hidden bg-grid-pattern">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-card text-[12px] font-mono font-medium text-accent">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SOFTWARE ENGINEER • FULL-STACK • BACKEND & AI</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
                {heroData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-text-muted font-medium leading-snug">
                {heroData.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-text-muted leading-relaxed max-w-2xl font-normal">
              {heroData.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button 
                onClick={onScrollToProjects}
                className="px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-sm font-mono"
              >
                View Engineered Projects
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </button>
              <button 
                onClick={() => {}}
                className="px-5 py-2.5 rounded-lg border border-border hover:border-border-hover text-text-muted hover:text-text-primary bg-bg-card hover:bg-bg-card-hover text-sm font-medium transition-all inline-flex items-center gap-2 font-mono"
              >
                <span className="material-symbols-outlined text-accent text-sm">description</span>
                Read Resume / CV
              </button>
            </div>

            {/* Secondary Links */}
            <div className="pt-2 flex items-center gap-5 text-xs font-mono text-text-muted">
              {socialLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-text-primary flex items-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {link.icon === "github" ? "code" : link.icon === "linkedin" ? "share" : "mail"}
                    </span>
                    <span>{link.label}</span>
                  </a>
                  {index < socialLinks.length - 1 && <span className="text-border">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Content - Terminal Card */}
          <div className="lg:col-span-5">
            <div className="bg-bg-card border border-border rounded-lg p-2 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-xs font-mono text-text-muted ml-2">utkarsh_bhariya.dev.sh</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">Status: Active</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {heroData.statusItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-borderSubtle last:border-0">
                    <span className="text-text-muted">{item.label}:</span>
                    <span className="text-text-primary font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-bg-canvas rounded border border-border font-mono text-[11px] space-y-1.5">
                <div className="flex items-center justify-between text-text-muted">
                  <span>SYSTEM_LOAD: {heroData.systemMetrics.load}</span>
                  <span>TEST_COVERAGE: {heroData.systemMetrics.testCoverage}</span>
                </div>
                <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[88%]"></div>
                </div>
                <p className="text-text-subtle pt-0.5">
                  {heroData.systemMetrics.readiness}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};