import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { COURSES } from '../../data/mockData';

const CourseManagement = () => {
  const [courses, setCourses] = useState(COURSES);
  const [filter, setFilter] = useState('all');

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    return course.status === filter;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Course Management</h1>
          <p className="text-slate-400">Create and manage learning materials</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus size={20} />
          <span>Add Course</span>
        </button>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">{courses.length}</div>
          <div className="text-slate-400 text-sm">Total Courses</div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">
            {courses.filter(c => c.status === 'active').length}
          </div>
          <div className="text-slate-400 text-sm">Active Courses</div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">
            {courses.reduce((sum, c) => sum + c.enrolled, 0)}
          </div>
          <div className="text-slate-400 text-sm">Total Enrollments</div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">
            {(courses.reduce((sum, c) => sum + c.rating, 0) / courses.length).toFixed(1)}
          </div>
          <div className="text-slate-400 text-sm">Avg Rating</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {['all', 'active', 'draft'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterType
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {filterType === 'all' ? 'All Courses' :
              filterType === 'active' ? 'Active' : 'Draft'}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-slate-800/50 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{course.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                course.status === 'active'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-yellow-500/20 text-yellow-300'
              }`}>
                {course.status}
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-4">{course.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{course.enrolled}</div>
                <div className="text-slate-400 text-xs">Enrolled</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{course.rating}</div>
                <div className="text-slate-400 text-xs">Rating</div>
              </div>
            </div>

            <div className="text-slate-400 text-sm mb-4">
              <div>Lessons: {course.lessons} • Duration: {course.duration}</div>
              <div>Difficulty: {course.difficulty} • Category: {course.category}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-slate-500 text-xs">Created: {course.created}</div>
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

export default CourseManagement;