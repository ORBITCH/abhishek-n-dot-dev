import { Facebook, Github, Twitter, MessageSquare, Instagram, Linkedin } from "lucide-react";

const SocialsSection = () => {
  const socials = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "#1877F2" },
    { name: "GitHub", icon: Github, url: "https://github.com", color: "#333" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "#1DA1F2" },
    { name: "WhatsApp", icon: MessageSquare, url: "https://whatsapp.com", color: "#25D366" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "#E4405F" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "#0077B5" },
  ];

  return (
    <section id="socials" className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">MY SOCIALS</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Connect with me across different platforms
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-hover group"
              >
                <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center aspect-square social-card">
                  <IconComponent 
                    className="h-8 w-8 mb-3 group-hover:text-primary transition-colors" 
                  />
                  <span className="text-sm font-medium">{social.name}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;