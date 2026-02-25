import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Leaf, Zap, Recycle, Lightbulb, HeartHandshake } from "lucide-react";

const initiatives = [
  { icon: Leaf, title: "Sustainable Robotics", desc: "Designing systems with minimal environmental footprint and sustainable materials." },
  { icon: Zap, title: "Energy Efficient Systems", desc: "Optimizing power consumption across all automated solutions." },
  { icon: Recycle, title: "E-Waste Management", desc: "Responsible disposal and recycling of electronic components." },
  { icon: Lightbulb, title: "Green Innovation Projects", desc: "Research focused on renewable energy and eco-friendly automation." },
  { icon: HeartHandshake, title: "Responsible Engineering", desc: "Commitment to societal benefit and environmental stewardship." },
];

const SustainabilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sustainability" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-xs tracking-[0.4em] uppercase mb-3 text-center text-neon-green green-glow">
          Initiative
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-12">
          Environmental <span className="text-gradient-green">Sustainability</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="glass-card p-7 border-neon-green/5 hover:border-neon-green/20 transition-all duration-500 group"
            >
              <div className="w-11 h-11 rounded-lg bg-neon-green/8 flex items-center justify-center mb-4 group-hover:bg-neon-green/15 transition-colors border border-neon-green/10">
                <item.icon className="w-5 h-5 text-neon-green" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
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
