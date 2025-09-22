import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add fade-out effect to current view
      document.body.style.opacity = '0.7';

      // Scroll to section
      element.scrollIntoView({
        behavior: "smooth"
      });

      // Add fade-in effect after scrolling
      setTimeout(() => {
        document.body.style.opacity = '1';
        element.classList.add('animate-fade-in');
        setTimeout(() => {
          element.classList.remove('animate-fade-in');
        }, 500);
      }, 300);
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    name: "Home",
    id: "hero"
  }, {
    name: "Tech Stack",
    id: "techstack"
  }, {
    name: "Projects",
    id: "projects"
  }, {
    name: "About",
    id: "about"
  }, {
    name: "Socials",
    id: "socials"
  }, {
    name: "Work Together",
    id: "work"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold cursor-pointer hover:text-white transition-colors" onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })}>
            Abhishek N
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.id)} className="text-sm font-medium hover:text-white transition-colors relative group">
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>)}
          </div>

          {/* Desktop GitHub Button */}
          <div className="hidden md:block">
            <Button onClick={() => window.open("https://github.com", "_blank")} variant="outline" size="sm" className="hero-button">My Projects
          </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden p-2 rounded-lg border border-white/30 hover:border-white hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-white/20 rounded-b-lg">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-3 py-2 text-base font-medium hover:text-white hover:bg-white/10 transition-colors rounded-md">
                  {item.name}
                </button>)}
              <div className="pt-2">
                  <Button onClick={() => {
              window.open("https://github.com", "_blank");
              setIsMobileMenuOpen(false);
            }} variant="outline" size="sm" className="w-full hero-button">
                    🧠 My Projects
                  </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;