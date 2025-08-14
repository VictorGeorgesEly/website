import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { personalInfo, experiences, projects, skills, contactInfo } from "@/constants/portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection personalInfo={personalInfo} />
        <AboutSection personalInfo={personalInfo} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection contactInfo={contactInfo} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
