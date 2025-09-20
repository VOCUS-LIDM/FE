import DashboardCard from '../components/dashboard/DashboardCard'
import { useAuth } from '../context/AuthContext'
import { DASHBOARD_CARDS } from '../data/dashboard'

const Dashboard = ({ onNavigate }) => {
  const { user } = useAuth()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Selamat Pagi'
    if (hour < 18) return 'Selamat Siang'
    return 'Selamat Malam'
  }

  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {getGreeting()}, {user?.name}! 👋
        </h1>
        <p className="text-blue-100 mb-6">Pilih aktivitas belajar yang ingin kamu lakukan hari ini</p>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-effect rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{user?.score}</div>
            <div className="text-blue-200 text-sm">Total Points</div>
          </div>
          <div className="glass-effect rounded-xl p-4">
            <div className="text-2xl font-bold text-white">24</div>
            <div className="text-blue-200 text-sm">Hours Learned</div>
          </div>
        </div>
      </div>
      
      {/* Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DASHBOARD_CARDS.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gradient={card.gradient}
            stats={card.stats}
            onClick={() => onNavigate(card.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard