import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Globe, 
  Boxes,
  GitBranch,
  Cloud,
  Cpu,
  Smartphone,
  Coffee,
  Zap
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Zap },
    { name: "TypeScript", icon: Code },
    { name: "Python", icon: Coffee },
    { name: "Java", icon: Coffee },
    { name: "React", icon: Globe },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "Ruby on Rails", icon: Server },
    { name: "PHP", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Boxes },
    { name: "Git", icon: GitBranch },
    { name: "Firebase", icon: Cloud },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="techstack" className="min-h-screen flex flex-col justify-center overflow-hidden py-20">
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I work with
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-slide-infinite">
          {duplicatedTech.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-6 tech-card bg-card rounded-lg px-8 py-6 min-w-[200px] text-center flex flex-col items-center gap-4"
              >
                <IconComponent className="h-8 w-8 text-primary" />
                <span className="text-lg font-semibold">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;