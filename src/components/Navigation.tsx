import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Tech Stack", id: "techstack" },
    { name: "Socials", id: "socials" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Work Together", id: "work" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-xl font-bold cursor-pointer hover:text-primary/80 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Abhishek N
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </div>

          <Button
            onClick={() => window.open("https://github.com", "_blank")}
            variant="outline"
            size="sm"
            className="hero-button"
          >
            🧠 My Projects
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;