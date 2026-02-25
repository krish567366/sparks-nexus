import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Bot, Brain, Mic } from "lucide-react";

const events = [
  { icon: Calendar, title: "Hackathons", desc: "Intensive coding marathons with real-world problem statements.", status: "Coming Soon" },
  { icon: Bot, title: "Robotics Challenges", desc: "Design, build, and compete in autonomous robotics contests.", status: "Coming Soon" },
  { icon: Brain, title: "AI Workshops", desc: "Hands-on sessions covering ML, deep learning, and NLP.", status: "Coming Soon" },
  { icon: Mic, title: "Technical Talks", desc: "Expert-led seminars on cutting-edge technology and research.", status: "Coming Soon" },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="events" className="section-padding relative z-10">
      <div ref={ref} className={`max-w-5xl mx-auto animate-in-view ${isVisible ? "visible" : ""}`}>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">
          Calendar
        </p>
        <h2 className="heading-display text-3xl md:text-5xl text-center text-foreground mb-12">
          Upcoming <span className="text-gradient-blue">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((event, i) => (
            <div key={i} className="glass-card-hover p-7 relative overflow-hidden group">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-display tracking-widest uppercase text-primary/60 border border-primary/20 px-3 py-1 rounded-full">
                  {event.status}
                </span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
