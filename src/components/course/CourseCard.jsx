const CourseCard = ({ course, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick(course)}
      className={`bg-gradient-to-br ${course.gradient} rounded-2xl p-8 h-80 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
      
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-20 h-20 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-8 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-white/10 rounded-full"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Course Title - Vertical */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 transform -rotate-90 origin-left absolute left-8 top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform">
            {course.title}
          </h3>
        </div>
        
        {/* Course Info */}
        <div className="absolute top-8 right-8 text-white/80 text-right">
          <div className="text-xs font-medium">{course.lessons} Lessons</div>
          <div className="text-xs">{course.duration}</div>
        </div>
        
        {/* Course Number */}
        <div className="absolute bottom-8 right-8">
          <span className="text-6xl font-bold text-white/30 group-hover:text-white/40 transition-colors">
            {course.number}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-4 left-8 right-8">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-white rounded-full h-1 transition-all duration-300"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard