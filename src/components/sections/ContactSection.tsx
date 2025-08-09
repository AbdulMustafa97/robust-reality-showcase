import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "qa.engineer@email.com",
      href: "mailto:qa.engineer@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/qa-engineer",
      href: "https://github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/qa-engineer",
      href: "https://linkedin.com"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to enhance your software quality? Let's discuss how I can contribute to your team's success.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Contact Information</CardTitle>
                <CardDescription>
                  Get in touch for opportunities or collaboration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Professional Links</CardTitle>
                <CardDescription>
                  Connect with me on professional platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
                
                <div className="pt-4">
                  <Button variant="hero" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="text-center hover:shadow-elegant transition-all duration-300">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, challenging projects, and innovative testing solutions. Let's connect and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button variant="professional" size="lg">
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;