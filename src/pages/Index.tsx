import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import OrganizationSection from "@/components/OrganizationSection";
import GovernanceSection from "@/components/GovernanceSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ReportingSection from "@/components/ReportingSection";
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
      <ObjectivesSection />
      <OrganizationSection />
      <GovernanceSection />
      <SustainabilitySection />
      <ReportingSection />
      <EventsSection />
      <JoinSection />
      <FooterSection />
    </div>
  );
};

export default Index;
