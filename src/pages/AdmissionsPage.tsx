import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, CheckCircle2, Download, GraduationCap, Clock, Users } from "lucide-react";
import EventsSection from "@/components/EventsSection";

const programs = [
  { name: "B.Tech", duration: "4 Years", seats: 1200, fee: "₹2,50,000/yr" },
  { name: "M.Tech", duration: "2 Years", seats: 300, fee: "₹1,80,000/yr" },
  { name: "MBA", duration: "2 Years", seats: 180, fee: "₹3,00,000/yr" },
  { name: "BBA", duration: "3 Years", seats: 240, fee: "₹1,50,000/yr" },
  { name: "Ph.D", duration: "3-5 Years", seats: 100, fee: "₹80,000/yr" },
];

const requirements = [
  "Class 10th & 12th marksheet",
  "Graduation marksheet (for PG programs)",
  "Entrance exam score (JEE/CAT/GATE)",
  "Valid ID proof",
  "Passport-size photographs",
  "Caste certificate (if applicable)",
];

const steps = [
  { icon: Calendar, title: "Check Eligibility", desc: "Review program requirements and ensure you meet all criteria" },
  { icon: GraduationCap, title: "Fill Application", desc: "Complete the online application form with all details" },
  { icon: Clock, title: "Attend Counseling", desc: "Participate in counseling session to select your program" },
  { icon: CheckCircle2, title: "Complete Admission", desc: "Pay fees and submit documents to confirm your seat" },
];

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState<"programs" | "process" | "requirements">("programs");

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-honey/10 via-background to-teal/10 section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral font-medium text-sm mb-4">
              Admissions Open 2026-27
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Begin Your Journey at UniExcel
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join one of India's premier institutions and shape your future with world-class education and endless opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3.5 rounded-2xl bg-coral text-coral-foreground font-semibold transition-all hover:shadow-xl hover:shadow-coral/30 hover:scale-105">
                Apply Now
              </button>
              <button className="px-8 py-3.5 rounded-2xl border-2 border-border text-foreground font-semibold transition-all hover:bg-muted flex items-center gap-2">
                <Download size={18} /> Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-teal font-medium text-sm uppercase tracking-widest">Programs</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Programs
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {(["programs", "process", "requirements"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-teal text-teal-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "programs" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            >
              {programs.map((program, i) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border card-hover"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">{program.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seats</span>
                      <span className="font-medium">{program.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee</span>
                      <span className="font-medium text-teal">{program.fee}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 rounded-xl bg-honey/10 text-honey font-medium text-sm hover:bg-honey hover:text-honey-foreground transition-colors">
                    Apply
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "process" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-4 gap-6"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl p-6 border border-border text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-coral" size={28} />
                    </div>
                    <div className="text-sm font-bold text-honey mb-2">Step {i + 1}</div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "requirements" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Documents Required</h3>
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
                    <li key={req} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-teal" size={14} />
                      </div>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-xl bg-honey/10 border border-honey/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> All documents must be self-attested. Original documents should be presented during counseling.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "15,000+", label: "Applications Received" },
              { icon: GraduationCap, value: "95%", label: "Selection Rate" },
              { icon: Clock, value: "50+", label: "Nationalities" },
              { icon: Calendar, value: "2026-27", label: "Academic Year" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <stat.icon className="mx-auto text-coral mb-3" size={32} />
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <EventsSection />
    </PageLayout>
  );
};

export default AdmissionsPage;
