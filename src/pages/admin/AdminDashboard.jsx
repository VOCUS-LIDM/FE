import React from 'react';
import { Users, BookOpen, Activity, TrendingUp, Plus, HelpCircle, Download, BarChart3 } from 'lucide-react';
import { ADMIN_STATS, RECENT_ACTIVITIES } from '../../data/mockData';

const StatCard = ({ title, value, change, icon: Icon, color = 'indigo' }) => {
  const colors = {
    indigo: 'from-indigo-500 to-purple-600',
    green: 'from-green-500 to-emerald-600',
    blue: 'from-blue-500 to-cyan-600',
    orange: 'from-orange-500 to-red-600'
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-2xl p-6 text-white`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-xl">
          <Icon size={24} />
        </div>
        {change && (
          <span className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-200' : 'text-red-200'}`}>
            {change}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-white/80 text-sm">{title}</div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="p-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={ADMIN_STATS.totalUsers}
          change="+12%"
          icon={Users}
          color="indigo"
        />
        <StatCard
          title="Total Courses"
          value={ADMIN_STATS.totalCourses}
          change="+5%"
          icon={BookOpen}
          color="green"
        />
        <StatCard
          title="Active Users"
          value={ADMIN_STATS.activeUsers}
          change="+8%"
          icon={Activity}
          color="blue"
        />
        <StatCard
          title="Avg. Score"
          value={`${ADMIN_STATS.avgScore}%`}
          change="+3%"
          icon={TrendingUp}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {RECENT_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'quiz' ? 'bg-green-500' :
                  activity.type === 'course' ? 'bg-blue-500' :
                  activity.type === 'achievement' ? 'bg-yellow-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <div className="text-white font-medium">{activity.user}</div>
                  <div className="text-slate-400 text-sm">{activity.action}</div>
                </div>
                <div className="text-slate-500 text-xs">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors">
              <Plus size={24} className="mx-auto mb-2" />
              <div className="text-sm font-medium">Add Course</div>
            </button>
            <button className="p-4 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors">
              <HelpCircle size={24} className="mx-auto mb-2" />
              <div className="text-sm font-medium">Create Quiz</div>
            </button>
            <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
              <Download size={24} className="mx-auto mb-2" />
              <div className="text-sm font-medium">Export Data</div>
            </button>
            <button className="p-4 bg-orange-600 hover:bg-orange-700 rounded-lg text-white transition-colors">
              <BarChart3 size={24} className="mx-auto mb-2" />
              <div className="text-sm font-medium">View Reports</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;