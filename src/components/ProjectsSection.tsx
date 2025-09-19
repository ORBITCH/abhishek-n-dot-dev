import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Machine Code Design – BookMyShow",
      dates: "01/2024 – 07/2024",
      description: "Studied and designed the complete low-level architecture for systems such as BookMyShow.",
      tags: ["System Design", "Architecture", "Low-Level Design"],
    },
    {
      title: "HLD – Hotstar, Uber, Elastic Search",
      dates: "07/2024 – 09/2024", 
      description: "Designed HLDs of systems such as Hotstar, Uber, Elastic Search.",
      tags: ["High-Level Design", "System Architecture", "Scalability"],
    },
    {
      title: "Password Manager Application",
      dates: "10/2023 – 01/2024",
      description: "Java, Springboot, AWS – Java + AWS + Springboot integration.",
      tags: ["Java", "Spring Boot", "AWS", "Security"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">MY PROJECTS</h2>
          <p className="text-muted-foreground text-lg">
            Some of my professional work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg p-6 h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold leading-tight pr-4">
                  {project.title}
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer flex-shrink-0" />
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {project.dates}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="hero-button w-full">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;