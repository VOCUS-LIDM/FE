import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children, currentPage, onNavigate, onLogout }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="flex-1">
        <Header currentPage={currentPage} onLogout={onLogout} />
        <div className="flex-1 animate-fade-in">
          {children}
        </div>
      </div>
    </div>
  )
}