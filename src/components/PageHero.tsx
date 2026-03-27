import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; path?: string }[];
  image?: string;
}

const PageHero = ({ title, subtitle, badge, breadcrumbs, image }: PageHeroProps) => (
  <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
    {/* Background */}
    {image ? (
      <>
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%,0.88)] via-[hsl(222,47%,11%,0.75)] to-[hsl(222,47%,11%,0.4)]" />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-teal/8" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-coral/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl translate-y-1/2 -translate-x-1/4" />
      </>
    )}

    <div className="relative section-container">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`flex items-center gap-1.5 text-sm mb-6 ${image ? "text-white/60" : "text-muted-foreground"}`}
        >
          <Link to="/" className={`transition-colors ${image ? "hover:text-white" : "hover:text-foreground"}`}>
            Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={14} className="opacity-50" />
              {crumb.path ? (
                <Link to={crumb.path} className={`transition-colors ${image ? "hover:text-white" : "hover:text-foreground"}`}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={`font-medium ${image ? "text-white" : "text-foreground"}`}>{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      )}

      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={`inline-block px-4 py-1.5 rounded-full font-medium text-sm mb-4 ${
            image ? "bg-honey/20 text-honey border border-honey/30" : "bg-honey/15 text-honey"
          }`}
        >
          {badge}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 ${
          image ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
          image ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default PageHero;
