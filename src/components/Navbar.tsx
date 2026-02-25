import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Structure", href: "#structure" },
  { label: "Teams", href: "#teams" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Events", href: "#events" },
  { label: "Join", href: "#join" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold tracking-[0.25em] text-primary">
          SPARKS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-heading font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="btn-glow px-5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-heading font-semibold tracking-[0.15em] uppercase"
          >
            Join SPARKS
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-heading font-medium text-muted-foreground hover:text-primary transition-colors py-2 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
