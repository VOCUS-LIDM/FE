import React from "react";
import {
  Users,
  BookOpen,
  HelpCircle,
  BarChart3,
  Activity,
  FileText,
  Settings,
} from "lucide-react";

const AdminSidebar = ({ currentPage, onNavigate }) => {
  const sidebarItems = [
    { id: "dashboard", icon: BarChart3, label: "Dashboard" },
    { id: "users", icon: Users, label: "Users" },
    { id: "courses", icon: BookOpen, label: "Courses" },
    { id: "quizzes", icon: HelpCircle, label: "Quizzes" },
    { id: "activities", icon: Activity, label: "Activities" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-20 bg-slate-900/70 backdrop-blur-sm border-r border-slate-700 flex flex-col items-center py-8">
      <div className="w-10 h-10 bg-indigo-600 rounded-full mb-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
        <img
          src="/images/Logo Vocus Putih.png"
          alt="Logo"
          className="w-6 h-6 object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group ${
                currentPage === item.id
                  ? "bg-indigo-600 text-white shadow-lg scale-110"
                  : "text-slate-400 hover:text-white hover:bg-slate-800 hover:scale-105"
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
