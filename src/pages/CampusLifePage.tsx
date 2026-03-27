import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CampusLifeSection from "@/components/CampusLifeSection";
import campusLifeImg from "@/assets/campus-life.png";
import { motion } from "framer-motion";
import {
  Music,
  Code,
  Palette,
  Trophy,
  Dumbbell,
  BookOpen,
  Home,
  Utensils,
  Wifi,
  CalendarDays,
} from "lucide-react";

const clubs = [
  { icon: Code, name: "Coding Club", members: "250+", color: "bg-teal/10 text-teal" },
  { icon: Music, name: "Music Society", members: "120+", color: "bg-coral/10 text-coral" },
  { icon: Palette, name: "Art & Design", members: "90+", color: "bg-honey/10 text-honey" },
  { icon: Trophy, name: "Sports Council", members: "300+", color: "bg-teal/10 text-teal" },
  { icon: BookOpen, name: "Literary Club", members: "80+", color: "bg-coral/10 text-coral" },
  { icon: Dumbbell, name: "Fitness Club", members: "200+", color: "bg-honey/10 text-honey" },
];

const facilities = [
  { icon: Home, title: "Modern Hostels", desc: "AC rooms with Wi-Fi, laundry, and 24/7 security for a comfortable stay." },
  { icon: Dumbbell, title: "Sports Complex", desc: "Olympic-standard facilities — cricket, basketball, swimming, tennis, and more." },
  { icon: Utensils, title: "Food Courts", desc: "Multiple dining options with healthy, diverse cuisine from across the country." },
  { icon: Wifi, title: "Smart Campus", desc: "Fully connected campus with high-speed Wi-Fi, digital kiosks, and smart classrooms." },
];

const upcomingEvents = [
  { name: "TechFest 2026", date: "Apr 15-17", type: "Technical", color: "bg-teal" },
  { name: "Cultural Night", date: "May 02", type: "Cultural", color: "bg-coral" },
  { name: "Hackathon 3.0", date: "May 20-21", type: "Technical", color: "bg-teal" },
  { name: "Sports Meet", date: "Jun 05-08", type: "Sports", color: "bg-honey" },
];

const CampusLifePage = () => (
  <PageLayout>
    <PageHero
      title="Campus Life"
      subtitle="Discover a vibrant campus where learning extends beyond classrooms — clubs, sports, culture, and memories that last a lifetime."
      badge="50+ Clubs & Societies"
      breadcrumbs={[{ label: "Campus Life" }]}
      image={campusLifeImg}
    />

    {/* Clubs & Societies */}
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-honey font-medium text-sm uppercase tracking-widest">
            Get Involved
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Clubs & Societies
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, i) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${club.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <club.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{club.name}</h3>
              <p className="text-sm text-muted-foreground">{club.members} active members</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Campus Gallery */}
    <CampusLifeSection />

    {/* Upcoming Events */}
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-widest">
            What's Happening
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Upcoming Events
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{event.date}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{event.name}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${event.color}`}>
                {event.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="section-padding bg-card border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal font-medium text-sm uppercase tracking-widest">
            Amenities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Campus Facilities
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-honey/10 text-honey flex items-center justify-center mx-auto mb-4">
                <f.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CampusLifePage;
