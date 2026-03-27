import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "UniExcel transformed my career trajectory. The mentorship and industry exposure were unparalleled.",
    name: "Priya Sharma",
    role: "Software Engineer, Google",
    batch: "Class of 2022",
  },
  {
    quote: "The research culture here ignited my passion for innovation. I filed 3 patents during my time here.",
    name: "Arjun Mehta",
    role: "Research Scientist, MIT",
    batch: "Class of 2020",
  },
  {
    quote: "From hackathons to placement prep, every experience at UniExcel was a stepping stone to success.",
    name: "Sneha Reddy",
    role: "Product Manager, Microsoft",
    batch: "Class of 2021",
  },
  {
    quote: "The global exposure and industry connections helped me land my dream role right after graduation.",
    name: "Rahul Verma",
    role: "Data Scientist, Amazon",
    batch: "Class of 2023",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setAutoplay(false);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
    setAutoplay(false);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  useEffect(() => {
    if (autoplay) return;
    const timeout = setTimeout(() => setAutoplay(true), 10000);
    return () => clearTimeout(timeout);
  }, [autoplay, current]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="Alumni" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-honey font-medium text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            What Our Alumni Say
          </h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.08)" }}
            className="bg-card rounded-2xl p-8 md:p-10 border border-border relative overflow-hidden transition-shadow"
          >
            <Quote className="text-honey/20 absolute top-6 left-6" size={48} />

            {/* Decorative gradient orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-honey/10 to-coral/10 blur-3xl" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center pt-6 relative z-10"
              >
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Avatar initials */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center mx-auto mb-3 text-white font-heading font-bold text-sm"
                >
                  {testimonials[current].name.split(" ").map(n => n[0]).join("")}
                </motion.div>

                <div className="font-heading font-semibold text-foreground">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-teal">{testimonials[current].role}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonials[current].batch}</div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            {autoplay && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                <motion.div
                  key={current}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-honey to-coral rounded-full"
                />
              </div>
            )}

            <div className="flex justify-center items-center gap-3 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted hover:border-muted-foreground/30 transition-colors"
              >
                <ChevronLeft size={18} />
              </motion.button>
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-honey scale-125" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted hover:border-muted-foreground/30 transition-colors"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
