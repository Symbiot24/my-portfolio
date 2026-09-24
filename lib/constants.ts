import type { ExperienceItem, Project, SkillCategory, EducationItem, SocialLink, NavLink, ContactLink } from "./types";

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/Symbiot24", label: "github.com/Symbiot24", icon: "github" },
  { href: "https://linkedin.com/in/utkarsh-bhariya-2a8b08263/", label: "linkedin.com/in/utkarsh-bhariya", icon: "linkedin" },
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=bhariyashivam@gmail.com&su=Contact%20from%20Portfolio", label: "bhariyashivam@gmail.com", icon: "email" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=bhariyashivam@gmail.com&su=Contact%20from%20Portfolio",
    icon: "mail",
    description: "bhariyashivam@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/utkarsh-bhariya-2a8b08263/",
    icon: "linkedin",
    description: "https://linkedin.com/in/utkarsh-bhariya-2a8b08263/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Symbiot24",
    icon: "github",
    description: "github.com/Symbiot24",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "wyreflow",
    title: "Frontend Developer Intern",
    company: "Wyreflow Technologies",
    location: "Bhopal, M.P.",
    period: "December 2024 — February 2025",
    highlights: [
      "Developed an online test portal and administrative dashboard based on Figma designs using React and Tailwind CSS.",
      "Built reusable and responsive UI components while maintaining consistent layouts and user interactions across the application.",
      "Collaborated with developers using Git and GitHub, contributing to feature development, debugging, and code integration.",
      "Worked with backend APIs and Express.js to integrate frontend functionality with application data and workflows.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
    type: "internship",
  },
];

