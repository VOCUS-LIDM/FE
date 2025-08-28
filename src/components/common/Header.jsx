import { LogOut, Bell, Search } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Header = ({ currentPage, onLogout }) => {
  const { user } = useAuth()

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Dashboard'
      case 'course': return 'Course'
      case 'quiz': return 'Quiz'
      case 'leaderboard': return 'Leaderboard'
      case 'settings': return 'Settings'
      default: return 'Dashboard'
    }
  }

  return (
    <div className="h-20 bg-blue-900/30 backdrop-blur-sm border-b border-white/10 flex items-center justify-between px-8">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-white">{getPageTitle()}</h2>
        <div className="w-px h-8 bg-white/20 ml-4"></div>
      </div>
      
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
          <input 
            type="text" 
            placeholder="Search courses..."
            className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        
        {/* Notifications */}
        <button className="relative text-white/60 hover:text-white transition-colors p-2">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <div className="text-right hidden md:block">
            <div className="text-white font-medium text-sm">{user?.name}</div>
            <div className="text-white/60 text-xs">{user?.role}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-white font-bold">
            {user?.avatar}
          </div>
        </div>
        
        {/* Logout */}
        <button 
          onClick={onLogout}
          className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  )
}

export default Header