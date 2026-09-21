"use client";

import React from "react";
import { aboutData } from "@/lib/constants";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">01 // PROFILE</span>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Introduction */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              {aboutData.headline}
            </h2>
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <h3 className="text-xs font-mono font-semibold text-text-secondary uppercase tracking-wider mb-3">
                Core Domains of Focus:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {aboutData.coreDomains.map((domain, index) => (
                  <div key={index} className="p-2.5 rounded bg-bg-card border border-border text-text-muted">
                    <span className="text-accent font-bold mr-1">{'>'}</span> {domain}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Engineering Mindset */}
          <div className="lg:col-span-6 bg-bg-card border border-border rounded-lg p-6 sm:p-7 space-y-6">
            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
              <span className="material-symbols-outlined w-5 h-5 text-accent">psychology</span>
              <span>Engineering Values & Practices</span>
            </h3>

            <div className="space-y-4 text-sm">
              {aboutData.values.map((value, index) => (
                <div key={index} className={`border-l-2 pl-4 space-y-1 ${value.highlight ? "border-accent" : "border-border"}`}>
                  <span className="font-medium text-text-primary block">{value.title}</span>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};