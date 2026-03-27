import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-teal font-medium text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center shrink-0">
                <MapPin className="text-honey" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">UniExcel Campus, Innovation Drive, Bangalore 560001</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <Phone className="text-teal" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 80 1234 5678</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                <Mail className="text-coral" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">admissions@uniexcel.edu</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <input className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/30" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/30" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/30 resize-none" placeholder="How can we help?" />
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coral text-coral-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-coral/25">
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ContactPage;
