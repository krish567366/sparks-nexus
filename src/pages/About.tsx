import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import OrganizationSection from "@/components/OrganizationSection";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <OrganizationSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default About;
