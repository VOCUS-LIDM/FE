import React, { useState } from 'react';
import { HelpCircle, BookOpen, Users, Trophy, Eye } from 'lucide-react';
import { RECENT_ACTIVITIES } from '../../data/mockData';

const ActivityMonitoring = () => {
  const [activities, setActivities] = useState(RECENT_ACTIVITIES);
  const [filter, setFilter] = useState('all');

  const filteredActivities = activities.filter(activity => {
    if (filter === 'all') return true;
    return activity.type === filter;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">User Activity Monitoring</h1>
        <p className="text-slate-400">Monitor real-time user activities and interactions</p>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <HelpCircle className="text-green-400" size={24} />
            </div>
            <span className="text-green-400 text-sm font-medium">+15%</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">142</div>
          <div className="text-slate-400 text-sm">Quiz Attempts Today</div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <BookOpen className="text-blue-400" size={24} />
            </div>
            <span className="text-blue-400 text-sm font-medium">+8%</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">89</div>
          <div className="text-slate-400 text-sm">Course Views Today</div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Users className="text-purple-400" size={24} />
            </div>
            <span className="text-purple-400 text-sm font-medium">+12%</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">67</div>
          <div className="text-slate-400 text-sm">Active Users</div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-500/20 rounded-xl">
              <Trophy className="text-orange-400" size={24} />
            </div>
            <span className="text-orange-400 text-sm font-medium">+5%</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">23</div>
          <div className="text-slate-400 text-sm">Achievements Earned</div>
        </div>
      </div>

      {/* Activity Filters */}
      <div className="flex space-x-4 mb-6">
        {['all', 'quiz', 'course', 'user', 'achievement'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterType
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {filterType === 'all' ? 'All Activities' :
              filterType === 'quiz' ? 'Quiz' :
              filterType === 'course' ? 'Course' :
              filterType === 'user' ? 'User' : 'Achievement'}
          </button>
        ))}
      </div>

      {/* Real-time Activity Feed */}
      <div className="bg-slate-800/50 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Live Activity Feed</h3>
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Live</span>
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredActivities.concat(filteredActivities).map((activity, index) => (
            <div key={`${activity.id}-${index}`} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                activity.type === 'quiz' ? 'bg-green-500' :
                activity.type === 'course' ? 'bg-blue-500' :
                activity.type === 'achievement' ? 'bg-yellow-500' : 'bg-purple-500'
              }`}></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                {activity.user.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-medium truncate">{activity.user}</div>
                <div className="text-slate-400 text-sm truncate">{activity.action}</div>
              </div>
              <div className="text-slate-500 text-xs flex-shrink-0">{activity.time}</div>
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-600 rounded-lg transition-colors flex-shrink-0">
                <Eye size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityMonitoring;