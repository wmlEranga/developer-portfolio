import AboutWrapper from "./components/client-wrappers/about-wrapper";
import AchievementsWrapper from "./components/client-wrappers/achievements-wrapper";
import CertificatesWrapper from "./components/client-wrappers/certificates-wrapper";
import ContactWrapper from "./components/client-wrappers/contact-wrapper";
import EducationWrapper from "./components/client-wrappers/education-wrapper";
import ExperienceWrapper from "./components/client-wrappers/experience-wrapper";
import HeroSectionWrapper from "./components/client-wrappers/hero-section-wrapper";
import ProjectsWrapper from "./components/client-wrappers/projects-wrapper";
import SkillsWrapper from "./components/client-wrappers/skills-wrapper";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSectionWrapper />
      <AboutWrapper />
      <ExperienceWrapper />
      <SkillsWrapper />
      <ProjectsWrapper />
      <EducationWrapper />
      <CertificatesWrapper />
      <AchievementsWrapper />
      <ContactWrapper />
    </div>
  );
}
