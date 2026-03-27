import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  { title: "UniExcel Bags National Innovation Award 2024", date: "Mar 15, 2026", tag: "Achievement" },
  { title: "New AI Research Center Inaugurated", date: "Mar 10, 2026", tag: "Research" },
  { title: "MoU Signed with MIT for Student Exchange", date: "Mar 5, 2026", tag: "Partnership" },
  { title: "Hackathon 2026 Registrations Now Open", date: "Feb 28, 2026", tag: "Event" },
];

const NewsSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-coral font-medium text-sm uppercase tracking-widest">Latest</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          News & Announcements
        </h2>
      </motion.div>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {news.map((n, i) => (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[300px] sm:min-w-[340px] bg-background rounded-2xl p-6 border border-border card-hover snap-start flex flex-col"
          >
            <span className="inline-block self-start px-3 py-1 rounded-full bg-honey/10 text-honey text-xs font-medium mb-4">
              {n.tag}
            </span>
            <h3 className="font-heading text-base font-semibold text-foreground mb-3 leading-snug">
              {n.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto mb-3">
              <Calendar size={14} />
              {n.date}
            </div>
            <button className="flex items-center gap-1 text-sm font-medium text-teal hover:gap-2 transition-all">
              Read More <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
