import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import FooterSection from "@/components/FooterSection";

const Events = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-20">
        <EventsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Events;
