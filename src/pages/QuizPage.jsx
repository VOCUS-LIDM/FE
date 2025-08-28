import { useState } from 'react'
import { Clock, Award, Target } from 'lucide-react'

const QuizPage = () => {
  const [activeTab, setActiveTab] = useState('available')

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Quiz</h1>
        <p className="text-blue-100">Uji kemampuanmu dengan berbagai quiz menarik</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        {['available', 'completed', 'results'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-blue-900'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {tab === 'available' ? 'Tersedia' :
             tab === 'completed' ? 'Selesai' : 'Hasil'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Quiz Cards */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Mathematics Quiz {i}</h3>
              <Award className="text-yellow-400" size={24} />
            </div>
            
            <p className="text-blue-200 text-sm mb-4">
              Test your understanding of basic mathematical concepts
            </p>
            
            <div className="flex items-center space-x-4 mb-4 text-white/60 text-sm">
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>15 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Target size={16} />
                <span>20 questions</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 rounded-lg font-medium hover:from-green-600 hover:to-teal-700 transition-all">
              Mulai Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizPage