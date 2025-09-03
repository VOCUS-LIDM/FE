import React from 'react';
import { LogOut, Search, Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext'; // Ganti AdminContext menjadi AuthContext

const AdminHeader = ({ currentPage, onLogout }) => {
  const { user } = useAuth(); // Ganti useAdmin() menjadi useAuth()

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Admin Dashboard';
      case 'users': return 'User Management';
      case 'courses': return 'Course Management';
      case 'quizzes': return 'Quiz Management';
      case 'reports': return 'Reports & Analytics';
      case 'activities': return 'User Activities';
      default: return 'Admin Panel';
    }
  };

  return (
    <div className="h-20 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 flex items-center justify-between px-8">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-white">{getPageTitle()}</h2>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-800 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>

        <button className="relative text-slate-400 hover:text-white transition-colors p-2">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="text-right hidden md:block">
            <div className="text-white font-medium text-sm">{user?.name}</div>
            <div className="text-slate-400 text-xs">{user?.role}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
            {user?.avatar}
          </div>
        </div>

        <button
          onClick={onLogout}
          className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;