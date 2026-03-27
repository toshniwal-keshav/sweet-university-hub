import { Trophy, TrendingUp, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { icon: Trophy, value: 1, prefix: "#", suffix: "", label: "NIRF Ranking", color: "text-honey" },
  { icon: TrendingUp, value: 95, prefix: "", suffix: "%", label: "Placement Rate", color: "text-teal" },
  { icon: Users, value: 5000, prefix: "", suffix: "+", label: "Students", color: "text-coral" },
  { icon: Building2, value: 300, prefix: "", suffix: "+", label: "Recruiters", color: "text-primary" },
];

const AnimatedStat = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 1800);

  return (
    <motion.div
      ref={ref}
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl p-6 text-center card-hover"
    >
      <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};

const QuickStats = () => (
  <section className="relative -mt-16 z-10">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <AnimatedStat key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default QuickStats;
