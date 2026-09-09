export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  repoUrl: string;
  overview: string;
  objective: {
    main: string;
    bullets: string[];
  };
  keyFeatures: string[];
  architecture?: {
    nodes: string[];
    description: string;
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface KnowledgeSection {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  duration: string;
  cgpa: string;
  status: string;
  relevantAreas: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  project: string;
  responsibilities: string[];
}

export interface DevelopmentApproachItem {
  title: string;
  description: string;
  iconName: string;
  color: string;
}
