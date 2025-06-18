import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutMeSection } from '@/components/sections/about-me-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
