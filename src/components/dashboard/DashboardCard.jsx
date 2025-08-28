const DashboardCard = ({ title, description, icon, gradient, onClick, stats }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
      
      <div className="relative z-10">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4">{description}</p>
        
        {stats && (
          <div className="text-white/60 text-xs mb-4">
            {stats}
          </div>
        )}
        
        <div className="flex items-center text-white/70 group-hover:text-white transition-colors">
          <span className="text-sm">Klik untuk mulai</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard