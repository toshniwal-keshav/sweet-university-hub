import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const news = [
  { title: "UniExcel Bags National Innovation Award 2024", date: "Mar 15, 2026", tag: "Achievement" },
  { title: "New AI Research Center Inaugurated", date: "Mar 10, 2026", tag: "Research" },
  { title: "MoU Signed with MIT for Student Exchange", date: "Mar 5, 2026", tag: "Partnership" },
  { title: "Hackathon 2026 Registrations Now Open", date: "Feb 28, 2026", tag: "Event" },
  { title: "Annual Sports Meet Winners Announced", date: "Feb 20, 2026", tag: "Sports" },
  { title: "New Scholarship Program for Merit Students", date: "Feb 15, 2026", tag: "Achievement" },
];

const tags = ["All", "Achievement", "Research", "Partnership", "Event", "Sports"];

const tagColors: Record<string, string> = {
  Achievement: "bg-honey/10 text-honey",
  Research: "bg-teal/10 text-teal",
  Partnership: "bg-primary/10 text-primary",
  Event: "bg-coral/10 text-coral",
  Sports: "bg-cotton/20 text-foreground",
};

const NewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();

  const filtered = news.filter((n) => {
    const matchTag = activeTag === "All" || n.tag === activeTag;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  const updateScrollButtons = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    updateScrollButtons();
  }, [filtered]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    setTimeout(updateScrollButtons, 400);
  };

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-widest">Latest</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            News & Announcements
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/30 transition-shadow"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {tags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTag === tag
                    ? "bg-honey text-honey-foreground shadow-md shadow-honey/20"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Slider with arrows */}
        <div className="relative">
          {canScrollLeft && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft size={18} />
            </motion.button>
          )}
          {canScrollRight && filtered.length > 2 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight size={18} />
            </motion.button>
          )}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {filtered.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                onClick={() => navigate("/news")}
                className="min-w-[300px] sm:min-w-[340px] bg-background rounded-2xl p-6 border border-border snap-start flex flex-col cursor-pointer group"
              >
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-medium mb-4 ${tagColors[n.tag] || "bg-muted text-muted-foreground"}`}>
                  {n.tag}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto mb-3">
                  <Calendar size={14} />
                  {n.date}
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-teal group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </span>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="w-full text-center py-12 text-muted-foreground">
                No news found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
