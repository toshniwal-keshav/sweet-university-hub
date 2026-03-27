import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import QuickStats from "@/components/QuickStats";
import { motion } from "framer-motion";
import { BookOpen, Globe, Award, Lightbulb, Users, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const timeline = [
  { year: "1985", title: "Founded", desc: "Started with 3 departments and 200 students" },
  { year: "1995", title: "NAAC Accreditation", desc: "First NAAC accreditation with 'A' grade" },
  { year: "2005", title: "Research Center", desc: "Established dedicated research center" },
  { year: "2015", title: "International Recognition", desc: "Ranked in QS World Top 200" },
  { year: "2024", title: "NAAC A++", desc: "Highest ever accreditation grade" },
];

const values = [
  { icon: BookOpen, title: "Academic Excellence", desc: "World-class curriculum designed with industry experts to prepare students for the challenges of tomorrow.", color: "bg-honey/10 text-honey" },
  { icon: Globe, title: "Global Perspective", desc: "Partnerships with 50+ international universities for student exchange and collaborative research programs.", color: "bg-teal/10 text-teal" },
  { icon: Lightbulb, title: "Innovation", desc: "State-of-the-art incubation center fostering entrepreneurship and breakthrough research.", color: "bg-coral/10 text-coral" },
  { icon: Award, title: "Excellence", desc: "Commitment to producing leaders who shape the world across all sectors and industries.", color: "bg-primary/10 text-primary" },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-honey/10 via-background to-teal/10 section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-teal font-medium text-sm uppercase tracking-widest">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              A Legacy of Excellence Since 1985
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              UniExcel has been at the forefront of education and innovation for nearly four decades, producing leaders who shape the world across every industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/admissions")}
                className="px-8 py-3.5 rounded-2xl bg-coral text-coral-foreground font-semibold transition-all hover:shadow-xl hover:shadow-coral/30 hover:scale-105"
              >
                Join Our Community
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3.5 rounded-2xl border-2 border-border text-foreground font-semibold transition-all hover:bg-muted flex items-center gap-2"
              >
                Contact Us <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Stats */}
      <QuickStats />

      {/* Core Values */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-coral font-medium text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              What Drives Us
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-honey font-medium text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Milestones Over the Years
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border" />
                )}
                {/* Dot */}
                <div className="w-10 h-10 rounded-full bg-honey flex items-center justify-center shrink-0 z-10">
                  <Calendar className="text-honey-foreground" size={18} />
                </div>
                {/* Content */}
                <div className="bg-card rounded-2xl p-6 border border-border flex-1 card-hover">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-honey font-bold text-xl">{item.year}</span>
                    <span className="px-3 py-1 rounded-full bg-honey/10 text-honey text-xs font-medium">{item.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-teal font-medium text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Visionary Leaders
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dr. Rajesh Kumar", role: "Vice Chancellor", exp: "25+ years in academia" },
              { name: "Dr. Priya Sharma", role: "Dean Academics", exp: "20+ years research experience" },
              { name: "Prof. Amit Patel", role: "Dean Students", exp: "15+ years in student affairs" },
            ].map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border text-center card-hover"
              >
                <div className="w-20 h-20 rounded-full bg-honey/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-honey" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{leader.name}</h3>
                <p className="text-sm text-teal font-medium">{leader.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{leader.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-coral font-medium text-sm uppercase tracking-widest">Location</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Find Us
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <MapPin className="text-teal" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">UniExcel Campus</h3>
                <p className="text-muted-foreground mb-4">
                  Innovation Drive, Tech Park Area<br />
                  Bangalore 560001, Karnataka, India
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="text-teal font-medium">+91 80 1234 5678</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-teal font-medium">info@uniexcel.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;