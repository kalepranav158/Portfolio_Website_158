import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "advanced-self-rag",
    title: "Advanced Self-RAG System",
    category: "AI ENGINEERING // ADAPTIVE RETRIEVAL",
    summary:
      "Autonomous retrieval-augmented generation engine utilizing LangGraph cyclical decision flows, dynamic query transformation, relevance grading, and hallucination reduction.",
    status: "implemented",
    accent: "emerald",
    stack: [
      "LangChain",
      "LangGraph",
      "FAISS",
      "Hybrid Retrieval",
      "LLM Evaluation",
      "Python",
    ],
    problem:
      "Standard linear RAG systems blindly inject retrieved documents into prompts regardless of relevance, leading to hallucinations, irrelevant outputs, and degraded response quality when initial user queries are ambiguous.",
    objectives: [
      "Implement autonomous routing to determine whether retrieval is strictly necessary for a given query.",
      "Integrate an automated relevance evaluator to grade retrieved chunks and filter out noise.",
      "Incorporate dynamic query re-writing loops when initial retrieval fails relevance criteria.",
      "Perform deterministic grounding checks prior to finalizing model response outputs.",
    ],
    architecture: {
      nodes: [
        { id: "query", label: "User Input", role: "Query Entrypoint" },
        { id: "router", label: "Semantic Router", role: "Retrieval Decision Gate" },
        { id: "retriever", label: "FAISS Hybrid", role: "Lexical & Vector Search" },
        { id: "grader", label: "Relevance Grader", role: "Document Filtering & Scorer" },
        { id: "rewriter", label: "Query Transform", role: "Iterative Query Refinement" },
        { id: "generator", label: "Grounded LLM", role: "Attributed Answer Synthesis" },
      ],
      edges: [
        { from: "query", to: "router", label: "Evaluates intent" },
        { from: "router", to: "retriever", label: "Needs evidence" },
        { from: "retriever", to: "grader", label: "Chunks" },
        { from: "grader", to: "generator", label: "Relevant" },
        { from: "grader", to: "rewriter", label: "Irrelevant (< threshold)" },
        { from: "rewriter", to: "retriever", label: "Refined query loop" },
      ],
      caption:
        "Cyclic LangGraph state machine governing dynamic query evaluation, hybrid retrieval, relevance grading, and self-correction loops.",
    },
    implementation: [
      "Constructed a multi-node cyclical graph using LangGraph state representations.",
      "Engineered vector retrieval pipelines using FAISS with L2-normalized cosine indexing.",
      "Implemented structured JSON output parsers for document relevance classification.",
      "Developed automated evaluation harnesses to benchmark routing precision and end-to-end latency.",
    ],
    decisions: [
      {
        title: "Graph Orchestration via LangGraph over Linear Chains",
        detail:
          "Linear pipelines lack feedback mechanisms. LangGraph enabled cyclic state transitions necessary for iterative query rewriting when retrieved context failed relevance thresholds.",
      },
      {
        title: "Deterministic Relevance Floor over Unchecked Generation",
        detail:
          "Filtering ungrounded chunks prior to the generation step prevented hallucinated synthesis and reduced unnecessary token expenditure.",
      },
    ],
    challenges: [
      {
        challenge: "High multi-step reasoning latency during iterative graph cycles.",
        solution:
          "Introduced deterministic short-circuit paths when direct answers are feasible, and cached query transformations to bound iterative hops.",
      },
      {
        challenge: "Document noise polluting vector similarity search rankings.",
        solution:
          "Combined FAISS vector similarity with lexical BM25 filtering using Reciprocal Rank Fusion (RRF).",
      },
    ],
    evaluation: {
      context:
        "Evaluation results reflect one historical benchmark run across a 24-test evaluation suite under specific test conditions; they do not represent universal guarantees across all corpora.",
      metrics: [
        {
          label: "Router Classification Accuracy",
          value: "95.83%",
          note: "23 of 24 intent routing test cases passed accurately.",
        },
        {
          label: "Average Evaluation Run Latency",
          value: "114.09 s",
          note: "Observed in one historical 24-test full reasoning benchmark.",
        },
        {
          label: "Evaluation Suite Size",
          value: "24 Tests",
          note: "Multi-scenario domain evaluation benchmark.",
        },
      ],
    },
    links: {
      repo: "https://github.com/kalepranav158",
    },
    futureWork: [
      "Explore small fine-tuned SLMs for sub-second relevance grading nodes.",
      "Implement multi-vector chunk indexing for complex structured tables.",
    ],
  },
  {
    slug: "venora-ai-flute-tutor",
    title: "VENORA AI — Flute Tutor",
    category: "MULTIMODAL AI // ACOUSTIC EVALUATION",
    summary:
      "Intelligent musical pedagogy platform coupling Dynamic Time Warping (DTW) acoustic time-series analysis with Google Gemini pedagogical feedback for personalized flute training.",
    status: "in-development",
    accent: "cyan",
    stack: [
      "Google Gemini",
      "LangChain",
      "Dynamic Time Warping (DTW)",
      "Python",
      "FastAPI",
      "NumPy",
    ],
    problem:
      "Mastering acoustic wind instruments like the Indian bamboo flute requires granular microtonal pitch feedback, breath stabilization, and rhythmic cadence analysis that generic tuner apps cannot contextualize into pedagogical instruction.",
    objectives: [
      "Extract pitch contour, fundamental frequency, and temporal dynamics from live acoustic recordings.",
      "Apply Dynamic Time Warping to align student practice attempts against reference master recordings.",
      "Translate raw acoustic deviations into clear, human-understandable musical coaching through LLMs.",
    ],
    architecture: {
      nodes: [
        { id: "audio", label: "Acoustic Input", role: "Microphone Audio Stream" },
        { id: "dsp", label: "DSP Feature Extractor", role: "Pitch, Onsets & Spectral Flux" },
        { id: "dtw", label: "DTW Alignment Engine", role: "Time-Series Warping against Master" },
        { id: "context", label: "Pedagogical RAG", role: "Raga Grammar & Technique Knowledge" },
        { id: "llm", label: "Gemini Synthesis", role: "Structured Student Feedback" },
      ],
      edges: [
        { from: "audio", to: "dsp", label: "Raw waveform" },
        { from: "dsp", to: "dtw", label: "Pitch time-series" },
        { from: "dtw", to: "llm", label: "Discrepancy vectors" },
        { from: "context", to: "llm", label: "Raga rules" },
      ],
      caption:
        "Multimodal architecture processing audio waveforms into pitch contours, computing DTW distance against master templates, and delivering LLM-guided guidance.",
    },
    implementation: [
      "Implemented pitch extraction algorithms and frequency bin normalization using Python and NumPy.",
      "Developed DTW similarity metrics capable of handling natural performance tempo variations.",
      "Engineered prompt pipelines with Google Gemini to convert mathematical deviation metrics into actionable coaching advice.",
    ],
    decisions: [
      {
        title: "Dynamic Time Warping for Non-Linear Temporal Alignment",
        detail:
          "Students do not play at the exact reference metronome speed. Linear comparison fails; DTW non-linearly warps the time axis to isolate pitch inaccuracies independent of tempo fluctuations.",
      },
    ],
    challenges: [
      {
        challenge: "Background acoustic noise and room reverberation distorting pitch detection.",
        solution:
          "Applied spectral noise gating and harmonic filtering before frequency feature extraction.",
      },
    ],
    links: {
      repo: "https://github.com/kalepranav158",
    },
    futureWork: [
      "Direct browser-based WebAudio API real-time visualization of pitch deviation curves.",
      "Expansion to vocal sargam and classical violin practice modules.",
    ],
  },
  {
    slug: "smart-budget-management",
    title: "Smart Budget Management System",
    category: "FULL-STACK // FINANCIAL ENGINEERING",
    summary:
      "Automated financial statement processing system parsing bank PDF records, classifying multi-category transaction flows, and generating actionable personal wealth intelligence.",
    status: "implemented",
    accent: "amber",
    stack: [
      "Django",
      "Python",
      "PDF Processing",
      "Data Extraction",
      "PostgreSQL",
      "Pandas",
    ],
    problem:
      "Individual financial management is crippled by diverse, password-protected, and inconsistently formatted bank statement PDFs, rendering manual data entry tedious and error-prone.",
    objectives: [
      "Build a resilient tabular PDF parsing engine resilient to bank statement layout variations.",
      "Automate transaction taxonomy categorization (living expenses, investments, liabilities, discretionary).",
      "Deliver automated cash flow intelligence, monthly run-rates, and predictive budget forecasting.",
    ],
    architecture: {
      nodes: [
        { id: "upload", label: "Statement Ingestion", role: "PDF / Document Upload" },
        { id: "extractor", label: "Tabular Parser", role: "Spatial PDF Extraction Engine" },
        { id: "cleaner", label: "Sanitization & Schema", role: "Date, Amount & Description Normalization" },
        { id: "classifier", label: "Taxonomy Engine", role: "Rule-Based & ML Classification" },
        { id: "db", label: "PostgreSQL Store", role: "Relational Ledger Storage" },
        { id: "dashboard", label: "Analytics Dashboard", role: "Cash Flow & Metric Visualizer" },
      ],
      edges: [
        { from: "upload", to: "extractor", label: "Raw file" },
        { from: "extractor", to: "cleaner", label: "Tabular stream" },
        { from: "cleaner", to: "classifier", label: "Normalized records" },
        { from: "classifier", to: "db", label: "Persisted transactions" },
        { from: "db", to: "dashboard", label: "Aggregated analytics" },
      ],
      caption:
        "Ingestion pipeline parsing multi-format statement documents, normalizing tabular data streams, and persisting categorized financial ledgers.",
    },
    implementation: [
      "Constructed Python PDF extraction routines with bounding box heuristic detection for transaction tables.",
      "Built normalized relational data models in Django ORM with PostgreSQL backends.",
      "Developed aggregation queries for monthly category breakdowns, recurring subscriptions, and savings rates.",
    ],
    decisions: [
      {
        title: "Heuristic Bounding-Box Parsing over Generic OCR",
        detail:
          "Digital bank PDFs contain selectable text layers. Extracting character coordinates directly avoided OCR visual errors and dramatically accelerated statement processing speeds.",
      },
    ],
    challenges: [
      {
        challenge: "Inconsistent multi-line transaction narratives wrapping across table rows.",
        solution:
          "Implemented stateful line-joining heuristics keyed on debit/credit column alignments and date boundary markers.",
      },
    ],
    links: {
      repo: "https://github.com/kalepranav158",
    },
    futureWork: [
      "Integration of real-time SMS financial parser for instant mobile capture.",
      "Local LLM classification for obscure regional merchant identification.",
    ],
  },
  {
    slug: "civic-water-infrastructure",
    title: "Civic Water Infrastructure Monitoring",
    category: "COMPUTER VISION // GEOSPATIAL AI",
    summary:
      "Proposed multimodal civic AI architecture integrating YOLO computer vision for pipe leakage detection, NLP complaint categorization, and geospatial municipal analytics.",
    status: "planned",
    accent: "lime",
    stack: [
      "YOLO Vision",
      "FastAPI",
      "NLP Complaint Analytics",
      "Geospatial Analytics",
      "Python",
    ],
    problem:
      "Urban water distribution networks suffer massive unmonitored leakages, delayed manual repair workflows, and fragmented citizen reporting without geospatial severity prioritization.",
    objectives: [
      "Proposed: Deploy YOLO-based computer vision models for surface leakage and structural pipeline defect detection.",
      "Proposed: Build an NLP complaint triage pipeline to group citizen grievances and extract geographic metadata.",
      "Proposed: Deliver an integrated municipal dispatch dashboard with real-time geospatial heatmaps.",
    ],
    architecture: {
      nodes: [
        { id: "vision", label: "Inspection Feed", role: "Field Camera / Drone Imagery" },
        { id: "yolo", label: "YOLO Defect Detector", role: "Leakage & Pipe Rupture Identification" },
        { id: "citizen", label: "Citizen Grievances", role: "Text & Image Complaint Intake" },
        { id: "nlp", label: "NLP Complaint Triage", role: "Intent & Urgency Classification" },
        { id: "geo", label: "Geospatial Engine", role: "Spatial Heatmap & Routing" },
        { id: "dispatch", label: "Municipal Console", role: "Actionable Maintenance Triage" },
      ],
      edges: [
        { from: "vision", to: "yolo", label: "Image stream" },
        { from: "yolo", to: "geo", label: "Visual detections" },
        { from: "citizen", to: "nlp", label: "Citizen reports" },
        { from: "nlp", to: "geo", label: "Categorized complaints" },
        { from: "geo", to: "dispatch", label: "Prioritized work orders" },
      ],
      caption:
        "Proposed multimodal architecture combining visual defect detection with text complaint processing into an integrated geospatial dispatch dashboard.",
    },
    implementation: [
      "Architectural planning and technical feasibility research across municipal water distribution datasets.",
      "Prototyping baseline FastAPI ingestion endpoints for multimodal image and text payload handling.",
      "Component status note: Complete pipeline is in research and proposal phase; individual vision and NLP models are under active experimental validation.",
    ],
    decisions: [
      {
        title: "Multimodal Fusion over Isolated Inspection Channels",
        detail:
          "Combining physical camera feeds with crowdsourced citizen reports provides cross-verification, preventing false alarms and prioritizing critical pipe ruptures.",
      },
    ],
    challenges: [
      {
        challenge: "Scarcity of labeled public municipal pipe rupture computer vision datasets.",
        solution:
          "Formulating synthetic augmentation strategies and collaborating on municipal open data initiatives.",
      },
    ],
    links: {
      repo: "https://github.com/kalepranav158",
    },
    futureWork: [
      "Field pilot with IoT acoustic vibration sensors placed on critical urban water mains.",
      "Edge deployment of quantized YOLO models on inspection hardware.",
    ],
  },
];
