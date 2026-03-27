import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import AboutSection from "@/components/AboutSection";
import RankingsSection from "@/components/RankingsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import PlacementsSection from "@/components/PlacementsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <QuickStats />
    <div id="about-preview"><AboutSection /></div>
    <div id="academics-preview"><RankingsSection /></div>
    <div id="departments-preview"><DepartmentsSection /></div>
    <div id="placements-preview"><PlacementsSection /></div>
    <div id="facilities-preview"><FacilitiesSection /></div>
    <NewsSection />
    <EventsSection />
    <CampusLifeSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
