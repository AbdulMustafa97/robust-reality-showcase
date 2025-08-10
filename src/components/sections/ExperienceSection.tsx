import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior QA Engineer",
      company: "Next Generation Innovations (NextGENi)",
      location: "Karachi, Pakistan",
      period: "March 2025 - Present",
      description: "Lead quality assurance initiatives for enterprise-level applications, managing a team of 5 QA engineers and implementing comprehensive testing strategies.",
      achievements: [
        "Reduced production bugs by 75% through enhanced testing protocols",
        "Implemented automated testing suite covering 90% of critical user journeys",
        "Established CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior QA engineers and conducted training sessions"
      ],
      technologies: ["Selenium", "Jenkins", "Docker", "AWS", "Python", "REST API"]
    },
{
      title: "Software QA Engineer",
      company: "Next Generation Innovations (NextGENi)",
      location: "Karachi, Pakistan",
      period: "May 2023 - Feb. 2025",
      description: "Lead quality assurance initiatives for enterprise-level applications, managing a team of 5 QA engineers and implementing comprehensive testing strategies.",
      achievements: [
        "Reduced production bugs by 75% through enhanced testing protocols",
        "Implemented automated testing suite covering 90% of critical user journeys",
        "Established CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior QA engineers and conducted training sessions"
      ],
      technologies: ["Selenium", "Jenkins", "Docker", "AWS", "Python", "REST API"]
    },
    {
      title: "Software QA Engineer",
      company: "Hudasoft Inc.",
      location: "Karachi, Pakistan",
      period: "May 2022 -- April 2023",
      description: "Developed and executed comprehensive test plans for web and mobile applications, focusing on functional, integration, and performance testing.",
      achievements: [
        "Created automated test framework using Cypress and JavaScript",
        "Improved test coverage from 45% to 85% across all products",
        "Collaborated with cross-functional teams in Agile environment",
        "Conducted security testing and vulnerability assessments"
      ],
      technologies: ["Cypress", "JavaScript", "JIRA", "TestRail", "Postman", "MySQL"]
    },
    {
      title: "Research Assistant",
      company: "DHA Suffa University",
      location: "Karachi, Pakistan",
      period: "Feb. 2021 - Feb. 2022",
      description: "Performed manual testing for SaaS applications, created detailed test cases, and collaborated with development teams to ensure quality deliverables.",
      achievements: [
        "Designed comprehensive test cases for new feature releases",
        "Identified and documented 200+ bugs during product development",
        "Implemented regression testing procedures",
        "Contributed to user acceptance testing coordination"
      ],
      technologies: ["Manual Testing", "Selenium", "Java", "Git", "SQL", "API Testing"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering quality software solutions across diverse industries
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;