import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Crown, Users, Layers } from "lucide-react";

const OrganizationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="structure" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-primary mb-3 text-center">
          Hierarchy
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center mb-16">
          <span className="metallic-shimmer">Organizational Structure</span>
        </h2>

        {/* Hierarchy */}
        <div className="space-y-8">
          {/* Top Layer - Faculty */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-5">
              <Crown className="w-5 h-5 text-primary" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Faculty Authority
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { role: "Chief Faculty Coordinator", name: "Dr. S.A.H. Rizvi" },
                { role: "Deputy Faculty Coordinator", name: "Mr. Satyendra Kumar Mishra" },
              ].map((f, i) => (
                <div key={i} className="glass-card p-6 text-center neon-border-glow">
                  <p className="text-[10px] font-heading text-primary tracking-[0.2em] uppercase mb-2">
                    {f.role}
                  </p>
                  <p className="font-heading text-lg font-semibold metallic-text">{f.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connector line */}
          <div className="flex justify-center">
            <div className="w-px h-10 bg-gradient-to-b from-primary/30 to-primary/5" />
          </div>

          {/* Founding Members */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-5">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Founding Members
              </span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6", "Member 7"].map((m, i) => (
                <span key={i} className="glass-card px-5 py-2.5 font-heading text-xs text-foreground/70 tracking-wide">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Connector line */}
          <div className="flex justify-center">
            <div className="w-px h-10 bg-gradient-to-b from-primary/30 to-primary/5" />
          </div>

          {/* Functional Teams label */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Functional Teams
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">See detailed team cards below ↓</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
