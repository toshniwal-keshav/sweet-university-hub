import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import RankingsSection from "@/components/RankingsSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Clock, Award, CheckCircle2, Download, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import campusAcademics from "@/assets/campus-academics.png";

const programs = [
  {
    level: "Undergraduate",
    courses: [
      { name: "B.Tech in Computer Science", seats: 300, duration: "4 Years", elibility: "12th PCM" },
      { name: "B.Tech in Electronics & Comm", seats: 180, duration: "4 Years", elibility: "12th PCM" },
      { name: "B.Tech in Mechanical Engineering", seats: 120, duration: "4 Years", elibility: "12th PCM" },
      { name: "B.Tech in Civil Engineering", seats: 120, duration: "4 Years", elibility: "12th PCM" },
      { name: "BBA in Business Administration", seats: 180, duration: "3 Years", elibility: "12th Any" },
      { name: "B.Sc in Data Science", seats: 60, duration: "3 Years", elibility: "12th Maths" },
    ]
  },
  {
    level: "Postgraduate",
    courses: [
      { name: "M.Tech in Computer Science", seats: 60, duration: "2 Years", elibility: "B.Tech CS" },
      { name: "M.Tech in Data Science", seats: 40, duration: "2 Years", elibility: "B.Tech/ B.Sc" },
      { name: "MBA in Finance", seats: 60, duration: "2 Years", elibility: "Any Graduate" },
      { name: "MBA in Marketing", seats: 60, duration: "2 Years", elibility: "Any Graduate" },
      { name: "M.Sc in Artificial Intelligence", seats: 30, duration: "2 Years", elibility: "B.Sc/ B.Tech" },
    ]
  },
  {
    level: "Doctoral",
    courses: [
      { name: "Ph.D in Computer Science", seats: 20, duration: "3-5 Years", elibility: "M.Tech/ M.Phil" },
      { name: "Ph.D in Electronics", seats: 15, duration: "3-5 Years", elibility: "M.Tech/ M.Phil" },
      { name: "Ph.D in Management Studies", seats: 15, duration: "3-5 Years", elibility: "MBA/ Master's" },
      { name: "Ph.D in Civil Engineering", seats: 10, duration: "3-5 Years", elibility: "M.Tech/ M.Phil" },
    ]
  }
];

const features = [
  { icon: BookOpen, title: "Industry-Integrated Curriculum", desc: "Regularly updated curriculum with input from industry leaders" },
  { icon: Clock, title: "Flexible Learning", desc: "Online and hybrid options for working professionals" },
  { icon: Award, title: "Industry Certifications", desc: "Free certification courses from top tech companies" },
  { icon: CheckCircle2, title: "NAAC A++ Accredited", desc: "Highest quality assurance in Indian higher education" },
];

const AcademicsPage = () => {
  const [activeLevel, setActiveLevel] = useState("Undergraduate");
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHero
        title="World-Class Education"
        subtitle="Choose from 40+ programs across undergraduate, postgraduate, and doctoral levels, designed to prepare you for the challenges of tomorrow."
        badge="Academics"
        breadcrumbs={[{ label: "Academics" }]}
        image={campusAcademics}
      />

      {/* Rankings Section */}
      <RankingsSection />

      {/* Features */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-teal font-medium text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              The UniExcel Advantage
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-coral" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-honey font-medium text-sm uppercase tracking-widest">Programs</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Explore Our Courses
            </h2>
          </motion.div>

          {/* Level Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {programs.map((prog) => (
              <button
                key={prog.level}
                onClick={() => setActiveLevel(prog.level)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeLevel === prog.level
                    ? "bg-honey text-honey-foreground shadow-md"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {prog.level}
              </button>
            ))}
          </div>

          {/* Programs Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">Course</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-foreground">Duration</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-foreground">Seats</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-foreground">Eligibility</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {programs.find(p => p.level === activeLevel)?.courses.map((course, i) => (
                  <motion.tr
                    key={course.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-medium text-foreground">{course.name}</span>
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{course.duration}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{course.seats}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-medium">
                        {course.elibility}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => navigate("/admissions")}
                        className="text-honey font-medium text-sm hover:underline flex items-center gap-1 mx-auto"
                      >
                        Apply <ArrowRight size={14} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-teal p-10 md:p-16 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Our admissions team is here to help you choose the right program and guide you through the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/admissions")}
                className="px-8 py-3.5 rounded-2xl bg-coral text-coral-foreground font-semibold transition-all hover:shadow-xl hover:scale-105"
              >
                Start Application
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3.5 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold transition-all hover:bg-primary-foreground/10"
              >
                Talk to Counselor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AcademicsPage;