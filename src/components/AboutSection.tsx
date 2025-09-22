import { Code, Coffee, Lightbulb } from "lucide-react";
const AboutSection = () => {
  const highlights = [{
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code with best practices"
  }, {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions"
  }, {
    icon: Coffee,
    title: "Always Learning",
    description: "Staying updated with the latest technologies and trends"
  }];
  return <section id="about" className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Crafting sleek interfaces and smart solutions — code meets design.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">Hey, I’m Abhishek 👋

I’m a MERN stack developer who loves turning ideas into clean, responsive, and engaging web experiences. Over the past 3+ years, I’ve FREELANCED on multiple projects, helping clients bring their products to life with React, JavaScript, HTML, and CSS.

I kickstarted my career as a MERN intern at Speedup Infotech, then moved on to freelancing full-time, and most recently I’ve been diving into Salesforce Pardot for about a year.

Alongside coding,
I’m learning UI/UX because I believe design and development go hand-in-hand. I enjoy remote work, building products that make an impact, and collaborating with teams who care about great user experiences.

Let’s create something amazing together!</p>
            
            

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return <div key={index} className="text-center">
                    <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>;
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
                  <span className="ml-2 font-medium">Front-End Development</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Current Focus:</span>
                  <span className="ml-2 font-medium">UI/UX and FrontEnd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;