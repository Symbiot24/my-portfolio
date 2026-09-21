"use client";

import React, { useState } from "react";
import { experienceItems, projects, educationItems, skillCategories } from "@/lib/constants";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const triggerDownloadNotice = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const formatPeriod = (period: string) => {
    // Convert "June 2024 — August 2024" to "Jun 2024 – Aug 2024"
    return period
      .replace("June", "Jun")
      .replace("July", "Jul")
      .replace("August", "Aug")
      .replace("January", "Jan")
      .replace("February", "Feb")
      .replace("March", "Mar")
      .replace("April", "Apr")
      .replace("May", "May")
      .replace("September", "Sep")
      .replace("October", "Oct")
      .replace("November", "Nov")
      .replace("December", "Dec")
      .replace("—", "–");
  };

  const getTechStack = (experience: typeof experienceItems[0]) => {
    return experience.technologies.join(", ");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="bg-bg-card border border-border w-full max-w-4xl max-h-[942px] rounded-lg overflow-hidden shadow-2xl flex flex-col relative text-text-muted">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-bg-canvas">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-bg-card border border-border text-accent font-mono text-xs font-bold">PDF</span>
            <div>
              <h3 className="text-base font-bold text-text-primary tracking-tight">Alex_Rivera_Software_Engineer_Resume.pdf</h3>
              <p className="text-xs font-mono text-text-muted">Updated for Summer/Fall 2025 Opportunities • 1-Page ATS Standard</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-border transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Resume Body */}
        <div className="p-6 md:p-8 overflow-y-auto bg-[#0a0c10] text-text-muted font-sans space-y-6 text-xs leading-relaxed border-t border-borderSubtle">
          {/* Header */}
          <div className="text-center pb-4 border-b border-border space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">ALEX RIVERA</h2>
            <div className="font-mono text-text-muted text-[11px] flex flex-wrap justify-center gap-3">
              <span>San Francisco, CA</span>
              <span>•</span>
              <span>alex.rivera.dev@gmail.com</span>
              <span>•</span>
              <span>github.com/alexrivera</span>
              <span>•</span>
              <span>linkedin.com/in/alexrivera-cs</span>
            </div>
            <p className="text-xs font-medium text-accent pt-1">
              Targeting: Software Engineer | Full-Stack Developer | Backend Systems | AI/ML Engineering
            </p>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase font-bold text-text-primary tracking-wider border-b border-border pb-1">
              EDUCATION
            </h4>
            {educationItems.map((edu, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-between items-baseline font-mono">
                  <div><span className="font-bold text-text-primary">{edu.institution}</span> — {edu.degree}</div>
                  <span className="text-text-muted text-[11px]">{edu.period}</span>
                </div>
                <p className="text-text-muted text-[11px] font-mono">
                  GPA: {edu.gpa} | Coursework: {edu.coursework?.join(", ") || "N/A"}
                </p>
              </React.Fragment>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold text-text-primary tracking-wider border-b border-border pb-1">
              TECHNICAL EXPERIENCE
            </h4>
            {experienceItems.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-mono">
                  <span className="font-bold text-text-primary">{exp.company} — {exp.title}</span>
                  <span className="text-text-muted text-[11px]">{formatPeriod(exp.period)}</span>
                </div>
                <p className="text-text-muted text-[11px] italic mb-1.5 font-mono">
                  {exp.location} | {getTechStack(exp)}
                </p>
                <ul className="list-disc list-inside space-y-1 text-text-muted text-[11px]">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-text-primary tracking-wider border-b border-border pb-1">
              NOTABLE TECHNICAL PROJECTS
            </h4>
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-baseline font-mono">
                  <span className="font-bold text-text-primary">{project.title}</span>
                  <span className="text-text-muted text-[11px]">{project.stack.split(", ").slice(0, 3).join(", ")}</span>
                </div>
                <p className="text-text-muted text-[11px] mt-0.5">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase font-bold text-text-primary tracking-wider border-b border-border pb-1">
              SKILLS & PROFICIENCIES
            </h4>
            {skillCategories.map((category) => (
              <p key={category.id} className="text-[11px] font-mono text-text-muted">
                <strong className="text-text-primary">{category.name}:</strong> {category.skills.join(", ")}
              </p>
            ))}
          </div>
        </div>

        <div className="px-6 py-3.5 border-t border-border bg-bg-canvas flex justify-between items-center text-xs font-mono">
          <span className="text-text-subtle">ATS-Optimized Formatting</span>
          <div className="flex items-center gap-3">
            {downloaded && <span className="text-emerald-400">PDF Download Started ✓</span>}
            <button onClick={triggerDownloadNotice} className="px-4 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium flex items-center gap-1.5 shadow-sm">
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};