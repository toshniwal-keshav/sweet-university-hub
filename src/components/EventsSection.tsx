import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RegisterModal from "@/components/RegisterModal";

const events = [
  { title: "National Hackathon 2026", date: "Apr 15", month: "APR", desc: "48-hour coding challenge with ₹5L prizes", type: "Tech" },
  { title: "Spectrum Cultural Fest", date: "Apr 22-24", month: "APR", desc: "Annual cultural extravaganza with 50+ events", type: "Cultural" },
  { title: "International Research Symposium", date: "May 5", month: "MAY", desc: "Papers from 20+ countries", type: "Academic" },
  { title: "Alumni Homecoming 2026", date: "May 15", month: "MAY", desc: "Reconnect with your alma mater", type: "Cultural" },
  { title: "AI/ML Workshop Series", date: "Jun 1-5", month: "JUN", desc: "Hands-on deep learning bootcamp", type: "Tech" },
  { title: "Inter-University Sports Meet", date: "Jun 10", month: "JUN", desc: "Compete across 12 disciplines", type: "Sports" },
];

const eventTypes = ["All", "Tech", "Cultural", "Academic", "Sports"];

const typeColors: Record<string, string> = {
  Tech: "bg-teal/10 text-teal",
  Cultural: "bg-coral/10 text-coral",
  Academic: "bg-honey/10 text-honey",
  Sports: "bg-primary/10 text-primary",
};

const EventsSection = () => {
  const [activeType, setActiveType] = useState("All");
  const [registerOpen, setRegisterOpen] = useState(false);

  const filtered = events.filter((e) => activeType === "All" || e.type === activeType);

  return (
    <section id="Admissions" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-honey font-medium text-sm uppercase tracking-widest">Events</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Upcoming Events
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {eventTypes.map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveType(type)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeType === type
                  ? "bg-honey text-honey-foreground shadow-md shadow-honey/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 150 }}
                layout
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                className="bg-card rounded-2xl overflow-hidden border border-border group cursor-pointer"
              >
                <div className="bg-primary/5 px-6 py-4 flex items-center gap-4 group-hover:bg-primary/8 transition-colors">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-honey">{e.date.split(" ")[0]}</div>
                    <div className="text-xs font-medium text-muted-foreground uppercase">{e.month}</div>
                  </div>
                  <div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${typeColors[e.type] || "bg-muted text-muted-foreground"}`}>
                      {e.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{e.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRegisterOpen(true)}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-coral to-coral/90 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-coral/25"
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">No events in this category.</div>
        )}
      </div>

      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} type="apply" />
    </section>
  );
};

export default EventsSection;
