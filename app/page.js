// import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSectionWrapper from "./components/client-wrappers/hero-section-wrapper";
import SkillsWrapper from "./components/client-wrappers/skills-wrapper";
import ProjectsWrapper from "./components/client-wrappers/projects-wrapper";

export default async function Home() {
  //const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSectionWrapper />
      <AboutSection />
      <Experience />
      <SkillsWrapper />
      <ProjectsWrapper />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
}
