import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, GraduationCap, Building2, Zap } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Official Student-Led Body" },
  { icon: GraduationCap, label: "Faculty Supervised" },
  { icon: Building2, label: "Governed by Binding Constitution" },
  { icon: Zap, label: "Structured Technical Leadership" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-primary mb-3 text-center">
          About
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center mb-8">
          <span className="metallic-shimmer">What is SPARKS?</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-14 font-body text-sm md:text-base">
          SPARKS is an official student-led society operating under faculty oversight within the
          Department of Automation and Robotics. The society promotes excellence in programming,
          artificial intelligence, robotics, automation, and knowledge systems through structured
          governance and disciplined innovation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-card-hover p-6 flex flex-col items-center gap-4 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center border border-primary/10">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-heading text-xs font-semibold tracking-[0.1em] uppercase text-foreground/80">
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
