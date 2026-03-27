import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["About Us", "Departments", "Admissions", "Placements", "Research", "Alumni"];
const resources = ["Academic Calendar", "Exam Results", "Library Portal", "Student Portal", "Career Services"];

const Footer = () => (
  <footer id="Contact" className="bg-teal text-teal-foreground">
    <div className="section-container py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold mb-4">UniExcel</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-6">
            Shaping future innovators since 1985. A premier institution committed to academic excellence and holistic development.
          </p>
          <div className="flex gap-3">
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <button
                key={s}
                className="w-9 h-9 rounded-lg bg-teal-foreground/10 flex items-center justify-center text-xs font-bold hover:bg-teal-foreground/20 transition-colors"
              >
                {s[0]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link}`} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Resources</h4>
          <ul className="space-y-2.5">
            {resources.map((link) => (
              <li key={link}>
                <button className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm opacity-80">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              UniExcel Campus, Innovation Drive, Bangalore 560001
            </li>
            <li className="flex items-center gap-3 text-sm opacity-80">
              <Phone size={16} className="shrink-0" />
              +91 80 1234 5678
            </li>
            <li className="flex items-center gap-3 text-sm opacity-80">
              <Mail size={16} className="shrink-0" />
              admissions@uniexcel.edu
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-teal-foreground/10">
      <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs opacity-60">© 2026 UniExcel University. All rights reserved.</p>
        <div className="flex gap-4 text-xs opacity-60">
          <button className="hover:opacity-100 transition-opacity">Privacy Policy</button>
          <button className="hover:opacity-100 transition-opacity">Terms of Use</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
