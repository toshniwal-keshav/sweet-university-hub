import { Trophy, TrendingUp, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Trophy, value: "#1", label: "NIRF Ranking", color: "text-honey" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate", color: "text-teal" },
  { icon: Users, value: "5000+", label: "Students", color: "text-coral" },
  { icon: Building2, value: "300+", label: "Recruiters", color: "text-primary" },
];

const QuickStats = () => (
  <section className="relative -mt-16 z-10">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center card-hover"
          >
            <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
            <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickStats;
