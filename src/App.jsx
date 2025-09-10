import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { AppProvider } from './context/AppContext.jsx';

// Import komponen dan halaman untuk mode User
import UserLayout from './components/common/Layout.jsx';
import UserDashboard from './pages/Dashboard.jsx';
import UserCoursePage from './pages/CoursePage.jsx';
import UserQuizPage from './pages/QuizPage.jsx';
import UserLeaderboardPage from './pages/LeaderboardPage.jsx';
import UserLoginPage from './pages/LoginPage.jsx';

// Import komponen dan halaman untuk mode Admin
import AdminLayout from './components/admin/AdminLayout.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import UserManagement from './pages/admin/UserManagement.jsx';
import QuizManagement from './pages/admin/QuizManagement.jsx';
import Reports from './pages/admin/Reports.jsx';
import ActivityMonitoring from './pages/admin/ActivityMonitoring.jsx';
import CourseManagement from './pages/admin/CourseManagement.jsx';

const AppContent = () => {
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    // Tampilkan halaman user jika role adalah 'student'
    if (user.role === 'student') {
      switch (currentPage) {
        case 'dashboard': return <UserDashboard onNavigate={setCurrentPage} />;
        case 'course': return <UserCoursePage />;
        case 'quiz': return <UserQuizPage />;
        case 'leaderboard': return <UserLeaderboardPage />;
        default: return <UserDashboard onNavigate={setCurrentPage} />;
      }
    }
    
    // Tampilkan halaman admin jika role adalah 'administrator'
    if (user.role === 'administrator') {
      switch (currentPage) {
        case 'dashboard': return <AdminDashboard onNavigate={setCurrentPage} />;
        case 'users': return <UserManagement />;
        case 'quizzes': return <QuizManagement />;
        case 'reports': return <Reports />;
        case 'activities': return <ActivityMonitoring />;
        case 'courses': return <CourseManagement />;
        default: return <AdminDashboard onNavigate={setCurrentPage} />;
      }
    }
    return null; // Tampilkan null jika tidak ada halaman yang cocok
  };
  
  // Jika tidak ada user yang login, tampilkan halaman login
  if (!user) {
    return <UserLoginPage />;
  }

  // Pilih layout dan background sesuai peran
  const LayoutComponent = user.role === 'administrator' ? AdminLayout : UserLayout;
  const backgroundClass = user.role === 'administrator'
    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
    : 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900';

  return (
    <div className={`min-h-screen ${backgroundClass}`}>
      <LayoutComponent
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={logout}
      >
        {renderPage()}
      </LayoutComponent>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;