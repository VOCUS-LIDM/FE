import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { QUIZ_LIST } from '../../data/mockData';

const QuizManagement = () => {
  const [quizzes, setQuizzes] = useState(QUIZ_LIST);
  const [filter, setFilter] = useState('all');

  const filteredQuizzes = quizzes.filter(quiz => {
    if (filter === 'all') return true;
    return quiz.status === filter;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Quiz Management</h1>
          <p className="text-slate-400">Create and manage quizzes</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus size={20} />
          <span>Create Quiz</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {['all', 'active', 'draft'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterType
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {filterType === 'all' ? 'All Quizzes' :
              filterType === 'active' ? 'Active' : 'Draft'}
          </button>
        ))}
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div key={quiz.id} className="bg-slate-800/50 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{quiz.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                quiz.status === 'active'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-yellow-500/20 text-yellow-300'
              }`}>
                {quiz.status}
              </span>
            </div>

            <div className="text-slate-400 mb-4">
              <div className="text-sm">Course: {quiz.course}</div>
              <div className="text-sm">Questions: {quiz.questions}</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{quiz.attempts}</div>
                <div className="text-slate-400 text-xs">Attempts</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{quiz.avgScore}%</div>
                <div className="text-slate-400 text-xs">Avg Score</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-slate-500 text-xs">Created: {quiz.created}</div>
              <div className="flex space-x-2">
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizManagement;