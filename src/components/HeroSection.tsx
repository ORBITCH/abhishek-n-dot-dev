import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Github, Download } from "lucide-react";
const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ["JavaScript Developer", "Python Engineer", "React Specialist", "Full-Stack Developer", "System Designer"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Abhishek N
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              I'm a{" "}
              <span className="text-primary font-semibold transition-all duration-500">
                {skills[currentSkill]}
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">I’m a MERN stack developer with 3+ years of freelancing experience, specializing in FRONTEND development. I’ve worked as a MERN intern at Speedup Infotech and delivered multiple projects as a FREELANCER. Currently, I’m exploring SALESFORCE Pardot while sharpening my UI/UX skills. Open to REMOTE opportunities.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="hero-button min-w-[150px]" onClick={() => window.open("#", "_blank")}>
              <Download className="mr-2 h-5 w-5" />
              Get CV
            </Button>
            <Button size="lg" variant="outline" className="hero-button min-w-[150px]" onClick={() => window.open("https://github.com", "_blank")}>
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;