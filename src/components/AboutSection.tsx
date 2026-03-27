import { motion } from "framer-motion";
import { BookOpen, Globe, Award, Lightbulb } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Academic Excellence", desc: "World-class curriculum designed with industry experts" },
  { icon: Globe, title: "Global Exposure", desc: "Partnerships with 50+ international universities" },
  { icon: Award, title: "Research Driven", desc: "₹200 Cr+ annual research funding" },
  { icon: Lightbulb, title: "Innovation Hub", desc: "State-of-the-art incubation center" },
];

const AboutSection = () => (
  <section id="About" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-honey font-medium text-sm uppercase tracking-widest">About Us</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          A Legacy of Excellence
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          Founded in 1985, UniExcel has been at the forefront of education and innovation, 
          producing leaders who shape the world.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 card-hover border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center mb-4">
              <f.icon className="text-honey" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
