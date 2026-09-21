import React from "react";
import { educationItems } from "@/lib/constants";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-border bg-bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">05 // EDUCATION</span>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="space-y-6">
          {educationItems.map((education, index) => (
            <div key={index} className="bg-bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 border-b border-borderSubtle pb-2.5">
                <span className="text-accent font-mono text-sm font-bold">{index + 1}.</span>
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider font-mono">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <div>
                    <span className="font-bold text-text-primary">{education.institution}</span> — {education.degree}
                  </div>
                  <span className="text-text-muted text-[11px]">{education.period}</span>
                </div>
                <p className="text-text-muted text-[11px] font-mono">
                  GPA: {education.gpa} | Coursework: {education.coursework?.join(", ") || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};