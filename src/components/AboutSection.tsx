import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, GraduationCap, Building2, FileText } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Officially Governed" },
  { icon: GraduationCap, label: "Faculty-Supervised" },
  { icon: Building2, label: "Structured Framework" },
  { icon: FileText, label: "Constitutional Authority" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative z-10">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}
      >
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">
          About
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-8">
          What is <span className="text-gradient-blue">SPARKS</span>?
        </h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-body">
          SPARKS is an official student-led society operating under faculty oversight within the
          Department of Automation and Robotics. The society promotes excellence in programming,
          artificial intelligence, robotics, automation, and knowledge systems through structured
          governance and disciplined innovation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-card-hover p-6 flex flex-col items-center gap-3 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h.icon className="w-7 h-7 text-primary" />
              <span className="font-heading text-sm font-semibold tracking-wide uppercase text-foreground">
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
