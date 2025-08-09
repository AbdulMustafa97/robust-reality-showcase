import { Button } from "@/components/ui/enhanced-button";
import { Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional workspace setup for QA engineering"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">[Upload Your Photo]</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-lg">✓</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              [Your Name]
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
              Senior QA Engineer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              [Your professional tagline - e.g., "Passionate about delivering exceptional software quality through innovative testing strategies"]
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              [Brief description of your experience and specializations - e.g., "With X years of experience in quality assurance, I specialize in..."]
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="professional" size="xl" className="group">
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="[Your GitHub URL]" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-accent">
              <Github className="h-6 w-6" />
            </a>
            <a href="[Your LinkedIn URL]" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-accent">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:[Your Email]" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-accent">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;