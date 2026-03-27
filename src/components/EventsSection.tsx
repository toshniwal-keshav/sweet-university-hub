import { motion } from "framer-motion";

const events = [
  { title: "National Hackathon 2026", date: "Apr 15", month: "APR", desc: "48-hour coding challenge with ₹5L prizes", type: "Tech" },
  { title: "Spectrum Cultural Fest", date: "Apr 22-24", month: "APR", desc: "Annual cultural extravaganza with 50+ events", type: "Cultural" },
  { title: "International Research Symposium", date: "May 5", month: "MAY", desc: "Papers from 20+ countries", type: "Academic" },
];

const EventsSection = () => (
  <section id="Admissions" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-honey font-medium text-sm uppercase tracking-widest">Events</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Upcoming Events
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden border border-border card-hover"
          >
            <div className="bg-honey/10 px-6 py-4 flex items-center gap-4">
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-honey">{e.date.split(" ")[0]}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase">{e.month}</div>
              </div>
              <div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal font-medium">{e.type}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{e.desc}</p>
              <button className="px-5 py-2 rounded-xl bg-coral text-coral-foreground text-sm font-medium transition-all hover:shadow-lg hover:shadow-coral/25">
                Register
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
