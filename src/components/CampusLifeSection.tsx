import { motion } from "framer-motion";

const campusImages = [
  { label: "Student Life", span: "col-span-2 row-span-2" },
  { label: "Sports Arena", span: "col-span-1 row-span-1" },
  { label: "Library", span: "col-span-1 row-span-1" },
  { label: "Tech Labs", span: "col-span-1 row-span-1" },
  { label: "Cultural Fest", span: "col-span-1 row-span-1" },
];

const colors = ["bg-honey/20", "bg-teal/20", "bg-coral/20", "bg-cotton/30", "bg-primary/10"];

const CampusLifeSection = () => (
  <section id="Campus Life" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-teal font-medium text-sm uppercase tracking-widest">Experience</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Campus Life
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {campusImages.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`${img.span} ${colors[i]} rounded-2xl overflow-hidden relative group cursor-pointer`}
          >
            <div className="absolute inset-0 flex items-end p-4">
              <span className="font-heading font-semibold text-foreground text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CampusLifeSection;
