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
  { href: "https://github.com/alexrivera", label: "github.com/alexrivera", icon: "github" },
  { href: "https://linkedin.com/in/alexrivera-cs", label: "linkedin.com/in/alexrivera-cs", icon: "linkedin" },
  { href: "mailto:alex.rivera.dev@gmail.com", label: "alex.rivera.dev@gmail.com", icon: "email" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:alex.rivera.dev@gmail.com",
    icon: "mail",
    description: "alex.rivera.dev@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexrivera-cs",
    icon: "linkedin",
    description: "linkedin.com/in/alexrivera-cs",
  },
  {
    label: "GitHub",
    href: "https://github.com/alexrivera",
    icon: "github",
    description: "github.com/alexrivera",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "scalecloud",
    title: "Software Engineering Intern",
    company: "ScaleCloud Infrastructure Labs",
    location: "San Francisco, CA",
    period: "June 2024 — August 2024",
    highlights: [
      "Designed and deployed an automated telemetry ingestion microservice in Go and PostgreSQL processing over 1.2 million log events/day from edge nodes.",
      "Optimized SQL analytical queries by indexing partition tables and restructuring joining logic, decreasing 95th percentile dashboard query latency from 840ms to 92ms.",
      "Engineered robust rate-limiting middleware using Redis token bucket algorithms to protect internal endpoints against denial-of-service traffic spikes.",
      "Authored comprehensive unit and integration test suites with 89% coverage and integrated them into GitHub Actions CI/CD pipelines.",
    ],
    technologies: ["Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    type: "internship",
  },
  {
    id: "vanguard",
    title: "Full-Stack Developer Intern",
    company: "Vanguard Financial Analytics",
    location: "Remote",
    period: "June 2023 — August 2023",
    highlights: [
      "Built client-facing portfolio rebalancing views using React, TypeScript, and Tailwind CSS, serving 14,000+ active retail investors.",
      "Integrated RESTful microservices with Node.js / Express and structured JWT-based role-based access control (RBAC) with strict CSRF protection.",
      "Collaborated with senior QA and product managers to resolve 40+ high-priority frontend regression tickets prior to the Q3 production release.",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Express", "REST APIs"],
    type: "internship",
  },
  {
    id: "ta-csu",
    title: "Undergraduate Teaching Assistant: Data Structures & Algorithms",
    company: "Department of Computer Science • CSU",
    location: "",
    period: "January 2024 — May 2024",
    highlights: [
      "Led weekly discussion labs and office hours for 85+ students, explaining graph traversals (BFS/DFS, Dijkstra), tree rebalancing, and asymptotic runtime complexity.",
      "Authored automated autograding scripts in Python to evaluate student submissions for algorithmic correctness and memory safety.",
    ],
    technologies: ["Python", "Data Structures", "Algorithms"],
    type: "teaching",
  },
];

export const projects: Project[] = [
  {
    id: "nexusrag",
    category: "DISTRIBUTED AI & RAG ARCHITECTURE",
    title: "NexusRAG: Distributed Enterprise Knowledge Agent",
    subtitle: "High-Throughput Retrieval-Augmented Generation Platform with Citation Verification",
    description: "Built an asynchronous pipeline in FastAPI and Python leveraging pgvector (PostgreSQL) for HNSW indexing, OpenAI embeddings, and LangChain orchestration. Implemented hybrid reciprocal rank fusion (BM25 lexical + semantic dense vectors) delivering sub-250ms query responses.",
    problem: "Enterprise documentation queries suffered from high hallucinations and slow semantic retrieval across millions of dense technical PDF tokens. Traditional dense embeddings alone fail on exact keyword lookups like part numbers and error codes.",
    architecture: "Client Request → FastAPI Gateway → Hybrid Vector + Lexical Search (pgvector) → Citation Extractor → Claude/OpenAI SSE Stream → Client",
    challenges: [
      "Latency Spikes: Mitigated by implementing token caching with Redis and async chunk parallelization via Celery.",
      "Context Window Saturation: Implemented sliding window semantic chunking with 15% overlap and token budgeting.",
    ],
    stack: "Python 3.11, FastAPI, PostgreSQL + pgvector, LangChain, Redis, Docker, Server-Sent Events",
    github: "https://github.com/alexrivera/nexus-rag-engine",
    demo: "https://demo-service.com",
    featured: true,
    metrics: [
      { label: "Median Query Time", value: "185ms" },
      { label: "Indexing Throughput", value: "1,200 chunks/min" },
      { label: "Citation Precision", value: "96.4%" },
    ],
  },
  {
    id: "kitequeue",
    category: "DISTRIBUTED SYSTEMS & CONCURRENCY",
    title: "KiteQueue: Distributed Task & Worker Engine",
    subtitle: "Lightweight distributed priority job queue in Go with at-least-once delivery guarantees",
    description: "Built priority worker pool with heartbeats, dead-letter re-routing, and exponential backoffs capable of 50,000 tasks/second.",
    problem: "Heavy background workloads (such as image transformation, email batching, and analytics aggregations) need reliable asynchronous dispatching without dropping messages when individual compute workers crash.",
    architecture: "Producer Nodes → Redis Streams (Priority Buckets) → Go Worker Goroutines with Lease Locking → Dead-Letter Routing",
    challenges: [
      "At-Least-Once Delivery: Heartbeat mechanisms track active worker goroutines. If a heartbeat expires, the unacknowledged job is automatically recycled.",
      "Dead Letter Queue (DLQ): Exponential backoff with jitter prevents thundering herd problems on failing external APIs.",
      "Throughput: Verified sustained throughput of 50,000 tasks/second on moderate hardware.",
    ],
    stack: "Go (Golang 1.22), Redis 7, gRPC, Protocol Buffers, Docker",
    github: "https://github.com/alexrivera/kite-queue-go",
    demo: "https://demo-service.com",
    featured: false,
  },
  {
    id: "pulseapi",
    category: "FULL-STACK PLATFORM & DEVELOPER TOOLS",
    title: "PulseAPI: Schema Breaking-Change Monitor",
    subtitle: "Full-stack developer platform scanning GraphQL & OpenAPI endpoints for breaking changes",
    description: "Full-stack developer platform that continuously scans GraphQL and OpenAPI endpoints for breaking schema changes, mocking synthetic payloads and issuing Slack webhooks.",
    problem: "Fast-moving engineering teams frequently introduce unintended breaking API changes in staging and production environments, leading to costly runtime client failures.",
    architecture: "CI Trigger / Ingestion Webhook → AST Parser & Tree Differ → Mutation Detector → Notification Dispatcher (Slack / Discord)",
    challenges: [
      "Interactive visual diff tree with side-by-side highlighting.",
      "Multi-tenant organizational accounts with granular API token generation.",
      "Slack and Discord automated webhook integrations.",
    ],
    stack: "TypeScript, React, Node.js, Express, PostgreSQL, Tailwind CSS, Jest",
    github: "https://github.com/alexrivera/pulse-api-monitor",
    demo: "https://demo-service.com",
    featured: false,
  },
  {
    id: "vectoreval",
    category: "AI INFRASTRUCTURE & BENCHMARKING",
    title: "VectorBench: Embedding Model Profiler",
    subtitle: "Empirical evaluation harness comparing cosine distance vs inner product performance",
    description: "Empirical evaluation harness comparing cosine distance vs inner product performance across 8 open-source embedding models on legal and biomedical text corpuses.",
    problem: "AI engineering teams often select embedding models purely based on leaderboard scores without profiling latency, memory footprint, and dimension costs on production hardware.",
    architecture: "Dataset Generator → Batch Embedding Engine (PyTorch) → Index Stress Tester (ChromaDB) → Statistical Reporter",
    challenges: [
      "Memory usage vs recall curve automated visualization.",
      "Automated dataset synthetic augmentation for legal and medical edge vocabularies.",
      "Asynchronous FastAPI benchmarking endpoints.",
    ],
    stack: "Python 3.10, PyTorch, ChromaDB, Matplotlib/Seaborn, FastAPI",
    github: "https://github.com/alexrivera/vector-bench-profiler",
    demo: "https://demo-service.com",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Languages",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python 3",
      "Go (Golang)",
      "Java (Spring)",
      "SQL (ANSI/Postgres)",
      "C++ (Academic)",
    ],
  },
  {
    id: 2,
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful Architecture",
      "gRPC & Protobuf",
      "Server-Sent Events (SSE)",
      "JWT / OAuth 2.0",
    ],
  },
  {
    id: 3,
    name: "Databases & Caching",
    skills: [
      "PostgreSQL (Relational/Indexes)",
      "Redis (Pub/Sub & Caching)",
      "MongoDB",
      "pgvector",
      "Prisma / Drizzle ORM",
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
      "React 18",
      "Next.js / SSR",
      "Tailwind CSS",
      "Vite",
      "Zustand / TanStack Query",
      "Semantic & Accessible HTML (a11y)",
    ],
  },
  {
    id: 6,
    name: "Tools & DevOps",
    skills: [
      "Git / GitHub Workflows",
      "Docker & Multi-stage Builds",
      "Linux / Bash Scripting",
      "AWS (S3, EC2, Lambda)",
      "CI/CD GitHub Actions",
      "Nginx Reverse Proxy",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    degree: "B.S. in Computer Science",
    institution: "California State University, Long Beach",
    location: "",
    period: "Expected May 2025",
    gpa: "3.91/4.00 (Dean's Honor List)",
    honors: [],
    coursework: [
      "Distributed Systems",
      "Operating Systems",
      "Algorithms & Complexity",
      "Database Systems",
      "Computer Networks",
    ],
  },
];

