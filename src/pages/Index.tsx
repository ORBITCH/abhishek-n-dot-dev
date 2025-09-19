import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SocialsSection from "@/components/SocialsSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <AboutSection />
      <SocialsSection />
      <WorkTogetherSection />
    </div>
  );
};

export default Index;
