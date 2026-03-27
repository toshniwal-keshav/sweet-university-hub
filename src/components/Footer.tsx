import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, GraduationCap, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Departments", path: "/departments" },
  { label: "Admissions", path: "/admissions" },
  { label: "Placements", path: "/placements" },
  { label: "Research", path: "/research" },
  { label: "Alumni", path: "/alumni" },
];
const resources = ["Academic Calendar", "Exam Results", "Library Portal", "Student Portal", "Career Services"];

const socialLinks = [
  { name: "Twitter", initial: "𝕏" },
  { name: "LinkedIn", initial: "in" },
  { name: "YouTube", initial: "▶" },
  { name: "Instagram", initial: "📷" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to the newsletter!");
      setEmail("");
    }
  };

  return (
    <footer id="Contact" className="bg-[hsl(222,47%,12%)] text-white">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="section-container py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-1">Stay Updated</h3>
              <p className="text-sm text-white/60">Get the latest news and updates delivered to your inbox.</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-honey/40 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-honey to-coral text-white text-sm font-semibold flex items-center gap-2 transition-shadow hover:shadow-lg hover:shadow-coral/20"
              >
                <Send size={14} />
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-honey to-coral flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Uni<span className="text-honey">Excel</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Shaping future innovators since 1985. A premier institution committed to academic excellence and holistic development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.button
                  key={s.name}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-sm text-white/70 hover:bg-white/15 hover:text-white transition-colors"
                  title={s.name}
                >
                  {s.initial}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link}>
                  <button className="group flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 text-sm text-white/60 hover:text-white/80 transition-colors cursor-pointer">
                <MapPin size={16} className="mt-0.5 shrink-0 text-honey" />
                UniExcel Campus, Innovation Drive, Bangalore 560001
              </li>
              <li className="group flex items-center gap-3 text-sm text-white/60 hover:text-white/80 transition-colors cursor-pointer">
                <Phone size={16} className="shrink-0 text-honey" />
                +91 80 1234 5678
              </li>
              <li className="group flex items-center gap-3 text-sm text-white/60 hover:text-white/80 transition-colors cursor-pointer">
                <Mail size={16} className="shrink-0 text-honey" />
                admissions@uniexcel.edu
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">© 2026 UniExcel University. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <button className="hover:text-white/70 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/70 transition-colors">Terms of Use</button>
            <button className="hover:text-white/70 transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
