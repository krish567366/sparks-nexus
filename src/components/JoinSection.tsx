import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const JoinSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({
    name: "", department: "", year: "", interest: "", reason: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll review your request.");
    setForm({ name: "", department: "", year: "", interest: "", reason: "" });
  };

  const inputClasses = "w-full bg-muted/40 border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 transition-all duration-300 font-body";

  return (
    <section id="join" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-2xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-primary mb-3 text-center">
          Enlist
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center mb-4">
          <span className="metallic-shimmer">Join SPARKS</span>
        </h2>
        <p className="text-center text-muted-foreground text-xs mb-10">
          Submit your application for membership review.
        </p>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 neon-border-glow">
          <div>
            <label className="block text-[10px] font-heading text-muted-foreground uppercase tracking-[0.15em] mb-2">Name</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} placeholder="Full Name" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-heading text-muted-foreground uppercase tracking-[0.15em] mb-2">Department</label>
              <input required value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className={inputClasses} placeholder="e.g. Automation & Robotics" />
            </div>
            <div>
              <label className="block text-[10px] font-heading text-muted-foreground uppercase tracking-[0.15em] mb-2">Year</label>
              <select required value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className={inputClasses}>
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-heading text-muted-foreground uppercase tracking-[0.15em] mb-2">Domain of Interest</label>
            <input required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={inputClasses} placeholder="e.g. AI, Robotics, Automation..." />
          </div>

          <div>
            <label className="block text-[10px] font-heading text-muted-foreground uppercase tracking-[0.15em] mb-2">Why SPARKS?</label>
            <textarea required rows={4} value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Tell us about your motivation..." />
          </div>

          <button
            type="submit"
            className="btn-glow w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold tracking-[0.15em] uppercase text-sm"
          >
            Apply to SPARKS
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinSection;
