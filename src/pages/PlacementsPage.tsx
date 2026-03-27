import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import PlacementsSection from "@/components/PlacementsSection";
import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trendData = [
  { year: "2020", avg: 8.2, highest: 32 },
  { year: "2021", avg: 9.1, highest: 36 },
  { year: "2022", avg: 9.8, highest: 40 },
  { year: "2023", avg: 10.5, highest: 42 },
  { year: "2024", avg: 11.2, highest: 45 },
  { year: "2025", avg: 12.0, highest: 48 },
];

const successStories = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    batch: "2023",
    quote: "The placement cell's guidance was instrumental in helping me land my dream role. The mock interviews and mentoring were exceptional.",
  },
  {
    name: "Arjun Patel",
    role: "Product Manager at Microsoft",
    batch: "2022",
    quote: "UniExcel's industry connections and project-based learning gave me the edge I needed to stand out among thousands of candidates.",
  },
  {
    name: "Sneha Reddy",
    role: "Data Scientist at Amazon",
    batch: "2024",
    quote: "The exposure to real-world problems through capstone projects and hackathons prepared me for the industry like no textbook could.",
  },
];

const PlacementsPage = () => (
  <PageLayout>
    <PageHero
      title="Placements & Careers"
      subtitle="Empowering students with world-class career opportunities through our extensive recruiter network and dedicated placement support."
      badge="95% Placement Rate"
      breadcrumbs={[{ label: "Placements" }]}
    />

    <PlacementsSection />

    {/* Trend Chart */}
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal font-medium text-sm uppercase tracking-widest">
            Year Over Year
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Placement Trends
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-teal" />
            <span className="text-sm font-medium text-muted-foreground">
              Package trends in LPA (₹ Lakhs Per Annum)
            </span>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 20% 88%)" />
              <XAxis dataKey="year" stroke="hsl(20 8% 45%)" fontSize={12} />
              <YAxis stroke="hsl(20 8% 45%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "hsl(30 30% 97%)",
                  border: "1px solid hsl(30 20% 88%)",
                  borderRadius: "12px",
                  fontSize: "13px",
                }}
              />
              <Line
                type="monotone"
                dataKey="highest"
                stroke="hsl(30 45% 55%)"
                strokeWidth={3}
                dot={{ fill: "hsl(30 45% 55%)", r: 5 }}
                name="Highest (LPA)"
              />
              <Line
                type="monotone"
                dataKey="avg"
                stroke="hsl(181 25% 50%)"
                strokeWidth={3}
                dot={{ fill: "hsl(181 25% 50%)", r: 5 }}
                name="Average (LPA)"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>

    {/* Success Stories */}
    <section className="section-padding bg-card border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Graduates, Their Stories
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border card-hover"
            >
              <Quote size={24} className="text-honey/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{story.quote}"
              </p>
              <div>
                <div className="font-heading font-semibold text-foreground">
                  {story.name}
                </div>
                <div className="text-sm text-teal">{story.role}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Batch of {story.batch}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PlacementsPage;
