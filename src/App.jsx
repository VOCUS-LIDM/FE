import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContext'
import Layout from './components/common/Layout'
import Dashboard from './pages/Dashboard'
import CoursePage from './pages/CoursePage'
import QuizPage from './pages/QuizPage'
import LeaderboardPage from './pages/LeaderboardPage'
import LoginPage from './pages/LoginPage'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isLoggedIn, setIsLoggedIn] = useState(true) 

  const renderPage = () => {
    if (!isLoggedIn) {
      return <LoginPage onLogin={() => setIsLoggedIn(true)} />
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />
      case 'course':
        return <CoursePage />
      case 'quiz':
        return <QuizPage />
      case 'leaderboard':
        return <LeaderboardPage />
      default:
        return <Dashboard onNavigate={setCurrentPage} />
    }
  }

  return (
    <AuthProvider>
      <AppProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          {!isLoggedIn ? (
            renderPage()
          ) : (
            <Layout 
              currentPage={currentPage} 
              onNavigate={setCurrentPage} 
              onLogout={() => setIsLoggedIn(false)}
            >
              {renderPage()}
            </Layout>
          )}
        </div>
      </AppProvider>
    </AuthProvider>
  )
}

export default App