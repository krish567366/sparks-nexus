import { Mail, FileDown } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold tracking-widest text-primary mb-3">
              SPARKS
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Society of Programming, Automation, Robotics &amp; Knowledge Systems
            </p>
            <p className="text-xs text-muted-foreground/60 mt-3">
              Department of Automation and Robotics
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["About", "Objectives", "Structure", "Governance", "Events", "Join"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="mailto:sparks@university.edu" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                sparks@university.edu
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <FileDown className="w-4 h-4" />
                Download Constitution (PDF)
              </a>
            </div>

            {/* Social placeholders */}
            <div className="flex gap-3 mt-5">
              {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-3 py-1.5 rounded-md text-xs font-heading text-muted-foreground border border-white/10 hover:border-primary/30 hover:text-primary transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">
            Issued by Founding Members — February 2025
          </p>
          <p className="text-xs text-muted-foreground/50">
            © 2025 SPARKS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
