import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const campusImages = [
  { label: "Student Life", span: "col-span-2 row-span-2", description: "Vibrant student community with 100+ clubs and organizations" },
  { label: "Sports Arena", span: "col-span-1 row-span-1", description: "Olympic-standard sports facilities with indoor & outdoor courts" },
  { label: "Library", span: "col-span-1 row-span-1", description: "Digital library with 500,000+ resources and 24/7 access" },
  { label: "Tech Labs", span: "col-span-1 row-span-1", description: "State-of-the-art computing and research laboratories" },
  { label: "Cultural Fest", span: "col-span-1 row-span-1", description: "Annual cultural extravaganza celebrating diversity and talent" },
];

const colors = ["bg-honey/20", "bg-teal/20", "bg-coral/20", "bg-cotton/30", "bg-primary/10"];

const CampusLifeSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
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
              onClick={() => setSelectedImage(i)}
              className={`${img.span} ${colors[i]} rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              <div className="absolute inset-0 flex items-end p-4">
                <div>
                  <span className="font-heading font-semibold text-foreground text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity">
                    {img.label}
                  </span>
                  <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1 line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground text-xs font-bold">
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-lg w-full rounded-2xl ${colors[selectedImage]} p-12 text-center`}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
              >
                <X size={18} />
              </button>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                {campusImages[selectedImage].label}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {campusImages[selectedImage].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusLifeSection;
