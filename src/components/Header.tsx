import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getNavigationItems, portfolioSections } from "@/constants/navigation";
import { useDesktopNavigation, useMobileNavigation } from "@/lib/navigation";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const navItems = getNavigationItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Utilisation des hooks de navigation centralisés
  const handleDesktopNavigation = useDesktopNavigation();
  const handleMobileNavigation = useMobileNavigation(setIsMobileMenuOpen);

  // Système de détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioSections.map(section => section.id);
      const scrollPosition = window.scrollY + 100; // Offset pour la détection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configuration des couleurs selon la section active
  const getHeaderStyles = () => {
    switch (activeSection) {
      case "home":
        return {
          bg: "bg-black/40",
          text: "text-white",
          textSecondary: "text-white/80",
          hover: "hover:text-white hover:bg-white/10",
          border: "border-white/20",
          buttonBg: "bg-white/10 hover:bg-white/20"
        };
      case "about":
      case "experience":
      case "projects":
      case "skills":
        return {
          bg: "bg-white/95 backdrop-blur-xl shadow-lg",
          text: "text-gray-900",
          textSecondary: "text-gray-700",
          hover: "hover:text-gray-900 hover:bg-gray-100",
          border: "border-gray-200",
          buttonBg: "bg-gray-100 hover:bg-gray-200"
        };
      case "contact":
        return {
          bg: "bg-gray-900/95",
          text: "text-white",
          textSecondary: "text-gray-300",
          hover: "hover:text-white hover:bg-white/10",
          border: "border-gray-600",
          buttonBg: "bg-gray-700 hover:bg-gray-600"
        };
      default:
        return {
          bg: "bg-black/40",
          text: "text-white",
          textSecondary: "text-white/80",
          hover: "hover:text-white hover:bg-white/10",
          border: "border-white/20",
          buttonBg: "bg-white/10 hover:bg-white/20"
        };
    }
  };

  const headerStyles = getHeaderStyles();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-lg transition-all duration-300",
        headerStyles.bg,
        className
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <a
              href="#home"
              onClick={(e) => handleDesktopNavigation(e, "#home")}
              className="group flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white font-black text-lg">V</span>
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "font-bold text-xl transition-all duration-300",
                  activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills"
                    ? "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                )}>
                  Victor ELY
                </span>
                <div className={cn(
                  "text-xs font-medium transition-all duration-300",
                  activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills"
                    ? "text-gray-600"
                    : "text-blue-300"
                )}>
                  DevOps Engineer
                </div>
              </div>
            </a>
          </motion.div>

          {/* Mobile Section Name Display */}
          <div className="md:hidden flex-1 flex justify-center mx-4">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "px-3 py-1 rounded-lg font-medium text-center transition-all duration-300",
                headerStyles.text
              )}
            >
              {portfolioSections.find(section => section.id === activeSection)?.name || "Accueil"}
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleDesktopNavigation(e, item.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group",
                      isActive
                        ? cn(
                            headerStyles.text,
                            activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills"
                              ? "bg-gray-200"
                              : "bg-white/20"
                          )
                        : cn(headerStyles.textSecondary, headerStyles.hover)
                    )}
                  >
                    {item.name}
                    {/* Enhanced hover effect */}
                    <span className={cn(
                      "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}></span>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden relative w-10 h-10 backdrop-blur-sm rounded-lg flex items-center justify-center border transition-all duration-300",
              headerStyles.buttonBg,
              headerStyles.border
            )}
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col items-center justify-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                className={cn("w-4 h-0.5 rounded-full block transition-all duration-300",
                  activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills" ? "bg-gray-900" : "bg-white"
                )}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className={cn("w-4 h-0.5 rounded-full block mt-1 transition-all duration-300",
                  activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills" ? "bg-gray-900" : "bg-white"
                )}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                className={cn("w-4 h-0.5 rounded-full block mt-1 transition-all duration-300",
                  activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills" ? "bg-gray-900" : "bg-white"
                )}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              y: -20,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }
          }}
          className={cn(
            "md:hidden mt-4 overflow-hidden rounded-xl border transition-all duration-300",
            headerStyles.bg,
            headerStyles.border
          )}
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => handleMobileNavigation(item.href)}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-all duration-300",
                      isActive
                        ? cn(
                            headerStyles.text,
                            activeSection === "about" || activeSection === "experience" || activeSection === "projects" || activeSection === "skills"
                              ? "bg-gray-200"
                              : "bg-white/20"
                          )
                        : cn(headerStyles.textSecondary, headerStyles.hover)
                    )}
                  >
                    {item.name}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
