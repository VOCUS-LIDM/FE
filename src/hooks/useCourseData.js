import { useState, useEffect } from 'react'
import { COURSES } from '../data/courses'

export const useCourseData = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(COURSES)
      setLoading(false)
    }, 1000)
  }, [])

  const getCourseById = (id) => {
    return courses.find(course => course.id === id)
  }

  const getCoursesByCategory = (category) => {
    return courses.filter(course => course.category === category)
  }

  return {
    courses,
    loading,
    getCourseById,
    getCoursesByCategory
  }
}