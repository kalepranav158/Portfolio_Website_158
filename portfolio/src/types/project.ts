export type ProjectStatus = "implemented" | "in-development" | "planned";

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface ProjectArchitecture {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  caption: string;
}

export interface EngineeringDecision {
  title: string;
  detail: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
}

export interface EvaluationMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectEvaluation {
  context: string;
  metrics: EvaluationMetric[];
}

export interface ProjectLinks {
  repo?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  accent: "emerald" | "amber" | "cyan" | "lime";
  stack: string[];
  problem: string;
  objectives: string[];
  architecture: ProjectArchitecture;
  implementation: string[];
  decisions: EngineeringDecision[];
  challenges: TechnicalChallenge[];
  evaluation?: ProjectEvaluation;
  links: ProjectLinks;
  futureWork: string[];
}
