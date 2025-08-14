// Types de données pour le portfolio

// Informations personnelles
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  backgroundImage: string;
  profileImage?: string;
}

// Informations de contact
export interface ContactInfo {
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

// Expérience professionnelle
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  companyImage?: string;
}

// Projet
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  achievements?: string[];
  screenshots?: string[];
}

// Compétences
export interface Skill {
  category: string;
  items: string[];
}

// Points forts (utilisé dans AboutSection via constants/portfolio)
export interface Highlight {
  label: string;
  value: string;
}

