import React from "react";
import { projects } from "@/lib/constants";

export const Projects: React.FC<{ onOpenProject: (id: string) => void }> = ({ onOpenProject }) => {
  return (
    <section id="projects" className="py-16 md:py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">03 // SELECTED TECHNICAL WORK</span>
          </div>
          <span className="text-xs font-mono text-text-muted hidden sm:inline">Click any project card to inspect architecture modal</span>
        </div>
        <div className="h-px bg-border mb-10"></div>

        {/* Primary Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <div 
              key={project.id}
              className="mb-10 bg-bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg relative group hover:border-accent/60 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  {/* Label */}
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase bg-accent/10 text-accent rounded border border-accent/30 font-medium">Featured Case Study</span>
                    <span className="text-xs font-mono text-text-muted">Production Ready</span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight flex items-center gap-3">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-sm font-mono text-accent mt-1">{project.subtitle}</p>
                  </div>

                  {/* Problem & Solution Overview */}
                  <div className="space-y-2 text-sm text-text-muted">
                    <p>
                      <strong className="text-text-primary font-medium">The Engineering Problem:</strong> {project.problem}
                    </p>
                    <p>
                      <strong className="text-text-primary font-medium">Technical Implementation:</strong> {project.architecture}
                    </p>
                  </div>

                  {/* Engineering Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-text-muted pt-1">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center gap-2 bg-bg-canvas p-2 rounded border border-border">
                        <span className="text-accent font-bold">&bull;</span>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.stack.split(", ").map((tech, index) => (
                      <span key={index} className="px-2.5 py-1 text-xs font-mono bg-bg-canvas border border-border rounded text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action & Metrics Panel */}
                <div className="lg:col-span-4 bg-bg-canvas border border-border rounded-lg p-5 space-y-5">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider pb-1 border-b border-border">
                      Benchmark Metrics
                    </div>
                    <div className="flex justify-between">
                      {project.metrics?.map((metric, index) => (
                        <React.Fragment key={index}>
                          <span className="text-text-muted">{metric.label}:</span>
                          <span className="text-emerald-400 font-semibold">{metric.value}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button 
                      onClick={() => onOpenProject(project.id)}
                      className="w-full py-2.5 rounded bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">folder_open</span>
                      <span>Open Deep Architecture Modal</span>
                    </button>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 py-2 text-center text-xs font-mono rounded bg-bg-card border border-border hover:border-gray-400 text-text-muted transition-colors"
                      >
                        GitHub Code
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 py-2 text-center text-xs font-mono rounded bg-bg-card border border-border hover:border-gray-400 text-accent transition-colors"
                      >
                        Live Demo &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div 
                key={project.id}
                onClick={() => onOpenProject(project.id)}
                className="bg-bg-card border border-border rounded-lg p-6 flex flex-col justify-between hover:border-accent/50 transition-all cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono text-accent font-semibold uppercase">{project.category.split(":")[0]}</span>
                    <span className="text-[11px] font-mono text-text-muted">{project.category.split(":")[1]?.trim() || ""}</span>
                  </div>
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-1.5 text-xs font-mono text-text-muted pt-2">
                    {project.challenges.slice(0, 2).map((challenge, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-[11px]">
                        <span className="text-accent font-bold">&bull;</span> <span>{challenge.split(":")[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-borderSubtle flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.stack.split(", ").slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-canvas border border-border text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-accent group-hover:translate-x-1 transition-transform">Details &rarr;</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};