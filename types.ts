export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  graduation: string;
  coursework: string[];
}

export interface ProjectItem {
  title: string;
  association: string;
  period: string;
  github_repo: string;
  points: string[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  resume: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  education: EducationItem;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  leadership: ExperienceItem[];
  projects: ProjectItem[];
}