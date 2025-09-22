import { Code, Palette, Database, Server, Globe, Boxes, GitBranch, Cloud, Cpu, Smartphone, Coffee, Zap } from "lucide-react";
import { Progress } from "./ui/progress";
const TechStack = () => {
  const technologies = [{
    name: "HTML5",
    icon: Code,
    skill: 90
  }, {
    name: "CSS3",
    icon: Palette,
    skill: 85
  }, {
    name: "JavaScript",
    icon: Zap,
    skill: 95
  }, {
    name: "TypeScript",
    icon: Code,
    skill: 88
  }, {
    name: "Python",
    icon: Coffee,
    skill: 92
  }, {
    name: "Java",
    icon: Coffee,
    skill: 85
  }, {
    name: "React",
    icon: Globe,
    skill: 90
  }, {
    name: "Next.js",
    icon: Globe,
    skill: 80
  }, {
    name: "Node.js",
    icon: Server,
    skill: 88
  }, {
    name: "Express",
    icon: Server,
    skill: 85
  }, {
    name: "Ruby on Rails",
    icon: Server,
    skill: 75
  }, {
    name: "PHP",
    icon: Server,
    skill: 70
  }, {
    name: "MongoDB",
    icon: Database,
    skill: 82
  }, {
    name: "PostgreSQL",
    icon: Database,
    skill: 80
  }, {
    name: "AWS",
    icon: Cloud,
    skill: 78
  }, {
    name: "Docker",
    icon: Boxes,
    skill: 75
  }, {
    name: "Git",
    icon: GitBranch,
    skill: 95
  }, {
    name: "Firebase",
    icon: Cloud,
    skill: 82
  }];

  // Duplicate for seamless infinite scroll
  const duplicatedTech = [...technologies, ...technologies];
  return <section id="techstack" className="min-h-screen flex flex-col justify-center overflow-hidden py-20">
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
          return <div key={`${tech.name}-${index}`} className="flex-shrink-0 mx-6 tech-card bg-card rounded-lg px-8 py-6 min-w-[200px] text-center flex flex-col items-center gap-4">
                <IconComponent className="h-8 w-8 text-primary tech-icon" />
                <span className="text-lg font-semibold">{tech.name}</span>
                <div className="w-full">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span></span>
                    <span>{tech.skill}%</span>
                    <span></span>
                  </div>
                  <Progress value={tech.skill} className="h-2" />
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default TechStack;