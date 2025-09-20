export const ADMIN_STATS = {
  totalUsers: 156,
  totalCourses: 12,
  totalQuizzes: 45,
  activeUsers: 89,
  completionRate: 67,
  avgScore: 78
};

export const RECENT_ACTIVITIES = [
  { id: 1, user: 'Raihan', action: 'Menyelesaikan Kuis: Matematika', time: '2 menit yang lalu', type: 'quiz' },
  { id: 2, user: 'Arna Wati', action: 'Memulai Kursus: Fisika', time: '5 menit yang lalu', type: 'course' },
  { id: 3, user: 'Mondo', action: 'Meraih skor: 95%', time: '10 menit yang lalu', type: 'achievement' },
  { id: 4, user: 'Aidhil Aksan', action: 'Bergabung ke platform', time: '1 jam yang lalu', type: 'user' }
];

export const USER_LIST = [
  { id: 1, name: 'Raihan', email: 'raihan@example.com', role: 'student', score: 850, courses: 3, lastActive: '2 jam yang lalu', status: 'active' },
  { id: 2, name: 'Arna Wati', email: 'arna@example.com', role: 'student', score: 1250, courses: 5, lastActive: '1 jam yang lalu', status: 'active' },
  { id: 3, name: 'Mondo', email: 'mondo@example.com', role: 'student', score: 1180, courses: 4, lastActive: '3 jam yang lalu', status: 'active' },
  { id: 4, name: 'Aidhil Aksan', email: 'aidhil@example.com', role: 'student', score: 1120, courses: 3, lastActive: '1 hari yang lalu', status: 'inactive' }
];

export const QUIZ_LIST = [
  { id: 1, title: 'Matematika Dasar', course: 'Matematika', questions: 20, attempts: 45, avgScore: 78, status: 'active', created: '2024-01-15' },
  { id: 2, title: 'Tata Bahasa Inggris', course: 'Bahasa Inggris', questions: 15, attempts: 32, avgScore: 82, status: 'active', created: '2024-01-20' },
  { id: 3, title: 'Hukum Fisika', course: 'Fisika', questions: 25, attempts: 28, avgScore: 75, status: 'draft', created: '2024-01-25' }
];

export const COURSES = [
  { id: 1, title: 'Matematika', description: 'Pelajari konsep dasar matematika', lessons: 12, duration: '4 jam', category: 'sains', difficulty: 'Pemula', rating: 4.8, enrolled: 45, status: 'active', created: '2024-01-15' },
  { id: 2, title: 'Bahasa Inggris', description: 'Tingkatkan kemampuan Bahasa Inggris Anda', lessons: 15, duration: '6 jam', category: 'bahasa', difficulty: 'Menengah', rating: 4.9, enrolled: 67, status: 'active', created: '2024-01-20' },
  { id: 3, title: 'Fisika', description: 'Pahami prinsip-prinsip fisika', lessons: 14, duration: '7 jam', category: 'sains', difficulty: 'Mahir', rating: 4.5, enrolled: 23, status: 'draft', created: '2024-01-25' }
];