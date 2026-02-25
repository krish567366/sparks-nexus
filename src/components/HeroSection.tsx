import { motion } from "framer-motion";
import { Users, Layers, Cpu, GraduationCap } from "lucide-react";
import sparksLogo from "@/assets/sparks-logo.png";

const stats = [
  { icon: Users, value: "7+", label: "Founding Members" },
  { icon: Layers, value: "6", label: "Functional Teams" },
  { icon: Cpu, label: "AI · Robotics · Automation" },
  { icon: GraduationCap, label: "Faculty Supervised" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient bg */}
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse at 50% 40%, hsl(211 60% 8%) 0%, hsl(220 35% 3%) 70%)",
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(211 100% 52% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(211 100% 52% / 0.4) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Animated circuit lines radiating from center */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              width: `${300 + i * 100}px`,
              transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
              animation: `circuit-flow ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={sparksLogo}
              alt="SPARKS Logo"
              className="w-36 h-36 md:w-48 md:h-48 object-contain animate-logo-lightning"
              style={{
                filter: "drop-shadow(0 0 15px hsl(211 100% 52% / 0.3))",
              }}
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl metallic-shimmer mb-4"
          >
            SPARKS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-3"
          >
            Society of Programming, Automation, Robotics &amp; Knowledge Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-heading text-lg md:text-2xl font-light text-foreground/70 mb-10"
          >
            Engineering Intelligence. Enforcing Excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a
              href="#join"
              className="btn-glow px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold tracking-[0.15em] uppercase text-sm"
            >
              Join the Movement
            </a>
            <a
              href="#events"
              className="btn-glow-outline px-8 py-3 rounded-lg border border-primary/30 text-primary font-heading font-semibold tracking-[0.15em] uppercase text-sm"
            >
              View Events
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-5 flex flex-col items-center gap-2 group hover:border-primary/20 transition-all duration-500">
              <stat.icon className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              {stat.value && (
                <span className="font-display text-2xl font-bold metallic-text">{stat.value}</span>
              )}
              <span className="text-[10px] font-heading text-muted-foreground tracking-[0.15em] uppercase text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-primary/20 flex justify-center pt-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