export const projects: Project[] = [
  {
  id: "ai-doctor",
  category: "AI & Applied ML",
  title: "AI Doctor Receptionist",
  subtitle: "AI-Powered Telegram Appointment Assistant with Stateful Scheduling & Intent Routing",
  description: "Built a conversational AI receptionist using FastAPI, Groq LLM, PostgreSQL/Neon, and Telegram Bot API to handle appointment booking, cancellation, rescheduling, and general clinic queries through natural language.",
  problem: "Clinic appointment workflows require repetitive manual coordination, making booking, cancellation, and rescheduling time-consuming for both patients and reception staff.",
  architecture: "Built a FastAPI backend with LLM-powered intent routing, stateful conversation handling, SQLAlchemy-based PostgreSQL persistence, and Telegram Bot API integration for the patient-facing interface.",
  challenges: [
    "Intent routing across booking, cancellation, rescheduling, and general queries",
    "Maintaining conversation state while collecting patient and appointment details",
    "Persisting appointment records with status-based booking workflows",
  ],
  stack: "Python, FastAPI, Groq, PostgreSQL, Neon, SQLAlchemy, Telegram Bot API",
  github: "https://github.com/Symbiot24/ai-doctor-receptionist",
  demo: "https://clinic-ai-30.vercel.app",
  featured: true,
  metrics: [
    { label: "Interface", value: "Telegram Bot" },
    { label: "Database", value: "PostgreSQL / Neon" },
    { label: "Deployment", value: "Northflank" },
  ],
  filterCategory: "aiml",
  highlightMetric: "AI-Powered Appointment Automation",
},
{
  id: "pos-system",
  category: "Full-Stack & Backend",
  title: "Multi-Tenant POS System",
  subtitle: "Full-Stack Point-of-Sale Platform with JWT Authentication & Tenant Isolation",
  description: "Built a full-stack point-of-sale platform using Spring Boot, React, PostgreSQL, and JWT authentication with shop-level tenant isolation and product management through a responsive web dashboard.",
  problem: "Small businesses need a centralized platform for managing shop data and products while ensuring that records remain isolated between different business tenants.",
  architecture: "Built a Spring Boot REST API with JWT authentication, tenant-aware request handling, PostgreSQL persistence, and a React/Vite frontend with Tailwind CSS.",
  challenges: [
    "Implementing tenant isolation using shopId and request-level tenant context",
    "Integrating JWT authentication across the React frontend and Spring Boot backend",
    "Deploying a containerized Spring Boot API with a separate Vercel frontend",
  ],
  stack: "Java, Spring Boot, React, Vite, Tailwind CSS, PostgreSQL, JWT",
  github: "https://github.com/Symbiot24/pos-frontend",
  demo: "https://pos-multi-tenant.vercel.app",
  featured: true,
  metrics: [
    { label: "Architecture", value: "Multi-Tenant" },
    { label: "Authentication", value: "JWT" },
    { label: "Frontend", value: "React + Vite" },
  ],
  filterCategory: "fullstack",
  highlightMetric: "Multi-Tenant POS Architecture",
},
{
  id: "mindecho",
  category: "Full-Stack & AI",
  title: "MindEcho",
  subtitle: "AI-Assisted Mental Health Journal with Mood Tracking & Conversational Support",
  description: "Built a MERN-based journaling platform that combines mood tracking, private journal entries, and Gemini-powered conversational support for topics including stress, anxiety, depression, and mindfulness.",
  problem: "Users often document their experiences without a structured way to track emotional patterns or interact with their personal reflections through a conversational interface.",
  architecture: "Built a React frontend with an Express/Node.js backend, MongoDB persistence, JWT authentication, bcrypt password hashing, and Gemini API integration for AI-powered conversations.",
  challenges: [
    "Securing user authentication and isolating individual journal entries",
    "Connecting AI conversations with mood and journal context",
    "Designing a structured mood tracking and journaling workflow",
  ],
  stack: "React, Node.js, Express.js, MongoDB, Gemini API, JWT, bcrypt",
  github: "https://github.com/Symbiot24/journal-backend",
  demo: "https://mindecho30.vercel.app/",
  featured: false,
  metrics: [
    { label: "Architecture", value: "MERN" },
    { label: "AI Integration", value: "Gemini API" },
    { label: "Authentication", value: "JWT + bcrypt" },
  ],
  filterCategory: "fullstack",
  highlightMetric: "AI-Assisted Personal Journaling",
},
{
  id: "ai-pdf-rag",
  category: "AI & Applied ML",
  title: "AI PDF Research Assistant",
  subtitle: "Document-Grounded RAG System for Semantic Search & Conversational Q&A",
  description: "Built a full-stack RAG application using FastAPI, React, and PostgreSQL/Neon to ingest PDF documents, chunk content, generate embeddings, retrieve relevant context, and provide document-grounded conversational answers.",
  problem: "Large technical documents are difficult to navigate manually when users need contextual answers across hundreds of pages rather than isolated keyword matches.",
  architecture: "Built a document ingestion and retrieval pipeline with FastAPI, PDF processing, semantic embeddings, PostgreSQL persistence, and a React-based conversational interface for document-aware Q&A.",
  challenges: [
    "Processing and chunking large PDF documents for effective retrieval",
    "Building persistent document-aware conversational context",
    "Designing retrieval-backed responses grounded in uploaded documents",
  ],
  stack: "Python, FastAPI, React, PostgreSQL, Neon, RAG, Embeddings",
  github: "",
  demo: "",
  featured: true,
  metrics: [
    { label: "Architecture", value: "RAG Pipeline" },
    { label: "Documents", value: "Multi-Document Ready" },
    { label: "Interface", value: "Conversational Q&A" },
  ],
  filterCategory: "aiml",
  highlightMetric: "Document-Grounded AI Search",
},
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "Python",
      "SQL"
    ],
  },
  {
    id: 2,
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "PostgreSQL",
      "MongoDB",
      "Neon",
      "API Integration"

    ],
  },
  {
    id: 3,
    name: "Databases & Caching",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neon",
      "Database Design",
      "SQL",
      "Schema Design",
      "Query Optimization",
      "ACID Transactions",
    ],
  },
  {
    id: 4,
    name: "AI & Applied ML",
    skills: [
      "RAG Pipelines",
      "Vector Embeddings (HNSW)",
      "LangChain & LlamaIndex",
      "OpenAI & Claude APIs",
      "Prompt Engineering & JSON Schemas",
      "HuggingFace Transformers",
    ],
  },
  {
    id: 5,
    name: "Frontend Engineering",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Shadcn UI",
      "React Router",
      "Responsive Design"
    ],
  },
  {
    id: 6,
    name: "Tools & DevOps",
    skills: [
      "Git / GitHub Workflows",
      "Docker & Multi-stage Builds",
      "Postman",
      "Vercel",
      "Render",
      "Northflank",
      "GitHub Actions",
      "REST API Testing",
      "Environment Configuration"
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "University Institute of Technology",
    location: "Bhopal",
    period: "2022 - 2026",
    gpa: "7.2/10",
    honors: [],
    coursework: [
      "Object-Oriented Programming",
      "Operating Systems",
      "Data Structures and Algorithms",
      "Database Management System",
      "Computer Networks",
    ],
  },
];

