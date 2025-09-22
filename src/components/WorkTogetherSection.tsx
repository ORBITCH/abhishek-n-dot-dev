import { Calendar, Mail } from "lucide-react";
import { Button } from "./ui/button";

const WorkTogetherSection = () => {
  return (
    <section id="work" className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project-card rounded-lg p-8 text-center flex flex-col h-full">
            <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Schedule a Call</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
              Book a consultation call to discuss your project requirements and see how we can work together.
            </p>
            <Button 
              size="lg" 
              className="hero-button w-full mt-auto"
              onClick={() => window.open("mailto:contact@example.com", "_blank")}
            >
              Contact Me
            </Button>
          </div>

          <div className="project-card rounded-lg p-8 text-center flex flex-col h-full">
            <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Drop a Mail</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
              Send me an email with your project details and I'll get back to you within 24 hours.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="hero-button w-full mt-auto"
              onClick={() => window.open("mailto:abhishek@example.com", "_blank")}
            >
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;