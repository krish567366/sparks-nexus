import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import JoinSection from "@/components/JoinSection";
import FooterSection from "@/components/FooterSection";

const Join = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-20">
        <JoinSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Join;
