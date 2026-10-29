# Sprint 0: Reconnaissance, Architecture Blueprint & Foundation Setup
**Date:** 2026-10-29  
**Status:** Complete  
**Phases Covered:** Phase 0 (Portfolio Recon & Planning) & Phase A0 (Spartan Intelligence Baseline)

---

## 1. Objectives & Scope
- Inspect local environment, tooling, and system runtimes.
- Review and ingest `overview.md` (single source of truth for design, architecture, and verification).
- Establish project directory structure supporting both the Next.js frontend (`portfolio/`) and the FastAPI backend (`ai-assistant/`).
- Configure root `.gitignore` to prevent secret leakage and untracked build artifacts.
- Establish the `DOCS/` repository documentation standard.

---

## 2. Environment Baseline & Discoveries
- **Operating System:** Windows 11
- **Node.js Version:** `v22.14.0`
- **npm Version:** `10.9.2`
- **Python Version:** `Python 3.13.1`
- **Git Remote:** `https://github.com/kalepranav158/Portfolio_Website_158.git` (branch: `main`)

---

## 3. Architecture Blueprint Decisions
1. **Frontend Architecture:** Next.js (App Router) in `portfolio/` with TypeScript, Tailwind CSS, Space Grotesk / Inter typography, and Framer Motion for scroll reveals.
2. **Backend Architecture:** Python FastAPI in `ai-assistant/` providing `/api/v1/chat`, `/api/v1/chat/stream`, `/api/v1/health`, `/api/v1/ready`, and `/api/v1/feedback`.
3. **Retrieval Mechanism:** Hybrid BM25 + FAISS with Reciprocal Rank Fusion (RRF) and an evidence-gate threshold to enforce honest "no-evidence" fallbacks.
4. **Honesty & Provenance Guarantees:** Zero fabricated metrics or affiliations; explicit labeling of implemented vs. in-development projects (e.g., Civic Water); exact historical context for Self-RAG evaluation results.

---

## 4. Deliverables & Modified Files
- `overview.md`: Authoritative specification document.
- `README.md`: High-level mission brief.
- `.gitignore`: Comprehensive ignore rules for node_modules, build directories, Python venv, and environment files.
- `DOCS/INDEX.md`: Sprint tracking master index.
- `DOCS/SPRINT_00_RECON_AND_SETUP.md`: Sprint 0 audit report.

---

## 5. Next Sprint Handoff
Proceed directly to **Sprint 1 (Phase 1: Foundation & Phase 2: Design System & Shell)**:
- Scaffold the Next.js frontend in `portfolio/` with Tailwind CSS and custom HUD design tokens.
- Implement the core HUD primitives, navigation bar with scroll-spy, and footer.
