import { motion } from "framer-motion";
import { IndianRupee, TrendingUp, Building2, Users } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const placementStats = [
  { icon: IndianRupee, value: 48, suffix: " LPA", prefix: "₹", label: "Highest Package" },
  { icon: TrendingUp, value: 12, suffix: " LPA", prefix: "₹", label: "Average Package" },
  { icon: Building2, value: 300, suffix: "+", prefix: "", label: "Recruiting Companies" },
  { icon: Users, value: 95, suffix: "%", prefix: "", label: "Placement Rate" },
];

const recruiters = [
  "Google", "Microsoft", "Amazon", "Apple", "Meta",
  "Goldman Sachs", "McKinsey", "Deloitte", "TCS", "Infosys",
  "Wipro", "Adobe",
];

const AnimatedPlacementStat = ({ s, index }: { s: typeof placementStats[0]; index: number }) => {
  const { count, ref } = useCountUp(s.value, 1500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-background rounded-2xl p-6 text-center border border-border"
    >
      <s.icon className="mx-auto text-honey mb-3" size={28} />
      <div className="font-heading text-2xl font-bold text-foreground">
        {s.prefix}{count}{s.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
    </motion.div>
  );
};

const PlacementsSection = () => (
  <section id="Placements" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-honey font-medium text-sm uppercase tracking-widest">Placements</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Placement Highlights
        </h2>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-4">
          {placementStats.map((s, i) => (
            <AnimatedPlacementStat key={s.label} s={s} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 border border-border"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Our Recruiters</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {recruiters.map((r) => (
              <div
                key={r}
                className="bg-muted rounded-xl p-3 text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-honey/10 transition-colors"
              >
                {r}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlacementsSection;
