import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      
      {/* Quick Links Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Teams Card */}
            <Link
              to="/teams"
              className="group relative overflow-hidden rounded-2xl p-8 glass-card hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold">Explore Teams</h3>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Join specialized teams working on robotics, AI, and cutting-edge technology projects.
                </p>
                <div className="text-primary font-semibold text-sm uppercase tracking-wider">
                  View All Teams →
                </div>
              </div>
            </Link>

            {/* Events Card */}
            <Link
              to="/events"
              className="group relative overflow-hidden rounded-2xl p-8 glass-card hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold">Events</h3>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Participate in workshops, hackathons, competitions, and tech showcases.
                </p>
                <div className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Upcoming Events →
                </div>
              </div>
            </Link>

            {/* Join Card */}
            <Link
              to="/join"
              className="group relative overflow-hidden rounded-2xl p-8 glass-card hover:scale-105 transition-all duration-500 border-2 border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-primary">Join SPARKS</h3>
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Become part of an elite community of innovators and tech enthusiasts.
                </p>
                <div className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Apply Now →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl font-display font-bold text-primary mb-2 animate-pulse">500+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Active Members</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl font-display font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Live Projects</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl font-display font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Events Hosted</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl font-display font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SPARKS Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gradient">
              Why Choose SPARKS?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're not just a club — we're a movement towards technological excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">
                    Access to state-of-the-art labs, latest tools, and emerging technologies in robotics and AI.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Competition Excellence</h3>
                  <p className="text-muted-foreground">
                    Compete in national and international robotics competitions with mentorship from experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Hands-On Learning</h3>
                  <p className="text-muted-foreground">
                    Learn by doing with real-world projects, workshops, and collaborative team environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Network & Collaborate</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded innovators, industry professionals, and build lasting partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About Preview */}
            <div className="glass-card rounded-2xl p-8 lg:p-12 group hover:scale-[1.02] transition-transform">
              <h3 className="text-3xl font-display font-bold mb-4">About SPARKS</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Society of Programming, Automation, Robotics & Knowledge Systems is an elite university organization 
                dedicated to pushing the boundaries of technology and innovation. We foster a culture of excellence, 
                creativity, and sustainability in everything we do.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Sustainability Preview */}
            <div className="glass-card rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-green-500/10 to-transparent group hover:scale-[1.02] transition-transform">
              <h3 className="text-3xl font-display font-bold mb-4">Sustainable Innovation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're committed to building eco-friendly technological solutions. Our projects focus on creating 
                sustainable robotics systems and AI applications that contribute positively to environmental conservation.
              </p>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Our Sustainability Initiatives <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 border-2 border-primary/30">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Ready to Engineer Intelligence?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Join SPARKS and be part of a revolutionary community shaping the future of robotics, AI, 
              and automation. Your journey to excellence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="btn-glow px-10 py-5 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-lg tracking-wider uppercase hover:scale-105 transition-transform shadow-2xl"
              >
                Join the Movement
              </Link>
              <Link
                to="/teams"
                className="glass-card px-10 py-5 rounded-xl font-heading font-bold text-lg tracking-wider uppercase hover:scale-105 transition-transform border-2 border-primary/30"
              >
                Explore Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
