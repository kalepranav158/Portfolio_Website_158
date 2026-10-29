export type SkillLevel = "working" | "familiar" | "exploring";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillSubsystem {
  id: string;
  title: string;
  subsystemCode: string;
  description: string;
  accent: "emerald" | "amber" | "cyan" | "lime";
  skills: SkillItem[];
}

export interface TimelineEntry {
  id: string;
  kind: "education" | "experience" | "achievement";
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  published: boolean;
  accent: "emerald" | "amber" | "cyan";
}

export const SKILL_SUBSYSTEMS: SkillSubsystem[] = [
  {
    id: "ai-eng",
    title: "AI ENGINEERING & AGENTIC WORKFLOWS",
    subsystemCode: "SUB-01",
    description:
      "Autonomous reasoning cycles, adaptive retrieval pipelines, LLM routing, and structured model evaluation.",
    accent: "emerald",
    skills: [
      { name: "Large Language Models (LLMs)", level: "working" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "working" },
      { name: "Agentic AI & Workflows", level: "working" },
      { name: "LangChain & LangGraph", level: "working" },
      { name: "Prompt Engineering & Tool Calling", level: "working" },
      { name: "Model Evaluation & Benchmarking", level: "working" },
      { name: "Hybrid Retrieval Optimization", level: "working" },
      { name: "Self-Correction & Guardrails", level: "familiar" },
    ],
  },
  {
    id: "ml-cv",
    title: "MACHINE LEARNING & COMPUTER VISION",
    subsystemCode: "SUB-02",
    description:
      "Statistical modeling, acoustic time-series alignment, and computer vision defect detection.",
    accent: "cyan",
    skills: [
      { name: "Python", level: "working" },
      { name: "NumPy & Pandas", level: "working" },
      { name: "Scikit-Learn", level: "working" },
      { name: "PyTorch", level: "familiar" },
      { name: "Computer Vision (YOLO)", level: "familiar" },
      { name: "Dynamic Time Warping (DTW)", level: "working" },
      { name: "Classification & Regression", level: "working" },
      { name: "Acoustic Signal Processing", level: "familiar" },
    ],
  },
  {
    id: "backend",
    title: "BACKEND & DISTRIBUTED SYSTEMS",
    subsystemCode: "SUB-03",
    description:
      "High-throughput REST APIs, asynchronous ASGI microservices, and reliable tabular ETL pipelines.",
    accent: "amber",
    skills: [
      { name: "FastAPI", level: "working" },
      { name: "Django & Flask", level: "working" },
      { name: "RESTful API Design", level: "working" },
      { name: "Java", level: "familiar" },
      { name: "Node.js & Express", level: "familiar" },
      { name: "Streamlit", level: "working" },
      { name: "Pydantic Validation", level: "working" },
      { name: "Server-Sent Events (SSE)", level: "working" },
    ],
  },
  {
    id: "infra",
    title: "DATABASES & VECTOR INFRASTRUCTURE",
    subsystemCode: "SUB-04",
    description:
      "High-dimensional vector indexing, relational persistence, and containerized development workflows.",
    accent: "lime",
    skills: [
      { name: "FAISS Vector Search", level: "working" },
      { name: "ChromaDB", level: "familiar" },
      { name: "PostgreSQL & MySQL", level: "working" },
      { name: "MongoDB", level: "familiar" },
      { name: "Git & GitHub CI/CD", level: "working" },
      { name: "Docker", level: "familiar" },
      { name: "Linux / Shell Scripting", level: "working" },
      { name: "Cloud Deployment (Vercel/Render)", level: "familiar" },
    ],
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "edu-rscoe",
    kind: "education",
    title: "B.Tech in Computer Engineering",
    organization: "JSPM's Rajarshi Shahu College of Engineering (RSCOE)",
    period: "2023 — Present",
    location: "Tathawade, Pune, India",
    description: [
      "Rigorous undergraduate engineering curriculum with an active specialization in Artificial Intelligence, Distributed Systems, and Data Structures.",
      "Leading technical exploration in autonomous agentic workflows, Self-RAG systems, and multimodal acoustic evaluation.",
      "Collaborating on real-world engineering projects addressing document automation and civil infrastructure monitoring.",
    ],
    published: true,
    accent: "emerald",
  },
  {
    id: "achieve-rag-benchmark",
    kind: "achievement",
    title: "Self-RAG Empirical Evaluation Milestone",
    organization: "Independent Research",
    period: "2024",
    location: "Pune, India",
    description: [
      "Designed and evaluated a 24-test scenario suite benchmarking autonomous routing and relevance grading in LangGraph.",
      "Achieved a 95.83% (23/24) intent routing precision in historical benchmark testing.",
      "Documented latency trade-offs (114.09 s average benchmark cycle) to formulate lightweight inference gate architectures.",
    ],
    published: true,
    accent: "amber",
  },
];
