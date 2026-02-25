import { Mail, FileDown } from "lucide-react";
import sparksLogo from "@/assets/sparks-logo.png";

const FooterSection = () => {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={sparksLogo} alt="SPARKS" className="w-8 h-8 object-contain" />
              <span className="font-display text-lg font-bold tracking-[0.2em] text-primary">SPARKS</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Society of Programming, Automation, Robotics &amp; Knowledge Systems
            </p>
            <p className="text-[10px] text-muted-foreground/50 mt-3">
              Department of Automation and Robotics
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold text-foreground/80 uppercase tracking-[0.15em] mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["About", "Structure", "Teams", "Sustainability", "Events", "Join"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold text-foreground/80 uppercase tracking-[0.15em] mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="mailto:sparks@university.edu" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> sparks@university.edu
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                <FileDown className="w-4 h-4" /> Download Constitution (PDF)
              </a>
            </div>
            <div className="flex gap-3 mt-5">
              {["LinkedIn", "GitHub", "Twitter"].map((s) => (
                <a key={s} href="#" className="px-3 py-1.5 rounded-md text-[10px] font-heading text-muted-foreground border border-white/[0.06] hover:border-primary/20 hover:text-primary transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-muted-foreground/40">Issued by Founding Members — February 2025</p>
          <p className="text-[10px] text-muted-foreground/40">© 2025 SPARKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
