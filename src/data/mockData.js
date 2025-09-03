export const ADMIN_STATS = {
  totalUsers: 156,
  totalCourses: 12,
  totalQuizzes: 45,
  activeUsers: 89,
  completionRate: 67,
  avgScore: 78
};

export const RECENT_ACTIVITIES = [
  { id: 1, user: 'Raihan', action: 'Completed Quiz: Mathematics', time: '2 minutes ago', type: 'quiz' },
  { id: 2, user: 'Arna Wati', action: 'Started Course: Physics', time: '5 minutes ago', type: 'course' },
  { id: 3, user: 'Mondo', action: 'Achieved score: 95%', time: '10 minutes ago', type: 'achievement' },
  { id: 4, user: 'Aidhil Aksan', action: 'Joined the platform', time: '1 hour ago', type: 'user' }
];

export const USER_LIST = [
  { id: 1, name: 'Raihan', email: 'raihan@example.com', role: 'student', score: 850, courses: 3, lastActive: '2 hours ago', status: 'active' },
  { id: 2, name: 'Arna Wati', email: 'arna@example.com', role: 'student', score: 1250, courses: 5, lastActive: '1 hour ago', status: 'active' },
  { id: 3, name: 'Mondo', email: 'mondo@example.com', role: 'student', score: 1180, courses: 4, lastActive: '3 hours ago', status: 'active' },
  { id: 4, name: 'Aidhil Aksan', email: 'aidhil@example.com', role: 'student', score: 1120, courses: 3, lastActive: '1 day ago', status: 'inactive' }
];

export const QUIZ_LIST = [
  { id: 1, title: 'Mathematics Basic', course: 'Mathematics', questions: 20, attempts: 45, avgScore: 78, status: 'active', created: '2024-01-15' },
  { id: 2, title: 'English Grammar', course: 'English', questions: 15, attempts: 32, avgScore: 82, status: 'active', created: '2024-01-20' },
  { id: 3, title: 'Physics Laws', course: 'Physics', questions: 25, attempts: 28, avgScore: 75, status: 'draft', created: '2024-01-25' }
];

export const COURSES = [
  { id: 1, title: 'Mathematics', description: 'Learn fundamental math concepts', lessons: 12, duration: '4 hours', category: 'science', difficulty: 'Beginner', rating: 4.8, enrolled: 45, status: 'active', created: '2024-01-15' },
  { id: 2, title: 'English', description: 'Improve your English skills', lessons: 15, duration: '6 hours', category: 'language', difficulty: 'Intermediate', rating: 4.9, enrolled: 67, status: 'active', created: '2024-01-20' },
  { id: 3, title: 'Physics', description: 'Understand physics principles', lessons: 14, duration: '7 hours', category: 'science', difficulty: 'Advanced', rating: 4.5, enrolled: 23, status: 'draft', created: '2024-01-25' }
];