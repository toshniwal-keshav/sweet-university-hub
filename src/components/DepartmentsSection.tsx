import { motion } from "framer-motion";
import { Cpu, Radio, FlaskConical, Building, Briefcase, PenTool } from "lucide-react";

const departments = [
  { icon: Cpu, name: "Computer Science", desc: "AI, ML, Data Science & Cybersecurity" },
  { icon: Radio, name: "Electronics & Communication", desc: "VLSI, Embedded Systems & IoT" },
  { icon: FlaskConical, name: "Chemical Engineering", desc: "Process Design & Green Chemistry" },
  { icon: Building, name: "Civil Engineering", desc: "Structural Design & Smart Cities" },
  { icon: Briefcase, name: "Business Administration", desc: "Finance, Marketing & Entrepreneurship" },
  { icon: PenTool, name: "Design", desc: "UX/UI, Product & Industrial Design" },
];

const DepartmentsSection = () => (
  <section id="Departments" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-coral font-medium text-sm uppercase tracking-widest">Explore</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Our Departments
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-2xl p-6 border border-border card-hover cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-teal group-hover:text-teal-foreground text-teal">
              <d.icon size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{d.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepartmentsSection;
