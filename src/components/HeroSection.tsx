import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/campus-hero.png";
import { toast } from "sonner";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDownloadBrochure = () => {
    // Generate a brochure-style HTML document and trigger download
    const brochureContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>UniExcel University - Brochure 2026-27</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; color: #1a1f36; background: #fff; }
    .page { page-break-after: always; padding: 60px; min-height: 100vh; }
    .cover { background: linear-gradient(135deg, #1a2a6c, #2d4373); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
    .cover h1 { font-family: 'Poppins', sans-serif; font-size: 48px; font-weight: 800; margin-bottom: 16px; }
    .cover p { font-size: 18px; opacity: 0.8; max-width: 500px; }
    .cover .badge { display: inline-block; background: rgba(255,190,50,0.2); color: #FFD700; padding: 8px 20px; border-radius: 30px; font-size: 14px; font-weight: 600; margin-bottom: 30px; border: 1px solid rgba(255,190,50,0.3); }
    h2 { font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 700; color: #1a2a6c; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 3px solid #FFB830; display: inline-block; }
    .section { margin-bottom: 40px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
    .card { padding: 24px; border-radius: 12px; background: #f8f9fc; border: 1px solid #e8eaf0; }
    .card h3 { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600; color: #1a2a6c; margin-bottom: 8px; }
    .card p { font-size: 13px; color: #5a6178; line-height: 1.6; }
    .stat { text-align: center; padding: 20px; }
    .stat .number { font-family: 'Poppins', sans-serif; font-size: 36px; font-weight: 800; color: #1a2a6c; }
    .stat .label { font-size: 13px; color: #5a6178; margin-top: 4px; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 30px 0; }
    ul { margin-top: 12px; padding-left: 20px; }
    li { font-size: 14px; color: #5a6178; line-height: 2; }
    .footer { text-align: center; color: #5a6178; font-size: 12px; padding-top: 40px; border-top: 1px solid #e8eaf0; margin-top: 40px; }
    @media print { .page { padding: 40px; } }
  </style>
</head>
<body>
  <div class="page cover">
    <div class="badge">🏆 Ranked #1 in Innovation — NIRF 2026</div>
    <h1>UniExcel University</h1>
    <p>Shaping Future Innovators — Admissions Open for 2026-27</p>
  </div>
  
  <div class="page">
    <div class="section">
      <h2>About UniExcel</h2>
      <p style="font-size:15px; line-height:1.8; color:#5a6178;">
        Established in 1985, UniExcel University is a premier institution committed to academic excellence, cutting-edge research, and holistic development. Located in Bangalore, our 200-acre campus is home to 5,000+ students across 15+ departments.
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat card"><div class="number">#1</div><div class="label">NIRF Ranking</div></div>
      <div class="stat card"><div class="number">95%</div><div class="label">Placement Rate</div></div>
      <div class="stat card"><div class="number">5000+</div><div class="label">Students</div></div>
      <div class="stat card"><div class="number">300+</div><div class="label">Recruiters</div></div>
    </div>

    <div class="section">
      <h2>Departments</h2>
      <div class="grid">
        <div class="card"><h3>Computer Science & Engineering</h3><p>AI, ML, Data Science, Cybersecurity — 45+ publications yearly</p></div>
        <div class="card"><h3>Electronics & Communication</h3><p>VLSI, Embedded Systems, IoT — state-of-the-art labs</p></div>
        <div class="card"><h3>Business Administration</h3><p>Finance, Marketing, Entrepreneurship — industry partnerships</p></div>
        <div class="card"><h3>Design</h3><p>UX/UI, Product Design, Industrial Design — creative studios</p></div>
      </div>
    </div>
  </div>

  <div class="page">
    <div class="section">
      <h2>Placements</h2>
      <div class="stats-grid">
        <div class="stat card"><div class="number">₹48 LPA</div><div class="label">Highest Package</div></div>
        <div class="stat card"><div class="number">₹12 LPA</div><div class="label">Average Package</div></div>
        <div class="stat card"><div class="number">300+</div><div class="label">Companies</div></div>
        <div class="stat card"><div class="number">95%</div><div class="label">Placement Rate</div></div>
      </div>
      <p style="font-size:14px; color:#5a6178; line-height:1.7;">
        <strong>Top Recruiters:</strong> Google, Microsoft, Amazon, Apple, Meta, Goldman Sachs, McKinsey, Deloitte, TCS, Infosys, Wipro, Adobe
      </p>
    </div>

    <div class="section">
      <h2>Admissions 2026-27</h2>
      <ul>
        <li><strong>UG Programs:</strong> B.Tech, BBA, B.Des — Eligibility: 10+2 with 75%+ aggregate</li>
        <li><strong>PG Programs:</strong> M.Tech, MBA, M.Des — Eligibility: Graduation with 60%+ aggregate</li>
        <li><strong>PhD Programs:</strong> Across all departments — GATE/NET qualified preferred</li>
        <li><strong>Application Deadline:</strong> June 30, 2026</li>
        <li><strong>Scholarships:</strong> Merit-based (up to 100% tuition waiver), Need-based, Sports quota</li>
      </ul>
    </div>

    <div class="section">
      <h2>Campus Life</h2>
      <div class="grid">
        <div class="card"><h3>50+ Clubs & Societies</h3><p>Coding, Music, Art, Sports, Literary, Fitness clubs and more</p></div>
        <div class="card"><h3>Modern Hostels</h3><p>AC rooms, Wi-Fi, laundry, 24/7 security</p></div>
        <div class="card"><h3>Sports Complex</h3><p>Olympic-standard facilities — cricket, swimming, tennis</p></div>
        <div class="card"><h3>Smart Campus</h3><p>High-speed Wi-Fi, digital kiosks, smart classrooms</p></div>
      </div>
    </div>

    <div class="footer">
      <p><strong>UniExcel University</strong></p>
      <p>Innovation Drive, Bangalore 560001 | +91 80 1234 5678 | admissions@uniexcel.edu</p>
      <p style="margin-top:8px;">Apply now at admissions.uniexcel.edu</p>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([brochureContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "UniExcel_Brochure_2026-27.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Brochure downloaded! Open it in your browser and press Ctrl+P to save as PDF.");
  };

  return (
    <section id="Home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="UniExcel Campus"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%,0.92)] via-[hsl(222,47%,11%,0.75)] to-[hsl(222,47%,11%,0.35)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-honey/20"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.5,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative section-container pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-honey/20 text-honey font-medium text-sm mb-6 border border-honey/30"
          >
            🏆 Ranked #1 in Innovation — NIRF 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6"
          >
            Shaping Future{" "}
            <motion.span
              className="bg-gradient-to-r from-honey via-coral to-teal bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Innovators
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 max-w-lg mb-8 leading-relaxed"
          >
            Empowering minds with world-class education, cutting-edge research, 
            and industry-driven learning experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(230,76,60,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/admissions")}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-coral to-coral/90 text-white font-semibold text-base transition-all flex items-center gap-2"
            >
              Apply Now <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadBrochure}
              className="px-8 py-3.5 rounded-2xl border-2 border-white/25 text-white font-semibold text-base transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Download size={16} />
              Download Brochure
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
