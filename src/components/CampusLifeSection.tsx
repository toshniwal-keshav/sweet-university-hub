import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import campusLife from "@/assets/campus-life.png";
import campusLibrary from "@/assets/campus-library.png";
import campusResearch from "@/assets/campus-research.png";
import campusSports from "@/assets/campus-sports.png";
import campusGraduation from "@/assets/campus-graduation.png";

const campusImages = [
  { label: "Student Life", span: "col-span-2 row-span-2", description: "Vibrant student community with 100+ clubs and organizations", image: campusLife },
  { label: "Sports Arena", span: "col-span-1 row-span-1", description: "Olympic-standard sports facilities with indoor & outdoor courts", image: campusSports },
  { label: "Library", span: "col-span-1 row-span-1", description: "Digital library with 500,000+ resources and 24/7 access", image: campusLibrary },
  { label: "Research Labs", span: "col-span-1 row-span-1", description: "State-of-the-art computing and research laboratories", image: campusResearch },
  { label: "Graduation", span: "col-span-1 row-span-1", description: "Celebrating academic excellence and the start of bright futures", image: campusGraduation },
];

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
          <span className="text-teal font-medium text-sm uppercase tracking-widest">
            Experience
          </span>
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
              className={`${img.span} image-card rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              <img
                src={img.image}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex items-end p-4">
                <div>
                  <span className="font-heading font-semibold text-white text-sm md:text-base drop-shadow-md">
                    {img.label}
                  </span>
                  <p className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity mt-1 line-clamp-2 drop-shadow">
                    {img.description}
                  </p>
                </div>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={campusImages[selectedImage].image}
                alt={campusImages[selectedImage].label}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors text-white"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {campusImages[selectedImage].label}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {campusImages[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusLifeSection;
