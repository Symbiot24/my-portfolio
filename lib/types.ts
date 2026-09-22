// lib/types.ts

export type Theme = "dark" | "light";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: "github" | "linkedin" | "email";
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
  type: "internship" | "full-time" | "research" | "teaching";
}

export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  architecture: string;
  challenges: string[];
  stack: string;
  github: string | null;
  demo: string | null;
  featured?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
  filterCategory?: "backend" | "aiml" | "fullstack";
  highlightMetric?: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "linkedin" | "github";
  description: string;
}