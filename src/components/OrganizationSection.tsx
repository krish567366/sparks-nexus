import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Crown, Users } from "lucide-react";

const facultyAuthority = [
  { role: "Chief Faculty Coordinator", name: "Dr. S.A.H. Rizvi" },
  { role: "Deputy Faculty Coordinator", name: "Mr. Satyendra Kumar Mishra" },
];

const foundingMembers = [
  "Member 1", "Member 2", "Member 3", "Member 4",
  "Member 5", "Member 6", "Member 7",
];

const teams = [
  {
    code: "TECH",
    name: "Technology Team",
    responsibilities: "Core technical development, project architecture, coding standards, and technology research.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "PR",
    name: "Public Relations Team",
    responsibilities: "External communications, social media management, branding, and outreach campaigns.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "CONTENT",
    name: "Content Team",
    responsibilities: "Documentation, blog posts, newsletter, educational content creation.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "SPONSOR",
    name: "Sponsorship Team",
    responsibilities: "Corporate partnerships, funding acquisition, sponsorship proposals.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "EVENT",
    name: "Event Management Team",
    responsibilities: "Planning, logistics, and execution of all society events and competitions.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "FINANCE",
    name: "Financial Team",
    responsibilities: "Budget management, expense tracking, financial reporting, and audit preparation.",
    head: "TBD",
    members: ["TBD"],
  },
];

const OrganizationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  return (
    <section id="structure" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-6xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">
          Hierarchy
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-14">
          Organizational <span className="text-gradient-blue">Structure</span>
        </h2>

        {/* Faculty Authority */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5 justify-center">
            <Crown className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-semibold text-foreground tracking-wide uppercase">
              Faculty Authority
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {facultyAuthority.map((f, i) => (
              <div key={i} className="glass-card p-6 text-center neon-border-glow">
                <p className="text-xs font-heading text-primary tracking-widest uppercase mb-2">
                  {f.role}
                </p>
                <p className="font-heading text-lg font-semibold text-foreground">
                  {f.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founding Members */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5 justify-center">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-semibold text-foreground tracking-wide uppercase">
              Founding Members
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {foundingMembers.map((m, i) => (
              <span
                key={i}
                className="glass-card px-5 py-2 font-heading text-sm text-foreground/80"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Functional Teams */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground tracking-wide uppercase text-center mb-6">
            Functional Teams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.map((team) => (
              <div key={team.code} className="glass-card-hover overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedTeam(expandedTeam === team.code ? null : team.code)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs text-primary tracking-widest">
                      {team.code}
                    </span>
                    <span className="font-heading text-base font-semibold text-foreground">
                      {team.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                      expandedTeam === team.code ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedTeam === team.code && (
                  <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
                    <div>
                      <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Head</p>
                      <p className="text-sm text-foreground/80">{team.head}</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Members</p>
                      <p className="text-sm text-foreground/80">{team.members.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Responsibilities</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{team.responsibilities}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
