import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import SustainabilitySection from "@/components/SustainabilitySection";
import FooterSection from "@/components/FooterSection";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-20">
        <SustainabilitySection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Sustainability;
