import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, Tag } from "lucide-react";
import campusHero from "@/assets/campus-hero.png";

const categories = ["All", "Academics", "Events", "Achievements", "Campus"];

const newsItems = [
  {
    title: "UniExcel Ranked #1 in Innovation by NIRF 2026",
    excerpt: "The National Institutional Ranking Framework has placed UniExcel at the top spot for innovation, research output, and industry collaboration for the second consecutive year.",
    date: "Mar 25, 2026",
    category: "Achievements",
    featured: true,
  },
  {
    title: "New AI Research Centre Inaugurated",
    excerpt: "A state-of-the-art AI and Machine Learning research centre was inaugurated by the Hon'ble Minister of Education, equipped with NVIDIA A100 GPU clusters.",
    date: "Mar 18, 2026",
    category: "Academics",
    featured: true,
  },
  {
    title: "TechFest 2026: Registrations Open",
    excerpt: "UniExcel's flagship technical festival returns with hackathons, workshops, and keynotes from industry leaders. Over 10,000 participants expected.",
    date: "Mar 15, 2026",
    category: "Events",
    featured: false,
  },
  {
    title: "Students Win ACM-ICPC Regional Championship",
    excerpt: "A team of three undergraduate students secured first place at the ACM-ICPC Asia Regional contest, qualifying for the World Finals.",
    date: "Mar 10, 2026",
    category: "Achievements",
    featured: false,
  },
  {
    title: "Green Campus Initiative: 100% Solar Power",
    excerpt: "UniExcel becomes the first university in the state to run entirely on solar energy, reducing carbon emissions by 2,000 tonnes annually.",
    date: "Mar 05, 2026",
    category: "Campus",
    featured: false,
  },
  {
    title: "International Faculty Exchange with MIT",
    excerpt: "Five faculty members from MIT's EECS department will conduct a semester-long collaborative teaching and research program.",
    date: "Feb 28, 2026",
    category: "Academics",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Academics: "bg-teal/10 text-teal",
  Events: "bg-coral/10 text-coral",
  Achievements: "bg-honey/10 text-honey",
  Campus: "bg-primary/10 text-primary",
};

const NewsPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="News & Announcements"
        subtitle="Stay updated with the latest happenings, achievements, and milestones at UniExcel University."
        badge="Latest Updates"
        breadcrumbs={[{ label: "News" }]}
        image={campusHero}
      />

      {/* Category Filter */}
      <section className="border-b border-border bg-card">
        <div className="section-container py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted whitespace-nowrap first:bg-teal first:text-teal-foreground first:border-teal"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground">Featured Stories</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {newsItems
              .filter((n) => n.featured)
              .map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden card-hover group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-honey/15 via-teal/10 to-coral/15" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                        <Tag size={12} />
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays size={12} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-honey transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
          </div>

          {/* All News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground">All News</h2>
          </motion.div>
          <div className="space-y-4">
            {newsItems
              .filter((n) => !n.featured)
              .map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 card-hover group cursor-pointer flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                        <Tag size={12} />
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays size={12} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-honey transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-muted-foreground group-hover:text-teal transition-colors hidden sm:block"
                  />
                </motion.article>
              ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NewsPage;
