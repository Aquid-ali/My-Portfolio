export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isRepoPrivateOrPending?: boolean;
  architectureDetails: {
    systemFlow: string[];
    technicalHighlights: string[];
    securityOrPerformance: string[];
  };
  visualType: 'security' | 'inventory' | 'ml' | 'employee';
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  subTitle: string;
  headline: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  cgpa: string;
  status: string;
  primaryObjective: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  interests: {
    title: string;
    description: string;
    iconName: string;
  }[];
}
