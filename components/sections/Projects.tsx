"use client";

import React, { useState } from "react";
import { projects } from "@/lib/constants";

type FilterCategory = "all" | "backend" | "aiml" | "fullstack";

const filterConfig = {
  all: { label: "All"},
  backend: { label: "Backend & Distributed Systems"},
  aiml: { label: "AI & Applied ML"},
  fullstack: { label: "Full-Stack & DevTools"},
} as const;

const categoryStyles = {
  backend: {
    badge: "bg-accent/10 text-accent border-accent/30 dark:bg-accent/20 dark:text-accent dark:border-accent/40",
    metricBadge: "bg-accent-success/10 text-accent-success border-accent-success/30 dark:bg-accent-success/20 dark:text-accent-success dark:border-accent-success/40",
  },
  aiml: {
    badge: "bg-accent/10 text-accent border-accent/30 dark:bg-accent/20 dark:text-accent dark:border-accent/40",
    metricBadge: "bg-accent-success/10 text-accent-success border-accent-success/30 dark:bg-accent-success/20 dark:text-accent-success dark:border-accent-success/40",
  },
  fullstack: {
    badge: "bg-accent/10 text-accent border-accent/30 dark:bg-accent/20 dark:text-accent dark:border-accent/40",
    metricBadge: "bg-accent-success/10 text-accent-success border-accent-success/30 dark:bg-accent-success/20 dark:text-accent-success dark:border-accent-success/40",
  },
};

const techBadgeStyles = "bg-bg-muted border-border text-text-secondary dark:bg-bg-muted dark:border-border dark:text-text-secondary";

export const Projects: React.FC<{ onOpenProject: (id: string) => void }> = ({
  onOpenProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.filterCategory === activeFilter;
  });

  const handleFilterClick = (filter: FilterCategory) => {
    setActiveFilter(filter);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-20 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
              03 // SELECTED TECHNICAL WORK
            </span>
          </div>
          <span className="text-xs font-mono text-text-muted">
            Unified Engineering Systems & Architecture Showcase
          </span>
        </div>
        <div className="h-px bg-border mb-6"></div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {Object.entries(filterConfig).map(([key, config]) => (
            <button
              key={key}
              id={`filter-${key}`}
              onClick={() => handleFilterClick(key as FilterCategory)}
              className={`project-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === key
                  ? "bg-text-primary text-bg-canvas border border-text-primary shadow-sm"
                  : "bg-bg-card text-text-muted hover:text-text-primary border border-border hover:border-border-hover"
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>

        <div
          id="projectCardsGrid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => {
            const styles = categoryStyles[project.filterCategory || "backend"];
            const techStack = project.stack.split(", ");

            return (
              <div
                key={project.id}
                data-category={project.filterCategory}
                className="project-card bg-bg-card border border-border rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-border-hover shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded border ${styles.badge}`}>
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded border ${styles.metricBadge}`}>
                      {project.highlightMetric}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent mt-0.5 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-text-muted leading-relaxed">
                    <p className="">
                      <strong className="text-text-primary font-semibold font-mono">
                        The Engineering Problem:
                      </strong>{" "}
                      {project.problem}
                    </p>
                    <p className="">
                      <strong className="text-text-primary font-semibold font-mono">
                        Technical Implementation:
                      </strong>{" "}
                      {project.architecture}
                    </p>
                  </div>
                  <div className="space-y-1.5 text-xs font-mono text-text-secondary bg-bg-muted p-3 rounded-lg border border-border">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-0.5 text-[11px] font-mono rounded border ${techBadgeStyles}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-5 mt-5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
                  <button
                    className="px-3.5 py-1.5 rounded-lg bg-text-primary hover:bg-text-secondary text-bg-canvas text-xs font-mono font-medium transition-colors flex items-center gap-1.5 shadow-sm"
                    onClick={() => onOpenProject(project.id)}
                  >
                    <span className="">Architecture Deep Dive</span>
                    <span className="text-xs">→</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <a
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-bg-card border border-border hover:border-text-primary text-text-secondary hover:text-text-primary transition-colors shadow-sm"
                      href={project.github ?? undefined}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-accent/10 border border-accent/30 hover:border-accent text-accent font-medium transition-colors"
                      href={project.demo ?? undefined}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};