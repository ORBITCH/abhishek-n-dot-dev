import { Code, Coffee, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description: "Staying updated with the latest technologies and trends"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a software developer with a passion for building innovative solutions that 
              make a real impact. With expertise in modern web technologies and system design, 
              I enjoy tackling complex problems and turning them into elegant, user-friendly applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in software development has led me to work on diverse projects, 
              from designing large-scale system architectures to building secure applications. 
              I believe in continuous learning and staying at the forefront of technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="project-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2 font-medium">India</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="ml-2 font-medium">3+ Years</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Specialization:</span>
                  <span className="ml-2 font-medium">Full-Stack Development</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Current Focus:</span>
                  <span className="ml-2 font-medium">System Design & Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;