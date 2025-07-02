export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  impact: string;
  repository?: string;
  liveDemo?: string;
  image?: string;
  category: ProjectCategory;
}

export type ProjectCategory = 'all' | 'cloud-infrastructure' | 'ci-cd' | 'microservices' | 'ai-integration' | 'cost-optimization';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = 'infrastructure' | 'devops' | 'monitoring' | 'ai-powered';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  achievements: string[];
}

export interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface TerminalCommand {
  command: string;
  output: string | (() => string);
  description?: string;
}