import React from 'react';
import { Download } from 'lucide-react';

const Reports = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Reports & Analytics</h1>
          <p className="text-slate-400">Export data and generate reports</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Download size={20} />
          <span>Export All Data</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Export Options */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Export Data</h3>
          <div className="space-y-4">
            <button className="w-full p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-left transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">User Data</div>
                  <div className="text-slate-400 text-sm">Export all user information and statistics</div>
                </div>
                <Download size={20} className="text-slate-400" />
              </div>
            </button>

            <button className="w-full p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-left transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Quiz Results</div>
                  <div className="text-slate-400 text-sm">Export quiz attempts and scores</div>
                </div>
                <Download size={20} className="text-slate-400" />
              </div>
            </button>

            <button className="w-full p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-left transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Course Progress</div>
                  <div className="text-slate-400 text-sm">Export course completion data</div>
                </div>
                <Download size={20} className="text-slate-400" />
              </div>
            </button>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Analytics Summary</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300">User Engagement</span>
                <span className="text-white font-bold">87%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300">Course Completion</span>
                <span className="text-white font-bold">67%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300">Quiz Success Rate</span>
                <span className="text-white font-bold">78%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;