import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Bot, Trophy, Globe, Microscope, Scale } from "lucide-react";

const objectives = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Workshops and hands-on training in modern AI frameworks and algorithms." },
  { icon: Bot, title: "Robotics & Automation", desc: "Practical training in robotic systems, embedded programming, and automation." },
  { icon: Trophy, title: "Hackathons & Contests", desc: "Competitive coding, hackathons, and algorithmic problem-solving events." },
  { icon: Globe, title: "National & Intl. Competitions", desc: "Preparing teams for prestigious national and international challenges." },
  { icon: Microscope, title: "Applied Research", desc: "Mentorship-driven research projects with real-world applications." },
  { icon: Scale, title: "Ethics & Leadership", desc: "Technical ethics, professional development, and leadership cultivation." },
];

const ObjectivesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="objectives" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-6xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">
          Mission
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-12">
          Our <span className="text-gradient-blue">Objectives</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="glass-card-hover p-7 group cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <obj.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {obj.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
