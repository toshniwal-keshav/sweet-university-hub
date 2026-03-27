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

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };
  const next = () => {
    setCurrent((c) => (c + 1) % testimonials.length);
    setAutoplay(false);
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  // Resume autoplay after 10s of inactivity
  useEffect(() => {
    if (autoplay) return;
    const timeout = setTimeout(() => setAutoplay(true), 10000);
    return () => clearTimeout(timeout);
  }, [autoplay, current]);

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
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border relative overflow-hidden">
            <Quote className="text-honey/30 absolute top-6 left-6" size={40} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center pt-6"
              >
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[current].quote}"
                </p>
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
                  className="h-full bg-honey rounded-full"
                />
              </div>
            )}

            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoplay(false); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-honey scale-125" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
