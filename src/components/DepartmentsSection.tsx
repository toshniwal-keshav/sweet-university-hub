import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Radio, FlaskConical, Building, Briefcase, PenTool, Search } from "lucide-react";

const departments = [
  { icon: Cpu, name: "Computer Science", desc: "AI, ML, Data Science & Cybersecurity", category: "Engineering" },
  { icon: Radio, name: "Electronics & Communication", desc: "VLSI, Embedded Systems & IoT", category: "Engineering" },
  { icon: FlaskConical, name: "Chemical Engineering", desc: "Process Design & Green Chemistry", category: "Engineering" },
  { icon: Building, name: "Civil Engineering", desc: "Structural Design & Smart Cities", category: "Engineering" },
  { icon: Briefcase, name: "Business Administration", desc: "Finance, Marketing & Entrepreneurship", category: "Management" },
  { icon: PenTool, name: "Design", desc: "UX/UI, Product & Industrial Design", category: "Creative" },
];

const categories = ["All", "Engineering", "Management", "Creative"];

const DepartmentsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = departments.filter((d) => {
    const matchCategory = activeCategory === "All" || d.category === activeCategory;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.desc.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="Departments" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-widest">Explore</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Departments
          </h2>
        </motion.div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/30 transition-shadow"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-teal text-teal-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.08 }}
              layout
              className="group bg-card rounded-2xl p-6 border border-border card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-teal group-hover:text-teal-foreground text-teal">
                <d.icon size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{d.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                {d.category}
              </span>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No departments found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
