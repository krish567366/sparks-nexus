import { motion } from "framer-motion";
import { Users, Layers, Cpu, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "7+", label: "Founding Members" },
  { icon: Layers, value: "5+", label: "Functional Teams" },
  { icon: Cpu, label: "AI · Robotics · Automation" },
  { icon: Shield, label: "University-Level Authority" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-background/80" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(210 100% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 55% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Society of Programming, Automation, Robotics &amp; Knowledge Systems
          </p>

          <h1 className="heading-display text-6xl md:text-8xl lg:text-9xl neon-glow text-primary mb-6">
            SPARKS
          </h1>

          <p className="font-heading text-lg md:text-2xl font-light text-foreground/80 mb-2">
            Engineering Intelligence. Enforcing Excellence.
          </p>
          <p className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Programming · Automation · Robotics · Knowledge Systems
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="#join"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold tracking-wide uppercase text-sm hover:shadow-[0_0_30px_hsl(210_100%_55%/0.4)] transition-all duration-300"
            >
              Join SPARKS
            </a>
            <a
              href="#governance"
              className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-heading font-semibold tracking-wide uppercase text-sm hover:bg-primary/10 transition-all duration-300"
            >
              View Constitution
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 flex flex-col items-center gap-2"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              {stat.value && (
                <span className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
              )}
              <span className="text-xs font-heading text-muted-foreground tracking-wide uppercase text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-primary/30 flex justify-center pt-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
