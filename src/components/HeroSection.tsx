import { motion } from "framer-motion";
import heroBg from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="Home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 bg-foreground/20" />

      <div className="relative section-container pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-honey/20 text-honey font-medium text-sm mb-6 backdrop-blur-sm">
            Ranked #1 in Innovation
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground mb-6">
            Shaping Future{" "}
            <span className="text-primary">Innovators</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Empowering minds with world-class education, cutting-edge research, 
            and industry-driven learning experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("Admissions")}
              className="px-8 py-3.5 rounded-2xl bg-coral text-coral-foreground font-semibold text-base transition-all hover:shadow-xl hover:shadow-coral/30 hover:scale-105"
            >
              Apply Now
            </button>
            <button className="px-8 py-3.5 rounded-2xl border-2 border-teal text-teal font-semibold text-base transition-all hover:bg-teal hover:text-teal-foreground backdrop-blur-sm">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
