import { useState } from 'react'
import CourseCard from '../components/course/CourseCard'
import VoiceLearningPage from '../components/voice/VoiceLearningPage'
import { COURSES } from '../data/courses'
import { ArrowLeft } from 'lucide-react'

const CoursePage = () => {
  const [filter, setFilter] = useState('all')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'voice-learning'

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    setViewMode('voice-learning')
  }

  const handleBackToCourses = () => {
    setSelectedCourse(null)
    setViewMode('list')
  }

  const filteredCourses = COURSES.filter(course => {
    if (filter === 'all') return true
    return course.category === filter
  })

  // Jika dalam mode voice learning, tampilkan komponen voice learning
  if (viewMode === 'voice-learning' && selectedCourse) {
    return (
      <div className="relative">
        {/* Back Button */}
        <button
          onClick={handleBackToCourses}
          className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Courses</span>
        </button>
        
        <VoiceLearningPage course={selectedCourse} />
      </div>
    )
  }

  // Mode tampilan list courses
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Kurikulum Belajar</h1>
        <p className="text-blue-100 mb-6">Pilih mata pelajaran yang ingin kamu pelajari bersama VOCUS</p>
        
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          {['all', 'science', 'language', 'culture'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === filterType
                  ? 'bg-white text-blue-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filterType === 'all' ? 'Semua' : 
               filterType === 'science' ? 'Sains' :
               filterType === 'language' ? 'Bahasa' : 'Budaya'}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={handleCourseClick}
          />
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
          <p className="text-blue-200">Try selecting a different filter</p>
        </div>
      )}
    </div>
  )
}

export default CoursePage