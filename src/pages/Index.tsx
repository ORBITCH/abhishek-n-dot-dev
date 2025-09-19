import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialsSection from "@/components/SocialsSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TechStack />
      <SocialsSection />
      <ProjectsSection />
      <AboutSection />
      <WorkTogetherSection />
      <Footer />
    </div>
  );
};

export default Index;
