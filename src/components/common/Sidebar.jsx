import { User, BookOpen, HelpCircle, Trophy, Settings } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ currentPage, onNavigate }) => {
  const { user } = useAuth();

  const sidebarItems = [
    { id: "dashboard", icon: User, label: "Dashboard" },
    { id: "course", icon: BookOpen, label: "Kurikulum Belajar" },
    { id: "quiz", icon: HelpCircle, label: "Quiz" },
    { id: "leaderboard", icon: Trophy, label: "Leaderboard" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-20 bg-blue-900/50 backdrop-blur-sm border-r border-white/10 flex flex-col items-center py-8">
      {/* Logo */}
      <div className="w-10 h-10 bg-blue-500 rounded-full mb-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
        <img
          src="/images/Logo Vocus Putih.png"
          alt="Logo"
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col space-y-6">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group ${
                currentPage === item.id
                  ? "bg-white text-blue-900 shadow-lg scale-110"
                  : "text-white/60 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>

      {/* User Avatar */}
      <div className="mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform cursor-pointer">
          {user?.avatar}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
