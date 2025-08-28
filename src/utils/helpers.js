export const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
}

export const calculateProgress = (completed, total) => {
  return Math.round((completed / total) * 100)
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

export const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Selamat Pagi'
  if (hour < 18) return 'Selamat Siang'
  return 'Selamat Malam'
}