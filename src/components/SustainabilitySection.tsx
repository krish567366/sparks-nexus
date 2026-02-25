import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Leaf, Zap, Recycle, Lightbulb, HeartHandshake } from "lucide-react";

const initiatives = [
  { icon: Leaf, title: "Sustainable Robotics Development", desc: "Designing robotic systems with minimal environmental footprint and sustainable materials." },
  { icon: Zap, title: "Energy Efficient Systems", desc: "Optimizing power consumption in all automated and robotic solutions." },
  { icon: Recycle, title: "E-Waste Management", desc: "Responsible disposal and recycling programs for electronic components." },
  { icon: Lightbulb, title: "Green Innovation Projects", desc: "Research initiatives focused on renewable energy and eco-friendly automation." },
  { icon: HeartHandshake, title: "Ethical & Responsible Engineering", desc: "Commitment to societal benefit and environmental stewardship in all projects." },
];

const SustainabilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative z-10">
      <div ref={ref} className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-neon-green mb-3 text-center green-glow">
          Sustainability
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-12">
          Environmental <span className="text-gradient-green">Initiative</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="glass-card p-7 border-neon-green/10 hover:border-neon-green/30 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center mb-4 group-hover:bg-neon-green/20 transition-colors">
                <item.icon className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