export const heroData = {
  name: "Alex Rivera",
  tagline: "Building reliable software, scalable backend APIs, and production AI-powered systems.",
  description: "Final-year Computer Science Engineering student at California State University. Focused on engineering resilient distributed backends, robust full-stack web platforms, and retrieval-augmented (RAG) AI architectures using TypeScript, Python, PostgreSQL, and Go.",
  statusItems: [
    { label: "Graduation", value: "May 2025 (B.S. CS, Honors)" },
    { label: "Target Roles", value: "SWE • Full-Stack • Backend • AI/ML" },
    { label: "Primary Languages", value: "TypeScript, Python, Go, Java, SQL" },
    { label: "Core Stack", value: "React, Node/FastAPI, Postgres, Docker" },
    { label: "Location / Auth", value: "US Citizen • San Francisco / Remote" },
  ],
  systemMetrics: {
    load: "0.14",
    testCoverage: "88.4%",
    readiness: "Ready for summer/fall 2025 full-time software engineering roles.",
  },
};

export const credibilityStats = [
  { label: "ACADEMIC", value: "B.S. CS '25 (3.9 GPA)" },
  { label: "EXPERIENCE", value: "2 SWE Internships" },
  { label: "PRODUCTION APPS", value: "100K+ Req/Day Handled" },
  { label: "SYSTEM FOCUS", value: "Distributed & RAG AI" },
];

