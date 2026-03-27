import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const NAV_ITEMS = [
  "Home", "About", "Departments", "Academics", "Admissions",
  "Placements", "Research", "Campus Life", "Alumni", "Contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-2">
          <img src={logo} alt="University Logo" className="h-10 w-10" />
          <span className="font-heading font-bold text-lg text-foreground hidden sm:inline">
            UniExcel
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                activeSection === item
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo("Admissions")}
            className="hidden sm:inline-flex px-5 py-2 rounded-xl bg-coral text-coral-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-coral/25 hover:scale-105"
          >
            Apply Now
          </button>
          <button onClick={() => navigate("/admin/login")} className="hidden sm:inline-flex px-5 py-2 rounded-xl border-2 border-teal text-teal font-medium text-sm transition-all hover:bg-teal hover:text-teal-foreground">
            Login
          </button>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex gap-2 mt-3 px-4">
                <button
                  onClick={() => scrollTo("Admissions")}
                  className="flex-1 py-2.5 rounded-xl bg-coral text-coral-foreground font-medium text-sm"
                >
                  Apply Now
                </button>
                <button className="flex-1 py-2.5 rounded-xl border-2 border-teal text-teal font-medium text-sm">
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
