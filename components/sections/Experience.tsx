import React from "react";
import { experienceItems } from "@/lib/constants";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-border bg-bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">02 // WORK EXPERIENCE</span>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="space-y-8">
          {experienceItems.map((experience) => (
            <div 
              key={experience.id}
              className="relative bg-bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-borderHover transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-text-primary tracking-tight">{experience.title}</h3>
                  <div className="text-sm text-accent font-medium font-mono mt-0.5">
                    {experience.company} • {experience.location}
                  </div>
                </div>
                <div className="text-xs font-mono text-text-muted bg-bg-canvas px-3 py-1 rounded border border-border">
                  {experience.period}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 text-sm text-text-muted mb-6">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent font-mono text-xs mt-1"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-borderSubtle">
                <span className="text-xs font-mono text-text-muted mr-2">Stack:</span>
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-0.5 text-xs font-mono bg-bg-canvas border border-border rounded text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};