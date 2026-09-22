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
  { href: "mailto:bhariyashivam@gmail.com", label: "bhariyashivam@gmail.com", icon: "email" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:bhariyashivam@gmail.com",
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
    id: "scalecloud",
    title: "Software Engineering Intern",
    company: "Wyreflow Technologies",
    location: "Bhopal, M.P",
    period: "December 2024 — February 2025",
    highlights: [
      "Designed and deployed an automated telemetry ingestion microservice in Go and PostgreSQL processing over 1.2 million log events/day from edge nodes.",
      "Optimized SQL analytical queries by indexing partition tables and restructuring joining logic, decreasing 95th percentile dashboard query latency from 840ms to 92ms.",
      "Engineered robust rate-limiting middleware using Redis token bucket algorithms to protect internal endpoints against denial-of-service traffic spikes.",
      "Authored comprehensive unit and integration test suites with 89% coverage and integrated them into GitHub Actions CI/CD pipelines.",
    ],
    technologies: ["React", "HTML", "CSS", "Bootstrap", "Tailwind", "GitHub"],
    type: "internship",
  }
];

export const projects: Project[] = [
  {
    id: "nexusrag",
    category: "AI & Applied ML",
    title: "NexusRAG: Distributed Enterprise Knowledge Agent",
    subtitle: "High-Throughput RAG Engine with Reciprocal Rank Fusion & Citation Verification",
    description: "Built an asynchronous pipeline in FastAPI and Python leveraging pgvector (PostgreSQL) for HNSW indexing, OpenAI embeddings, and LangChain orchestration. Implemented hybrid reciprocal rank fusion (BM25 lexical + semantic dense vectors) delivering sub-250ms query responses.",
    problem: "Enterprise queries suffered high hallucinations and slow semantic retrieval across millions of dense technical PDF tokens.",
    architecture: "Built an async FastAPI pipeline using pgvector for HNSW indexing, reciprocal rank fusion, and Celery background workers for continuous re-indexing.",
    challenges: [
      "Hybrid lexical BM25 + dense vector HNSW search",
      "1,200 chunks/min indexing throughput with 96.4% factual precision",
      "Streaming SSE response tokenizer with sliding-window caching",
    ],
    stack: "Python 3.11, FastAPI, pgvector, LangChain, Redis",
    github: "https://github.com/alexrivera/nexus-rag-engine",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "Median Query Time", value: "185ms" },
      { label: "Indexing Throughput", value: "1,200 chunks/min" },
      { label: "Citation Precision", value: "96.4%" },
    ],
    filterCategory: "aiml",
    highlightMetric: "185ms Median Latency",
  },
  {
    id: "chronoskv",
    category: "Backend & Distributed Systems",
    title: "ChronosKV: Distributed LSM Key-Value Store",
    subtitle: "Log-Structured Merge-Tree Engine with Write-Ahead Logging & SSTable Compaction",
    description: "Engineered an embedded LSM-tree in Go utilizing concurrent MemTable skiplists, immutable WAL flushes, and tiered background SSTable compaction.",
    problem: "Traditional B-tree storage engines experienced severe disk I/O write amplification under continuous multi-gigabyte ingestion workloads.",
    architecture: "Engineered an embedded LSM-tree in Go utilizing concurrent MemTable skiplists, immutable WAL flushes, and tiered background SSTable compaction.",
    challenges: [
      "1.2ms p99 write latency under heavy concurrent load",
      "Bloom filter index pruning delivering <0.8ms point lookups",
      "Raft consensus integration for cluster leader election",
    ],
    stack: "Go (Golang), LSM-Tree, Raft, gRPC, Docker",
    github: "https://github.com/alexrivera/chronos-kv-store",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "p99 Write Latency", value: "1.2ms" },
      { label: "Point Lookup", value: "<0.8ms" },
      { label: "Sustained Writes", value: "120k/sec" },
    ],
    filterCategory: "backend",
    highlightMetric: "120k writes/sec Sustained",
  },
  {
    id: "aegisgateway",
    category: "Backend & Distributed Systems",
    title: "AegisGateway: Zero-Trust Reverse Proxy",
    subtitle: "Edge Reverse Proxy with Zero-Allocation Routing & Distributed Sliding Rate Limiting",
    description: "Developed a high-performance reverse proxy in Go featuring zero-copy byte buffers, dynamic mTLS certificate rotation, and token-bucket rate limits.",
    problem: "Upstream microservices suffered cascading outages due to uncontrolled ingress traffic surges and vulnerable, unauthenticated internal routing.",
    architecture: "Developed a high-performance reverse proxy in Go featuring zero-copy byte buffers, dynamic mTLS certificate rotation, and token-bucket rate limits.",
    challenges: [
      "Zero-allocation hot path routing with sync.Pool buffer reuse",
      "Sub-millisecond JWT cryptographic validation with Redis blocklists",
      "Prometheus exporter with granular latency histogram metrics",
    ],
    stack: "Go (Golang), mTLS, Redis, Prometheus, Docker",
    github: "https://github.com/alexrivera/aegis-gateway-proxy",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "Throughput", value: "90k req/sec" },
      { label: "JWT Validation", value: "<1ms" },
      { label: "Memory Allocation", value: "Zero-copy" },
    ],
    filterCategory: "backend",
    highlightMetric: "90k req/sec Throughput",
  },
  {
    id: "synapseflow",
    category: "Full-Stack & DevTools",
    title: "SynapseFlow: Collaborative DAG Workflow Engine",
    subtitle: "Real-Time Visual Pipeline Orchestrator with CRDT Multiplayer State Synchronization",
    description: "Created an interactive node-graph canvas powered by React Flow and Yjs CRDTs over WebSockets with Node.js and Redis Pub/Sub coordination.",
    problem: "Complex distributed workflows lacked interactive visualization and concurrent multi-developer editing without corrupting DAG node states.",
    architecture: "Created an interactive node-graph canvas powered by React Flow and Yjs CRDTs over WebSockets with Node.js and Redis Pub/Sub coordination.",
    challenges: [
      "Conflict-free multiplayer canvas maintaining 60 FPS viewport rendering",
      "Sub-45ms state broadcast across distributed browser clients",
      "Topological sorting DAG executor with real-time SSE step telemetry",
    ],
    stack: "TypeScript, React Flow, Yjs (CRDT), WebSockets, Tailwind CSS",
    github: "https://github.com/alexrivera/synapse-flow",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "Canvas FPS", value: "60 FPS" },
      { label: "Sync Latency", value: "<45ms" },
      { label: "Concurrent Users", value: "50+" },
    ],
    filterCategory: "fullstack",
    highlightMetric: "60 FPS Canvas & <45ms Sync",
  },
  {
    id: "kitequeue",
    category: "Backend & Distributed Systems",
    title: "KiteQueue: Distributed Task & Worker Engine",
    subtitle: "Fault-Tolerant Priority Queue with At-Least-Once Guarantees & Leader Election",
    description: "Built priority worker pool with heartbeats, dead-letter re-routing, and exponential backoffs capable of 50,000 tasks/second.",
    problem: "Heavy asynchronous workloads (image processing, data exports) required resilient queuing without message loss when worker instances crashed.",
    architecture: "Built a Golang priority task queue with Redis streams, atomic Lua pop scripts, exponential backoff DLQs, and heartbeat worker recycling.",
    challenges: [
      "At-least-once delivery guarantees with auto-recycling expired heartbeats",
      "Sustained benchmarked throughput of 50,000 tasks/second",
      "Dead-letter queue with exponential backoff jitter against thundering herds",
    ],
    stack: "Go (Golang), Redis 7, gRPC, Protobuf, Docker",
    github: "https://github.com/alexrivera/kite-queue-go",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "Throughput", value: "50k tasks/sec" },
      { label: "Delivery", value: "At-least-once" },
      { label: "DLQ Backoff", value: "Exponential + jitter" },
    ],
    filterCategory: "backend",
    highlightMetric: "50k tasks/sec Ingest",
  },
  {
    id: "pulseapi",
    category: "Full-Stack & DevTools",
    title: "PulseAPI: Schema Monitor & Testing Hub",
    subtitle: "Continuous OpenAPI/GraphQL Breaking Change Detector with Automated CI Mock Validation",
    description: "Full-stack developer platform that continuously scans GraphQL and OpenAPI endpoints for breaking schema changes, mocking synthetic payloads and issuing Slack webhooks.",
    problem: "Fast-shipping teams inadvertently pushed breaking schema changes, causing staging client breaks and broken mobile payloads.",
    architecture: "Developed a TypeScript SaaS platform parsing OpenAPI AST trees to spot breaking type changes before code merges into main.",
    challenges: [
      "Automated breaking change diff detection with visual side-by-side AST trees",
      "Multi-tenant workspace RBAC & API keys for enterprise environments",
      "GitHub PR checks & webhook integrations for Slack and Discord alerts",
    ],
    stack: "React 18, Node.js, TypeScript, PostgreSQL, Tailwind CSS",
    github: "https://github.com/alexrivera/pulse-api-monitor",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "Schema Diff Accuracy", value: "100%" },
      { label: "Tenant Isolation", value: "Full RBAC" },
      { label: "Integrations", value: "GitHub, Slack, Discord" },
    ],
    filterCategory: "fullstack",
    highlightMetric: "100% Schema Diff Accuracy",
  },
  {
    id: "vectoreval",
    category: "AI & Applied ML",
    title: "VectorBench: Embedding Model Profiler",
    subtitle: "Empirical Distance Metric & Latency Profiler for Production Vector Workloads",
    description: "Empirical evaluation harness comparing cosine distance vs inner product performance across 8 open-source embedding models on legal and biomedical text corpuses.",
    problem: "Teams selected embedding models blindly without quantifying the memory footprint, query latency, and dimension overhead in production.",
    architecture: "Constructed an automated evaluation harness comparing Cosine vs Inner Product accuracy and memory overhead across 8 embedding models.",
    challenges: [
      "Memory usage vs recall curve visualization across synthetic datasets",
      "Multi-threaded batch embeddings with PyTorch CUDA fallback",
      "Automated benchmark report generator in HTML/Markdown formats",
    ],
    stack: "Python 3.10, PyTorch, ChromaDB, FastAPI, NumPy",
    github: "https://github.com/alexrivera/vector-bench-profiler",
    demo: "https://demo-service.com",
    featured: false,
    metrics: [
      { label: "Models Benchmarked", value: "8" },
      { label: "Metrics", value: "Latency, Memory, Recall" },
      { label: "Report Formats", value: "HTML, Markdown" },
    ],
    filterCategory: "aiml",
    highlightMetric: "8 Models Benchmarked",
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
  { label: "ACADEMIC", value: "B.Tech CSE '26 (7.2 GPA)" },
  { label: "EXPERIENCE", value: "1 SWE Internships" },
  { label: "PRODUCTION APPS", value: "100K+ Req/Day Handled" },
  { label: "SYSTEM FOCUS", value: "Distributed & RAG AI" },
];

export const aboutData = {
  headline: "Engineering with pragmatism, rigor, and depth.",
  paragraphs: [
    "I am a software engineer graduated in May 2026 with hands-on experience building web systems that need to be both reliable under load and clean to maintain. Rather than viewing engineering solely as writing code, I treat it as designing end-to-end solutions that solve tangible business problems.",
    "During my internship, Contributed to production-ready web applications, focusing on responsive UI development and team-based engineering.",
  ],
  coreDomains: [
    "Frontend Architecture",
    "Full-Stack Web Platforms",
    "RAG & Vector Pipeline AI",
    "Distributed Backend Services",
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