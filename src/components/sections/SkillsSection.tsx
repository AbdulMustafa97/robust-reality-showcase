import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TestTube, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  GitBranch,
  Monitor,
  Bug
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: TestTube,
      title: "Test Automation",
      description: "Advanced automation frameworks and tools",
      skills: ["Selenium", "Cypress", "Playwright", "TestNG", "JUnit", "pytest"]
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Proficient in multiple programming languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C#", "SQL"]
    },
    {
      icon: Database,
      title: "API & Database Testing",
      description: "Comprehensive backend testing expertise",
      skills: ["REST API", "GraphQL", "Postman", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Identifying vulnerabilities and security flaws",
      skills: ["OWASP", "Burp Suite", "SQL Injection", "XSS", "Security Audits"]
    },
    {
      icon: GitBranch,
      title: "CI/CD & DevOps",
      description: "Streamlined testing in development pipelines",
      skills: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Azure"]
    },
    {
      icon: Monitor,
      title: "Performance Testing",
      description: "Load, stress, and performance optimization",
      skills: ["JMeter", "LoadRunner", "K6", "Performance Monitoring", "Gatling"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering all aspects of software quality assurance and testing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;