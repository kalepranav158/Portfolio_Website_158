# PRANAV KALE // SPARTAN COMMAND INTERFACE
### *Next-Gen Halo-Inspired AI Engineer Portfolio & Intelligent RAG Assistant*

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![LangChain](https://img.shields.io/badge/LangChain-Orchestration-1C3C3C?style=for-the-badge&logo=chainlink&logoColor=white)](https://www.langchain.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

---

## 🛰️ 1. Project Overview & Vision

This repository hosts the personal portfolio and interactive engineering platform for **Pranav Kale** — an **AI Engineer & Computer Engineering Student** at JSPM's Rajarshi Shahu College of Engineering, Pune.

Designed as an immersive, cinematic **UNSC/SPARTAN-inspired tactical command center**, the portfolio bridges military sci-fi aesthetics with modern AI engineering. Every project is presented as an advanced engineering mission file, accompanied by technical telemetry, architecture schematics, empirical evaluations, and an integrated real-time **Spartan Intelligence RAG Assistant**.

### Core Philosophy
* **Tactical Immersion Without Sacrificing Usability:** High-impact HUD elements, subtle scan lines, military olive surfaces, emerald telemetry indicators, and amber accents—engineered with strict adherence to Web Content Accessibility Guidelines (WCAG), responsive performance, and semantic HTML.
* **Grounded Engineering Authenticity:** Strictly verified metrics, transparent trade-offs, and empirical benchmarks. No fabricated numbers, fake production statistics, or exaggerated claims.
* **Real Full-Stack AI Integration:** Features **Spartan Intelligence**, a fully functional full-stack Retrieval-Augmented Generation (RAG) assistant running on FastAPI, FAISS, and LangChain/LangGraph, delivering grounded portfolio citations and system diagnostics.

---

## 🎨 2. Visual Identity & Design System

The visual language draws inspiration from tactical sci-fi heads-up displays (HUDs) and Spartan armor interfaces:

| Token / Layer | Hex Value | Application |
| :--- | :--- | :--- |
| **Deep Onyx / Canvas** | `#080B09` | Base dark viewport background with subtle scanline overlays |
| **Tactical Armor / Panels** | `#141D16` / `#1C281F` | Elevated cards, command modules, telemetry frames |
| **Military Olive Accent** | `#2D4031` | Borders, HUD separators, structural brackets |
| **Emerald HUD Active** | `#00FF9D` / `#10B981` | Online statuses, active routing nodes, primary metrics |
| **Amber / Gold Telemetry** | `#F59E0B` / `#D97706` | Tactical warnings, evaluation badges, highlights |
| **Neural Cyan** | `#06B6D4` / `#38BDF8` | AI neural net diagrams, vector retrieval highlights |
| **Command Text High** | `#F3F4F6` | Primary headlines, mission titles, telemetry readings |
| **Muted Technical Text** | `#9CA3AF` | Technical labels, timestamps, architecture metadata |

---

## 📂 3. Featured Missions (Projects)

### 1. 🛡️ Advanced Self-RAG System
* **Domain:** AI Engineering // Agentic Workflows // Adaptive Retrieval
* **Stack:** LangChain, LangGraph, FAISS Vector Store, Hybrid Retrieval, LLMs
* **Overview:** Advanced autonomous retrieval-augmented generation engine featuring dynamic query routing, document relevance grading, self-correction loops, and hallucination evaluation.
* **Empirical Benchmark:** Historical 24-test evaluation run demonstrated a router accuracy of **95.83% (23/24)** with an average latency of **114.09 seconds** in a comprehensive multi-step reasoning benchmark.

### 2. 🎵 VENORA AI — Flute Tutor
* **Domain:** Multimodal AI // Acoustic Evaluation // EdTech
* **Stack:** Google Gemini, LangChain, Retrieval-Augmented Generation, Dynamic Time Warping (DTW)
* **Overview:** Intelligent musical training assistant evaluating pitch, rhythm, and acoustic performance using Dynamic Time Warping comparisons paired with LLM-guided personalized feedback loops.

### 3. 📊 Smart Budget Management System
* **Domain:** Full-Stack Engineering // Data Extraction // Financial Analytics
* **Stack:** Django, Python, PDF Extraction Pipelines, PostgreSQL
* **Overview:** Automated statement parsing engine designed for financial document processing, transaction taxonomy categorization, and real-time cash flow intelligence.

### 4. 💧 Civic Water Infrastructure Monitoring
* **Domain:** Computer Vision // Geospatial AI // IoT Systems
* **Stack:** YOLO Computer Vision, FastAPI, NLP Complaint Analytics, Geospatial Mapping
* **Overview:** Multimodal municipal infrastructure platform under active research, integrating visual leakage severity assessment with citizen complaint triage and geospatial heatmaps.

---

## 🤖 4. Spartan Intelligence (Full-Stack RAG Assistant)

Integrated directly into the command terminal is **Spartan Intelligence**, a dedicated autonomous assistant trained exclusively on Pranav Kale’s technical portfolio documents, project architectures, and engineering case studies.

```
┌────────────────────────────────────────────────────────┐
│             PORTFOLIO FRONTEND (Next.js)               │
│     Tactical HUD Chat Modal // Streaming Markdown      │
└───────────────────────────┬────────────────────────────┘
                            │ POST /api/v1/chat
                            ▼
┌────────────────────────────────────────────────────────┐
│            SPARTAN BACKEND (Python FastAPI)            │
│  ├── Request Validation & Abuse Prevention (Pydantic)  │
│  ├── Ingestion & Vector Retrieval (FAISS / ChromaDB)   │
│  ├── LangChain / LangGraph Agentic Controller          │
│  └── Grounded Generation with Exact Provenance Links   │
└────────────────────────────────────────────────────────┘
```

* **Contract Endpoint:** `POST /api/v1/chat`
* **Health & Diagnostics:** `GET /api/v1/health`, `GET /api/v1/ready`
* **Zero Fabrication Guarantee:** Grounded strictly in validated portfolio context chunks with source attribution (`title`, `section`, `url`, `relevance_score`).
* **Security First:** Strict rate limiting, prompt injection defenses, sanitized markdown output, and server-side secret isolation.

---

## 🛠️ 5. Technical Stack

### Frontend Command Center
* **Framework:** Next.js (App Router, React 18+)
* **Language:** TypeScript (Strict typing)
* **Styling:** Tailwind CSS + Vanilla CSS tokens for scanline & HUD optics
* **Motion & Interactions:** Framer Motion / Motion for React + CSS hardware acceleration
* **Iconography & HUD:** Lucide React + custom SVG tactical glyphs
* **Typography:** Space Grotesk (Tactical Headings) + Inter (Technical Body)

### Backend AI Microservice (`ai-assistant`)
* **Framework:** FastAPI + Uvicorn (ASGI)
* **AI & Orchestration:** LangChain, LangGraph, Pydantic v2
* **Vector Embeddings & Search:** FAISS / ChromaDB
* **LLM Engine:** Configurable provider (Google Gemini / OpenAI / Local LLMs)
* **Deployment:** Docker, Container-ready, CORS-guarded

---

## 🏗️ 6. Repository Architecture

```text
Portfolio_Website_158/
├── overview.md                       # Single Source of Truth architecture specification
├── README.md                         # Project documentation & mission brief
├── portfolio/                        # Frontend application (Next.js)
│   ├── public/
│   │   ├── images/                   # Optimized Spartan hero artwork & mission captures
│   │   └── fonts/                    # Typography assets
│   ├── src/
│   │   ├── app/                      # Next.js App Router (pages, layout, globals)
│   │   ├── components/
│   │   │   ├── layout/               # Command nav, tactical telemetry strip, HUD footer
│   │   │   ├── hero/                 # Spartan figure, atmospheric canvas, CTA array
│   │   │   ├── projects/             # Mission dossiers, architecture cards, modal routes
│   │   │   ├── skills/               # Categorized engineering subsystem matrices
│   │   │   ├── assistant/            # Spartan Intelligence chat panel & telemetry widget
│   │   │   └── ui/                   # Angled buttons, glowing containers, HUD badges
│   │   ├── data/                     # Typed project records, skill sets, career logs
│   │   ├── lib/                      # API clients, animation hooks, formatters
│   │   └── types/                    # TypeScript interfaces for portfolio entities
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
└── ai-assistant/                     # Backend AI service (FastAPI)
    ├── app/
    │   ├── api/routes/               # Chat, health, and readiness endpoints
    │   ├── core/                     # Configuration, CORS, security guards
    │   ├── schemas/                  # Pydantic request/response models
    │   └── services/                 # RAG orchestrator, vector retrieval, LLM runner
    ├── knowledge/                    # Verified portfolio document corpus
    ├── ingestion/                    # Chunking, indexing, and vector store builder
    ├── requirements.txt
    └── .env.example
```

---

## 🗺️ 7. Implementation Roadmap

- [ ] **Phase 0: Reconnaissance & Planning:** Comprehensive `overview.md` single source of truth.
- [ ] **Phase 1: Project Foundation:** Next.js + TypeScript + Tailwind CSS structure initialization.
- [ ] **Phase 2: HUD Design System:** Tactical border cuts, scanline filters, color tokens, and layout primitives.
- [ ] **Phase 3: Spartan Cinematic Hero:** Layered sci-fi composition, atmospheric particles, and telemetry headers.
- [ ] **Phase 4: Mission Dossiers (Projects):** Structured project case studies with historical metrics and architecture diagrams.
- [ ] **Phase 5: Technical Subsystems (Skills & Timeline):** Engineering capability matrices and education logs.
- [ ] **Phase 6: Spartan Intelligence Backend:** FastAPI microservice, vector ingestion pipeline, and chat endpoint.
- [ ] **Phase 7: Tactical Chat Integration:** In-browser floating AI HUD with citations, streaming, and error handling.
- [ ] **Phase 8: Motion, Accessibility & Performance:** WCAG contrast validation, responsive testing, Core Web Vitals optimization (90+).
- [ ] **Phase 9: Final Polish & Deployment:** Production builds, Docker packaging, and live deployment configuration.

---

## 🚀 8. Quickstart & Setup (Local Development)

### Prerequisites
* **Node.js:** v18.17+ or v20+
* **Python:** v3.10+
* **Package Managers:** `npm` / `pnpm` and `pip`

### Step 1: Clone the Command Interface
```bash
git clone https://github.com/kalepranav158/Portfolio_Website_158.git
cd Portfolio_Website_158
```

### Step 2: Configure & Run the AI Assistant Backend
```bash
cd ai-assistant
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# Provide LLM API Keys in .env (e.g., GEMINI_API_KEY)
python ingestion/build_index.py
uvicorn app.main:app --reload --port 8000
```

### Step 3: Configure & Run the Frontend Command Center
```bash
cd ../portfolio
npm install
npm run dev
```
Navigate to `http://localhost:3000` to access the Spartan Command Interface.

---

## 👤 9. Engineer Profile & Contact

* **Engineer:** Pranav Kale
* **Title:** AI Engineer | Computer Engineering Student
* **Institution:** JSPM's Rajarshi Shahu College of Engineering, Tathawade, Pune
* **Focus Areas:** Autonomous Agentic AI, Hybrid RAG Architectures, Computer Vision, Distributed Backend Systems
* **Repository:** [kalepranav158/Portfolio_Website_158](https://github.com/kalepranav158/Portfolio_Website_158)

---

*“Building intelligence for a better tomorrow.” // UNSC TACTICAL INTERFACE TERMINAL v1.0*
