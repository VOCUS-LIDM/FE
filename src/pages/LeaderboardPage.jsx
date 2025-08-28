import { Trophy, Medal, Award, TrendingUp } from 'lucide-react'

const LeaderboardPage = () => {
  const leaderboardData = [
    { rank: 1, name: 'Arna Wati', score: 1250, avatar: '👨‍💻', change: '+2' },
    { rank: 2, name: 'Mondo', score: 1180, avatar: '👩‍🎓', change: '-1' },
    { rank: 3, name: 'Raihan', score: 1150, avatar: '👨‍🎓', change: '+1' },
    { rank: 4, name: 'Aidhil Aksan', score: 1120, avatar: '👩‍💼', change: '0' },
    { rank: 5, name: 'Budi Siregar', score: 1050, avatar: '👨‍🏫', change: '-2' },
  ]

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="text-yellow-400" size={24} />
      case 2: return <Medal className="text-gray-300" size={24} />
      case 3: return <Award className="text-orange-400" size={24} />
      default: return <span className="text-white/60 font-bold">{rank}</span>
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-blue-100">Lihat peringkatmu dibanding pengguna lain</p>
      </div>

      {/* Top 3 Podium */}
      <div className="flex justify-center items-end space-x-4 mb-8">
        {[2, 1, 3].map((rank) => {
          const user = leaderboardData.find(u => u.rank === rank)
          const heights = { 1: 'h-32', 2: 'h-24', 3: 'h-20' }
          
          return (
            <div key={rank} className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-2xl mx-auto mb-2">
                  {user.avatar}
                </div>
                <div className="text-white font-bold">{user.name}</div>
                <div className="text-blue-200 text-sm">{user.score} pts</div>
              </div>
              <div className={`${heights[rank]} w-20 bg-gradient-to-t ${
                rank === 1 ? 'from-yellow-400 to-yellow-300' :
                rank === 2 ? 'from-gray-400 to-gray-300' :
                'from-orange-400 to-orange-300'
              } rounded-t-lg flex items-start justify-center pt-4`}>
                {getRankIcon(rank)}
              </div>
            </div>
          )
        })}
      </div>

      {/* Full Leaderboard */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="space-y-4">
          {leaderboardData.map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  {getRankIcon(user.rank)}
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-lg">
                  {user.avatar}
                </div>
                <div>
                  <div className="text-white font-bold">{user.name}</div>
                  <div className="text-blue-200 text-sm">{user.score} points</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`flex items-center space-x-1 text-sm ${
                  user.change.startsWith('+') ? 'text-green-400' :
                  user.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'
                }`}>
                  <TrendingUp size={16} />
                  <span>{user.change}</span>
                </div>
                <div className="text-white font-bold text-lg">
                  #{user.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeaderboardPage