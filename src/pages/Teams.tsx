import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import TeamsSection from "@/components/TeamsSection";
import FooterSection from "@/components/FooterSection";

const Teams = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-20">
        <TeamsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Teams;
