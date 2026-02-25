import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Code, Megaphone, PenTool, Handshake, Calendar, Wallet } from "lucide-react";

const teams = [
  {
    code: "TECH",
    name: "Technology Team",
    icon: Code,
    responsibilities: "Core technical development, project architecture, coding standards, and technology research.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "PR",
    name: "Public Relations Team",
    icon: Megaphone,
    responsibilities: "External communications, social media management, branding, and outreach campaigns.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "CONTENT",
    name: "Content Team",
    icon: PenTool,
    responsibilities: "Documentation, blog posts, newsletter, educational content creation.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "SPONSOR",
    name: "Sponsorship Team",
    icon: Handshake,
    responsibilities: "Corporate partnerships, funding acquisition, sponsorship proposals.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "EVENT",
    name: "Event Management Team",
    icon: Calendar,
    responsibilities: "Planning, logistics, and execution of all society events and competitions.",
    head: "TBD",
    members: ["TBD"],
  },
  {
    code: "FINANCE",
    name: "Financial Team",
    icon: Wallet,
    responsibilities: "Budget management, expense tracking, financial reporting, and audit preparation.",
    head: "TBD",
    members: ["TBD"],
  },
];

const TeamsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  return (
    <section id="teams" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-6xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-primary mb-3 text-center">
          Divisions
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center mb-14">
          <span className="metallic-shimmer">Functional Teams</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map((team) => {
            const isExpanded = expandedTeam === team.code;
            return (
              <div
                key={team.code}
                className={`glass-card-hover overflow-hidden transition-all duration-500 ${
                  isExpanded ? "neon-border-glow" : ""
                }`}
              >
                <button
                  onClick={() => setExpandedTeam(isExpanded ? null : team.code)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center border border-primary/10 flex-shrink-0">
                    <team.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[10px] text-primary/60 tracking-[0.2em] uppercase">
                      {team.code}
                    </p>
                    <p className="font-heading text-sm font-semibold text-foreground truncate">
                      {team.name}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
                    <div>
                      <p className="text-[10px] text-primary font-heading uppercase tracking-[0.15em] mb-1">Head</p>
                      <p className="text-xs text-foreground/70">{team.head}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-primary font-heading uppercase tracking-[0.15em] mb-1">Members</p>
                      <p className="text-xs text-foreground/70">{team.members.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-primary font-heading uppercase tracking-[0.15em] mb-1">Responsibilities</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{team.responsibilities}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
