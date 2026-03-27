import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GraduationCap, FlaskConical, Users, Building2, ArrowRight } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Academics", desc: "World-class programs across 15+ departments", link: "/academics", color: "text-honey" },
  { icon: FlaskConical, title: "Research", desc: "Cutting-edge labs and 200+ publications yearly", link: "/research", color: "text-teal" },
  { icon: Users, title: "Placements", desc: "95% placement rate with 300+ top recruiters", link: "/placements", color: "text-coral" },
  { icon: Building2, title: "Campus Life", desc: "50+ clubs, sports facilities & vibrant culture", link: "/campus-life", color: "text-primary" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickStats />

      {/* Highlights Grid */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-teal font-medium text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Excellence in Every Dimension
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(item.link)}
                className="group bg-card border border-border rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-teal group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-teal p-10 md:p-16 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Shape Your Future?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Applications are open for 2026-27. Join a community of innovators, thinkers, and leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/admissions")}
                className="px-8 py-3.5 rounded-2xl bg-coral text-coral-foreground font-semibold transition-all hover:shadow-xl hover:scale-105"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3.5 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold transition-all hover:bg-primary-foreground/10"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
