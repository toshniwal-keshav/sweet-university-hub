import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">{children}</div>
    <Footer />
  </div>
);

export default PageLayout;