export const aboutData = {
  headline: "Engineering with pragmatism, rigor, and depth.",
  paragraphs: [
    "I am a software engineer graduating in May 2025 with hands-on experience building web systems that need to be both reliable under load and clean to maintain. Rather than viewing engineering solely as writing code, I treat it as designing end-to-end solutions that solve tangible business problems.",
    "During my internships at cloud infrastructure and fintech companies, I owned production API endpoints, optimized complex database queries, and implemented LLM-driven pipelines with strict latency guarantees.",
  ],
  coreDomains: [
    "Distributed Backend Services",
    "Full-Stack Web Platforms",
    "RAG & Vector Pipeline AI",
    "Schema Design & Caching",
  ],
  values: [
    {
      title: "Understand Foundations Over Black Boxes",
      description: "I don't just import packages blindly; I examine how query planners work, how network protocols handle handshakes, and why memory leaks occur in Node/V8 runtimes.",
      highlight: true,
    },
    {
      title: "Resilience, Observability & Testing",
      description: "Code isn't finished when it works on localhost. I structure codebases with unit/integration testing (Jest, PyTest), structured logging, and idempotent API contracts.",
      highlight: false,
    },
    {
      title: "Fast Feedback & Shippable Iteration",
      description: "I favor building minimum viable architectures that deploy quickly, gather real metrics, and scale iteratively based on empirical bottlenecks rather than premature speculation.",
      highlight: false,
    },
    {
      title: "Empathetic Team Collaboration",
      description: "Clear PR writeups, thorough documentation, constructive code reviews, and communicative asynchronous updates are non-negotiable standards in my workflow.",
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