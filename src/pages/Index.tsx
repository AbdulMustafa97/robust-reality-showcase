import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
