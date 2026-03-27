import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowRight } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        {/* 404 Visual */}
        <div className="mb-8 relative">
          <div className="text-[150px] md:text-[200px] font-heading font-bold text-honey/20 leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center -mt-8">
            <div className="w-24 h-24 rounded-full bg-coral/10 flex items-center justify-center">
              <Search className="text-coral" size={48} />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-coral text-coral-foreground font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-coral/25 hover:scale-105"
          >
            <Home size={18} /> Go Home
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-xl border-2 border-border text-foreground font-medium flex items-center gap-2 transition-all hover:bg-muted"
          >
            Contact Us <ArrowRight size={18} />
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Explore other pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Admissions", "Academics", "Departments", "Placements"].map((link) => (
              <button
                key={link}
                onClick={() => navigate(`/${link.toLowerCase().replace(" ", "-")}`)}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;