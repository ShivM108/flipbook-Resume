export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  github?: string;
  portfolio?: string;
}

export interface EducationItem {
  institution: string;
  location?: string;
  degree: string;
  duration: string;
  details?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type?: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  date: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description?: string;
}

export interface Skills {
  technical: string[];
  tools: string[];
  languages: string[];
  soft: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  certifications: Certification[];
  skills: Skills;
}