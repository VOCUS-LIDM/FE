import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [notifications, setNotifications] = useState([])

  const addNotification = (notification) => {
    setNotifications(prev => [...prev, { ...notification, id: Date.now() }])
  }

  return (
    <AppContext.Provider value={{ 
      loading, 
      setLoading, 
      notifications, 
      addNotification 
    }}>
      {children}
    </AppContext.Provider>
  )
}