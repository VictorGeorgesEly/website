import { useCallback } from "react";

// Fonction utilitaire pour la navigation fluide
export const smoothScrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    // Calculer l'offset du header pour un positionnement précis
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 80;

    // Position de la section moins la hauteur du header
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight + 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Hook pour la navigation desktop
export const useDesktopNavigation = () => {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    smoothScrollToSection(sectionId);
  }, []);
};

// Hook pour la navigation mobile
export const useMobileNavigation = (setIsMobileMenuOpen: (open: boolean) => void) => {
  return useCallback((href: string) => {
    // Fermer le menu mobile d'abord
    setIsMobileMenuOpen(false);

    // Attendre un peu que l'animation de fermeture se termine puis naviguer
    setTimeout(() => {
      const sectionId = href.replace('#', '');
      smoothScrollToSection(sectionId);
    }, 150);
  }, [setIsMobileMenuOpen]);
};
