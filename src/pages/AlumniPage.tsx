import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import RegisterModal from "@/components/RegisterModal";
import { motion } from "framer-motion";
import { Linkedin, Award, Users, Globe } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import campusGraduation from "@/assets/campus-graduation.png";

const alumniStats = [
  { icon: Users, value: 50000, suffix: "+", label: "Alumni Worldwide" },
  { icon: Globe, value: 60, suffix: "+", label: "Countries" },
  { icon: Award, value: 500, suffix: "+", label: "Entrepreneurs" },
  { icon: Linkedin, value: 200, suffix: "+", label: "Industry Leaders" },
];

const notableAlumni = [
  {
    name: "Dr. Ananya Mehta",
    role: "CTO, TechVision Inc.",
    batch: "2005",
    achievement: "Built a $2B AI startup from campus dorm to NASDAQ listing. Pioneer in healthcare AI.",
  },
  {
    name: "Rajesh Kumar",
    role: "Founder, GreenTech Solutions",
    batch: "2008",
    achievement: "Forbes 30 Under 30. Leading sustainable energy innovation across Southeast Asia.",
  },
  {
    name: "Dr. Fatima Zahra",
    role: "Research Director, CERN",
    batch: "2003",
    achievement: "Published 100+ papers in particle physics. Key contributor to the Higgs boson discovery team.",
  },
  {
    name: "Vikram Singh",
    role: "VP Engineering, Google",
    batch: "2007",
    achievement: "Leading Google Cloud's AI/ML division. Architect of Google's real-time translation system.",
  },
  {
    name: "Meera Nair",
    role: "CEO, HealthBridge",
    batch: "2010",
    achievement: "Revolutionizing rural healthcare with telemedicine. Impact: 5M+ patients served.",
  },
  {
    name: "Arjun Desai",
    role: "Director, Goldman Sachs",
    batch: "2009",
    achievement: "Youngest MD in Goldman Sachs Asia. Expert in fintech and blockchain solutions.",
  },
];

const AnimatedAlumniStat = ({ stat, index }: { stat: typeof alumniStats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 1500);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <stat.icon className="mx-auto mb-3 text-honey" size={28} />
      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};

const AlumniPage = () => {
  const [registerType, setRegisterType] = useState<"alumni" | "mentor" | null>(null);

  return (
    <PageLayout>
      <PageHero
        title="Alumni Network"
        subtitle="Our alumni are changemakers across the globe — leading companies, pioneering research, and mentoring the next generation of innovators."
        badge="50,000+ Alumni"
        breadcrumbs={[{ label: "Alumni" }]}
      />

      {/* Featured Alumni Image */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="image-card rounded-2xl overflow-hidden h-80">
              <img
                src={campusGraduation}
                alt="Graduation ceremony"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {alumniStats.map((stat, i) => (
                  <AnimatedAlumniStat key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-teal font-medium text-sm uppercase tracking-widest">
              Leaders & Innovators
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Notable Alumni
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableAlumni.map((alum, i) => (
              <motion.div
                key={alum.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center mb-4 font-heading text-lg font-bold text-foreground">
                  {alum.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{alum.name}</h3>
                <p className="text-sm text-teal font-medium mb-1">{alum.role}</p>
                <p className="text-xs text-muted-foreground mb-3">Batch of {alum.batch}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{alum.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Mentorship CTA */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-teal p-10 md:p-16 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join the Alumni Network
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Connect with fellow alumni, mentor students, and stay involved with your alma mater. Your experience can shape the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setRegisterType("alumni")}
                className="px-8 py-3.5 rounded-2xl bg-coral text-coral-foreground font-semibold transition-all hover:shadow-xl hover:scale-105"
              >
                Register as Alumni
              </button>
              <button
                onClick={() => setRegisterType("mentor")}
                className="px-8 py-3.5 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold transition-all hover:bg-primary-foreground/10"
              >
                Become a Mentor
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Register Modal */}
      {registerType && (
        <RegisterModal
          isOpen={!!registerType}
          onClose={() => setRegisterType(null)}
          type={registerType}
        />
      )}
    </PageLayout>
  );
};

export default AlumniPage;
