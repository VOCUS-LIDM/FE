import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2, FileText, X } from 'lucide-react';
import { COURSES } from '../../data/mockData';

const CourseManagement = () => {
  const [courses, setCourses] = useState(COURSES);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    package: '',
    subtopics: '',
    file: null, // Untuk menyimpan file modul
  });
  const [isAdding, setIsAdding] = useState(false);

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    return course.status === filter;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewCourse(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    setIsAdding(true);

    // Simulasi proses pengiriman data dan file ke model AI
    console.log("Mengirim data kursus ke model AI untuk diproses:", newCourse);
    
    setTimeout(() => {
      // Simulasikan pembuatan ID dan data kursus
      const courseId = courses.length + 1;
      const addedCourse = {
        id: courseId,
        title: newCourse.title,
        description: `Sub-bab: ${newCourse.subtopics}`,
        category: newCourse.title,
        lessons: 0, // Disesuaikan setelah diproses AI
        duration: 'N/A',
        difficulty: newCourse.package,
        rating: 0,
        status: 'draft', // Menggunakan status draft sampai diproses
        created: new Date().toISOString().split('T')[0],
        gradient: 'from-blue-400 to-purple-600',
        enrolled: 0,
        // File modul akan diproses oleh backend/AI
      };

      setCourses(prev => [...prev, addedCourse]);
      setShowForm(false);
      setIsAdding(false);
      setNewCourse({
        title: '',
        package: '',
        subtopics: '',
        file: null,
      });

      console.log("Kursus baru berhasil ditambahkan!");
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manajemen Pembelajaran</h1>
          <p className="text-slate-400">Buat dan kelola materi pembelajaran</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={20} />
          <span>Tambah Kursus</span>
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl p-8 w-full max-w-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Tambah Kursus Baru</h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 text-white hover:text-red-400 rounded-full"
                title="Batal"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddCourse} className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Judul Mata Pelajaran</label>
                <input
                  type="text"
                  name="title"
                  value={newCourse.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Contoh: Matematika"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Pilih Paket</label>
                <select
                  name="package"
                  value={newCourse.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Pilih Paket</option>
                  <option value="Paket A">Paket A</option>
                  <option value="Paket B">Paket B</option>
                  <option value="Paket C">Paket C</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">File Modul (Dokumen/PDF)</label>
                <div className="flex items-center space-x-3 bg-slate-700 border border-slate-600 rounded-lg">
                  <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 px-4 rounded-l-lg">
                    <span>Pilih File</span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </label>
                  <span className="text-slate-400 text-sm truncate">
                    {newCourse.file ? newCourse.file.name : 'Belum ada file yang dipilih'}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 text-white/60 hover:text-white transition-colors"
                  disabled={isAdding}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isAdding}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {isAdding ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Menambahkan...</span>
                    </>
                  ) : (
                    <>
                      <Plus size={20} />
                      <span>Tambah Kursus</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">{courses.length}</div>
          <div className="text-slate-400 text-sm">Total Kursus</div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">
            {courses.filter(c => c.status === 'active').length}
          </div>
          <div className="text-slate-400 text-sm">Kursus Aktif</div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">
            {courses.reduce((sum, c) => sum + (c.enrolled || 0), 0)}
          </div>
          <div className="text-slate-400 text-sm">Total Pendaftar</div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <div className="text-3xl font-bold text-white mb-1">
            {(courses.reduce((sum, c) => sum + (c.rating || 0), 0) / courses.length).toFixed(1)}
          </div>
          <div className="text-slate-400 text-sm">Rata-rata Rating</div>
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
            {filterType === 'all' ? 'Semua Kursus' :
              filterType === 'active' ? 'Aktif' : 'Draft'}
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
                <div className="text-white font-bold text-lg">{course.enrolled || 0}</div>
                <div className="text-slate-400 text-xs">Pendaftar</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{course.rating || 0}</div>
                <div className="text-slate-400 text-xs">Rating</div>
              </div>
            </div>

            <div className="text-slate-400 text-sm mb-4">
              <div>Pelajaran: {course.lessons || 0} • Durasi: {course.duration || '-'}</div>
              <div>Kesulitan: {course.difficulty || '-'} • Kategori: {course.category || '-'}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-slate-500 text-xs">Dibuat: {course.created || '-'}</div>
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