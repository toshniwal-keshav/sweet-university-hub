import { motion } from "framer-motion";
import { Home, BookOpen, Dumbbell, Bus, Coffee, FlaskConical, Wifi, Theater } from "lucide-react";

const facilities = [
  { icon: Home, name: "Hostel", bg: "bg-honey/10", color: "text-honey" },
  { icon: BookOpen, name: "Library", bg: "bg-teal/10", color: "text-teal" },
  { icon: Dumbbell, name: "Sports Complex", bg: "bg-coral/10", color: "text-coral" },
  { icon: Bus, name: "Transport", bg: "bg-primary/10", color: "text-primary" },
  { icon: Coffee, name: "Cafeteria", bg: "bg-cotton/20", color: "text-honey" },
  { icon: FlaskConical, name: "Research Labs", bg: "bg-teal/10", color: "text-teal" },
  { icon: Wifi, name: "Smart Campus", bg: "bg-coral/10", color: "text-coral" },
  { icon: Theater, name: "Auditorium", bg: "bg-honey/10", color: "text-honey" },
];

const FacilitiesSection = () => (
  <section id="Research" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-teal font-medium text-sm uppercase tracking-widest">Facilities</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          World-Class Facilities
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {facilities.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-2xl p-6 text-center card-hover border border-border"
          >
            <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mx-auto mb-3`}>
              <f.icon className={f.color} size={26} />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground">{f.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
