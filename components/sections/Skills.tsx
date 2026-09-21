import React from "react";
import { skillCategories } from "@/lib/constants";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-border bg-bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">04 // TECHNICAL SKILLS</span>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        <p className="text-xs font-mono text-text-muted mb-8">
          Only technologies and patterns I have implemented in production or extensive projects and can defend technically in interviews.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-bg-card border border-border rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2 border-b border-borderSubtle pb-2.5">
                <span className="text-accent font-mono text-sm font-bold">{category.id}.</span>
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider font-mono">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, index) => (
                  <span key={index} className="px-2.5 py-1 text-xs font-mono bg-bg-canvas border border-border rounded text-text-muted">
                    {skill}
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