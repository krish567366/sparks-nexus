import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Lock, FileText, Users, Package, Gavel, AlertTriangle, Shield, Pencil } from "lucide-react";

const clauses = [
  { icon: Lock, title: "Binding Financial Clause", desc: "All financial transactions require dual authorization and transparent record-keeping." },
  { icon: FileText, title: "Binding Faculty Coordinator Clause", desc: "Faculty coordinators hold ultimate authority over constitutional amendments and critical decisions." },
  { icon: Users, title: "Binding Membership Clause", desc: "Membership governed by strict eligibility, probation, and termination protocols." },
  { icon: Package, title: "Inventory & Stock Register", desc: "Mandatory documentation and tracking of all society assets and equipment." },
  { icon: Gavel, title: "Code of Conduct", desc: "Professional ethics, anti-harassment, and behavioral standards enforced at all levels." },
  { icon: AlertTriangle, title: "Reporting & Conflict Resolution", desc: "Structured escalation pathways with mandatory mediation before formal proceedings." },
  { icon: Shield, title: "Enforcement Authority", desc: "Disciplinary actions range from warnings to permanent expulsion per constitutional mandate." },
  { icon: Pencil, title: "Amendment Protection", desc: "Constitutional amendments require supermajority approval and faculty endorsement." },
];

const GovernanceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="governance" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-6xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">
          Constitution
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-4">
          Constitutional Authority <span className="text-gradient-blue">&amp; Enforcement</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12 max-w-2xl mx-auto">
          SPARKS operates under a binding constitutional framework ensuring accountability,
          transparency, and disciplined governance at every organizational level.
        </p>

        {/* Executive order style border */}
        <div className="border border-primary/20 rounded-xl p-1 neon-border-glow">
          <div className="border border-primary/10 rounded-lg p-6 md:p-10">
            <div className="text-center mb-8">
              <p className="font-display text-xs tracking-[0.5em] text-primary/60 uppercase">
                Official Document
              </p>
              <div className="w-16 h-px bg-primary/30 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clauses.map((clause, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <clause.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-foreground mb-1">
                      {clause.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {clause.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="w-16 h-px bg-primary/30 mx-auto mb-3" />
              <p className="font-display text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
                Issued under the authority of the founding members — February 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
