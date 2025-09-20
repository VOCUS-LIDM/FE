import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Data pengguna mock, ini berfungsi sebagai database sederhana
const mockUsers = {
  'raihan@example.com': {
    name: 'Raihan',
    email: 'raihan@example.com',
    avatar: '👨‍🎓',
    role: 'student',
    score: 850,
    completedCourses: 3
  },
  'admin@example.com': {
    name: 'Pengajar A',
    email: 'admin@example.com',
    avatar: '👨‍💼',
    role: 'administrator',
    lastActive: 'now'
  }
};
  
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Mulai dengan user null

  const login = (email) => {
    // Cari data user berdasarkan email
    const userData = mockUsers[email];
    if (userData) {
      // Jika user ditemukan, atur user di state
      setUser(userData);
      console.log('Login berhasil:', userData.name);
      return true;
    }
    // Jika tidak ditemukan, set user ke null (opsional)
    setUser(null);
    console.log('Login gagal: Email tidak ditemukan');
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};