export const heroData = {
  name: "Utkarsh Bhariya",
  tagline: "Building reliable software, scalable backend APIs, and production AI-powered systems.",
  description: "Under Graduate student from University Institute of Technology, Bhopal. Focused on engineering resilient distributed backends, robust full-stack web platforms, and retrieval-augmented (RAG) AI architectures using TypeScript, Python, PostgreSQL, and Go.",
  statusItems: [
    { label: "Graduation", value: "May 2026 (B.Tech CSE)" },
    { label: "Target Roles", value: "SWE • Full-Stack • Backend • AI/ML" },
    { label: "Primary Languages", value: "Java, SQL, JavaScript, Python" },
    { label: "Core Stack", value: "React, Node/Express, Git, Docker, Postgres" },
    { label: "Location", value: "Indian Citizen • Jabalpur, M.P / Remote" },
  ],
  systemMetrics: {
    load: "0.14",
    testCoverage: "88.4%",
    readiness: "Ready for full-time software engineering roles.",
  },
  resumeUrl: "/resume.pdf",
};

export const credibilityStats = [
{ label: "ACADEMIC", value: "B.Tech CSE '26" },
{ label: "EXPERIENCE", value: "1 SWE Internships" },
{ label: "PRODUCTION APPS", value: "Deployed Full-Stack & AI Builds" },
{ label: "SYSTEM FOCUS", value: "AI, Backend & RAG Systems" },
];

export const aboutData = {
  headline: "Building practical software with clarity, curiosity, and engineering discipline.",
  paragraphs: [
    "I am an under-graduate Computer Science Engineering student focused on building practical software across AI, backend, and full-stack development. I enjoy taking an idea from its underlying problem to a working system—designing the APIs, data flow, authentication, AI integrations, and user experience that make the product actually useful.",
    "Through internships and independent projects, I have worked with React, Node.js, Express.js, Python, FastAPI, Spring Boot, PostgreSQL, MongoDB, and modern AI APIs. My approach is simple: understand the fundamentals, build hands-on, learn from what breaks, and keep improving the system until the engineering decisions make sense."
  ],
  coreDomains: [
    "Frontend Architecture",
    "Full-Stack Web Platforms",
    "Database & System Architecture",
    "Distributed Backend Services",
  ],
  values: [
{
title: "Understand Before Abstracting",
description: "I prefer understanding the underlying flow before relying heavily on abstractions—whether that means tracing an API request, understanding how data moves through a system, or knowing what an AI pipeline is actually doing.",
highlight: true,
},
{
title: "Build for Real Use",
description: "A project is more than a working demo. I focus on authentication, data persistence, validation, error handling, deployment, and maintainability so that what I build can function beyond localhost.",
highlight: false,
},
{
title: "Learn Through Implementation",
description: "I learn best by building. When I encounter an unfamiliar technology, I combine documentation, experimentation, debugging, and hands-on implementation to turn the concept into something I can actually reason about.",
highlight: false,
},
{
title: "Keep Improving the System",
description: "I value iterative engineering: ship a meaningful version, identify the real bottlenecks, understand what can be improved, and evolve the architecture based on evidence rather than unnecessary complexity.",
highlight: false,
},
],
};

export const contactFormDefaults = {
  name: "",
  email: "",
  subject: "",
  message: "",
};