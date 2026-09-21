"use client";

import React from "react";
import { projects } from "@/lib/constants";

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectId, onClose }) => {
  if (!projectId) return null;

  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
      <div className="bg-bg-card border border-border w-full max-w-3xl max-h-[921px] rounded-lg overflow-hidden shadow-2xl flex flex-col relative text-text-muted">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-bg-canvas/80">
          <div>
            <span className="text-[11px] font-mono text-accent uppercase font-bold tracking-wider">{project.category}</span>
            <h3 className="text-xl font-bold text-text-primary tracking-tight mt-0.5">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-border transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-text-muted leading-relaxed">
          <div>
            <h4 className="text-text-primary font-semibold mb-1 flex items-center gap-1.5">
              <span className="text-accent font-mono font-bold">01.</span> Problem Statement
            </h4>
            <p>{project.problem}</p>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-1 flex items-center gap-1.5">
              <span className="text-accent font-mono font-bold">02.</span> System Dataflow Architecture
            </h4>
            <div className="p-3 bg-bg-canvas rounded-lg border border-border font-mono text-xs text-text-muted mt-2">
              {project.architecture}
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-1.5 flex items-center gap-1.5">
              <span className="text-accent font-mono font-bold">03.</span> Key Concurrency & Reliability Engineering
            </h4>
            <ul className="space-y-1.5 list-disc list-inside">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-borderSubtle">
            <h4 className="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">Production Tech Stack</h4>
            <p className="font-mono text-xs text-accent">{project.stack}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-border bg-bg-canvas flex items-center justify-between font-mono text-xs">
          <span className="text-text-subtle">Technical Case Study Specification</span>
          <div className="flex gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 rounded-lg bg-bg-card border border-border hover:border-gray-400 text-text-muted transition-colors"
            >
              GitHub Code
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 rounded-lg bg-bg-card border border-border hover:border-gray-400 text-accent transition-colors"
            >
              Live Demo
            </a>
            <button onClick={onClose} className="px-4 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};