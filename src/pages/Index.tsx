import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OrganizationSection from "@/components/OrganizationSection";
import TeamsSection from "@/components/TeamsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import EventsSection from "@/components/EventsSection";
import JoinSection from "@/components/JoinSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OrganizationSection />
      <TeamsSection />
      <SustainabilitySection />
      <EventsSection />
      <JoinSection />
      <FooterSection />
    </div>
  );
};

export default Index;
