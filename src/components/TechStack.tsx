const TechStack = () => {
  const technologies = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "Java", 
    "React", "Next.js", "Node.js", "Express", "Ruby on Rails", "PHP", 
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Firebase"
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I work with
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-slide-infinite">
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 mx-6 tech-card bg-card rounded-lg px-8 py-4 min-w-[200px] text-center"
            >
              <span className="text-lg font-semibold">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;