import { motion } from "framer-motion";
import { Shield, Star, Award, Medal } from "lucide-react";

const rankings = [
  { icon: Shield, title: "NAAC A++", desc: "Highest accreditation grade", accent: "bg-honey/10 text-honey" },
  { icon: Star, title: "QS World Top 200", desc: "Global university ranking", accent: "bg-teal/10 text-teal" },
  { icon: Award, title: "Best Innovation Award", desc: "National education awards 2024", accent: "bg-coral/10 text-coral" },
  { icon: Medal, title: "NBA Accredited", desc: "All engineering programs", accent: "bg-primary/10 text-primary" },
];

const RankingsSection = () => (
  <section id="Academics" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-teal font-medium text-sm uppercase tracking-widest">Rankings</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Rankings & Achievements
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rankings.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.06,
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
            }}
            className="bg-background rounded-2xl p-6 text-center border border-border cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              className={`w-14 h-14 rounded-2xl ${r.accent} flex items-center justify-center mx-auto mb-4 transition-colors`}
            >
              <r.icon size={28} />
            </motion.div>
            <h3 className="font-heading text-xl font-bold text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RankingsSection;
