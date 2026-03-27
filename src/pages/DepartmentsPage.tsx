import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import DepartmentsSection from "@/components/DepartmentsSection";
import { motion } from "framer-motion";
import { BookOpen, Users, FlaskConical, Award } from "lucide-react";
import campusLibrary from "@/assets/campus-library.png";

const highlights = [
  { icon: BookOpen, value: "150+", label: "Courses Offered", color: "text-honey" },
  { icon: Users, value: "800+", label: "Faculty Members", color: "text-teal" },
  { icon: FlaskConical, value: "50+", label: "Research Labs", color: "text-coral" },
  { icon: Award, value: "25+", label: "Awards Won", color: "text-honey" },
];

const DepartmentsPage = () => (
  <PageLayout>
    <PageHero
      title="Our Departments"
      subtitle="Explore world-class academic departments offering cutting-edge programs across engineering, management, sciences, and creative disciplines."
      badge="Academics"
      breadcrumbs={[{ label: "Departments" }]}
      image={campusLibrary}
    />

    {/* Department Stats */}
    <section className="section-padding bg-card border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
              <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <DepartmentsSection />

    {/* Why Our Departments Stand Out */}
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal font-medium text-sm uppercase tracking-widest">
            What Sets Us Apart
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Why Our Departments Stand Out
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Industry-Aligned Curriculum",
              desc: "Our programs are regularly updated in collaboration with industry leaders to ensure students are job-ready from day one.",
            },
            {
              title: "World-Class Faculty",
              desc: "Learn from professors who are pioneers in their fields, bringing real-world research experience into the classroom.",
            },
            {
              title: "State-of-the-Art Labs",
              desc: "Access advanced laboratories equipped with the latest technology for hands-on learning and research.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default DepartmentsPage;
