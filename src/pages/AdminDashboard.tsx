import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut, LayoutDashboard, Users, FileText, Settings } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const cards = [
    { icon: Users, label: "Students", value: "5,234", color: "bg-teal/10 text-teal" },
    { icon: FileText, label: "Applications", value: "847", color: "bg-coral/10 text-coral" },
    { icon: LayoutDashboard, label: "Departments", value: "12", color: "bg-honey/10 text-honey" },
    { icon: Settings, label: "Faculty", value: "340", color: "bg-primary/10 text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="UniExcel" className="h-8 w-8" />
            <span className="font-heading font-bold text-foreground">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-coral hover:bg-coral/10 transition-colors"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-2xl font-bold text-foreground mb-1">
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}!
          </h1>
          <p className="text-muted-foreground text-sm mb-8">Here's an overview of your university.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border card-hover"
            >
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
                <card.icon size={24} />
              </div>
              <div className="text-2xl font-heading font-bold text-foreground">{card.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{card.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-card rounded-2xl p-8 border border-border">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Manage Students", "Review Applications", "Update Content"].map((action) => (
              <button
                key={action}
                className="px-5 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors text-left"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
