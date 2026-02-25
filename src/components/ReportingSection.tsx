import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ClipboardList, DollarSign, Archive, CheckCircle } from "lucide-react";

const frameworks = [
  { icon: ClipboardList, title: "Monthly Reporting Framework", desc: "Structured reports submitted to faculty on all activities and progress." },
  { icon: DollarSign, title: "Financial Transparency", desc: "Complete financial records maintained and available for review." },
  { icon: Archive, title: "Inventory Register", desc: "All assets tracked with detailed stock register documentation." },
  { icon: CheckCircle, title: "Audit Ready Structure", desc: "Organizational processes designed for seamless internal and external audits." },
];

const ReportingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative z-10">
      <div ref={ref} className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">
          Accountability
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-12">
          Reporting <span className="text-gradient-blue">&amp; Governance</span>
        </h2>

        {/* Workflow diagram style */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20" />
          <div className="space-y-6">
            {frameworks.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-4 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className={`glass-card-hover p-6 inline-block ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <item.icon className="w-5 h-5 text-primary" />
                      <h4 className="font-heading text-base font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary/30 border-2 border-primary flex-shrink-0 z-10" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingSection;
