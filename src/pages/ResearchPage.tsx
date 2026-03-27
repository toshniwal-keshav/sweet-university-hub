import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Microscope, BookOpen, Handshake, Lightbulb, FileText, Award } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import campusResearch from "@/assets/campus-research.png";

const researchStats = [
  { icon: FileText, value: 200, suffix: "+", label: "Publications Yearly" },
  { icon: Microscope, value: 35, suffix: "+", label: "Research Labs" },
  { icon: Award, value: 15, suffix: "+", label: "Patents Filed" },
  { icon: Handshake, value: 40, suffix: "+", label: "Industry Partners" },
];

const domains = [
  {
    icon: Lightbulb,
    name: "Artificial Intelligence & ML",
    desc: "Deep learning, NLP, computer vision, and reinforcement learning research with applications in healthcare, transportation, and climate science.",
    papers: 45,
    color: "bg-honey/10 text-honey",
  },
  {
    icon: Microscope,
    name: "Biotechnology",
    desc: "Gene editing, pharmaceutical development, and sustainable agriculture research pushing the boundaries of biological sciences.",
    papers: 32,
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Lightbulb,
    name: "Clean Energy",
    desc: "Solar cell optimization, hydrogen fuel cells, and smart grid technologies for a sustainable future.",
    papers: 28,
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Microscope,
    name: "Quantum Computing",
    desc: "Quantum algorithms, error correction, and quantum cryptography exploring the next frontier of computation.",
    papers: 18,
    color: "bg-honey/10 text-honey",
  },
  {
    icon: Lightbulb,
    name: "Cybersecurity",
    desc: "Threat detection, blockchain security, and privacy-preserving computation for a safer digital world.",
    papers: 25,
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Microscope,
    name: "Nanotechnology",
    desc: "Nanomaterials, nanoelectronics, and biomedical nanotechnology for revolutionary applications across disciplines.",
    papers: 22,
    color: "bg-coral/10 text-coral",
  },
];

const collaborations = [
  { name: "MIT", type: "Joint Research" },
  { name: "Stanford", type: "Faculty Exchange" },
  { name: "ISRO", type: "Space Research" },
  { name: "Google DeepMind", type: "AI Research" },
  { name: "Tesla", type: "Energy Systems" },
  { name: "WHO", type: "Healthcare" },
  { name: "DRDO", type: "Defence Tech" },
  { name: "CERN", type: "Particle Physics" },
];

const ongoingProjects = [
  { title: "Smart City IoT Framework", lead: "Dr. R Venkatraman", funding: "₹2.5 Cr", status: "Active" },
  { title: "Cancer Detection using Deep Learning", lead: "Dr. S Mukherjee", funding: "₹1.8 Cr", status: "Active" },
  { title: "Sustainable Water Purification", lead: "Dr. A Chatterjee", funding: "₹3.2 Cr", status: "Active" },
  { title: "Quantum Encryption Protocol", lead: "Dr. P Narayan", funding: "₹4.0 Cr", status: "Phase 2" },
];

const AnimatedResearchStat = ({ stat, index }: { stat: typeof researchStats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 1500);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <stat.icon className="mx-auto mb-3 text-teal" size={28} />
      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};

const ResearchPage = () => (
  <PageLayout>
    <PageHero
      title="Research & Innovation"
      subtitle="Driving breakthrough discoveries across disciplines — from artificial intelligence to clean energy. Our research shapes the future."
      badge="Centre of Excellence"
      breadcrumbs={[{ label: "Research" }]}
      image={campusResearch}
    />

    {/* Research Stats */}
    <section className="section-padding bg-card border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {researchStats.map((stat, i) => (
            <AnimatedResearchStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Research Domains */}
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-honey font-medium text-sm uppercase tracking-widest">
            Focus Areas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Research Domains
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl ${d.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <d.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{d.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                {d.papers} Publications
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Ongoing Projects */}
    <section className="section-padding bg-card border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-widest">
            Active Research
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Ongoing Projects
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {ongoingProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-foreground">{proj.title}</h3>
                <span className="shrink-0 ml-3 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-medium">
                  {proj.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Lead: {proj.lead}</p>
              <p className="text-sm text-honey font-medium">Funding: {proj.funding}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Collaborations */}
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal font-medium text-sm uppercase tracking-widest">
            Partnerships
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Industry Collaborations
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {collaborations.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-2xl p-5 text-center card-hover"
            >
              <div className="font-heading font-semibold text-foreground mb-1">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ResearchPage;
