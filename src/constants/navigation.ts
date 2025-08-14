export interface NavigationSection {
  id: string;
  name: string;
  href: string;
  component: string;
}

// Configuration centralisée des sections du portfolio
export const portfolioSections: NavigationSection[] = [
  {
    id: "home",
    name: "Accueil",
    href: "#home",
    component: "HeroSection"
  },
  {
    id: "about",
    name: "À propos",
    href: "#about",
    component: "AboutSection"
  },
  {
    id: "experience",
    name: "Expérience",
    href: "#experience",
    component: "ExperienceSection"
  },
  {
    id: "projects",
    name: "Projets",
    href: "#projects",
    component: "ProjectsSection"
  },
  {
    id: "skills",
    name: "Compétences",
    href: "#skills",
    component: "SkillsSection"
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
    component: "ContactSection"
  }
];

// Fonction utilitaire pour obtenir les éléments de navigation
export const getNavigationItems = () => {
  return portfolioSections.map(section => ({
    name: section.name,
    href: section.href
  }));
};
