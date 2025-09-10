import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser } from '../services/service'; // Import service API

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

<<<<<<< HEAD
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
    name: 'Admin',
    email: 'admin@example.com',
    avatar: '👨‍💼',
    role: 'administrator',
    lastActive: 'now'
  }
};
  
=======
>>>>>>> 2c5ecaf (Add authentication features and integrate API services)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Mulai dengan true untuk cek token

    // Cek apakah ada token tersimpan di localStorage saat aplikasi dimuat
  useEffect(() => {
    const checkStoredAuth = () => {
      try {
        console.log('Mengecek token tersimpan...');
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (savedToken && savedUser) {
          const userData = JSON.parse(savedUser);
          setToken(savedToken);
          setUser(userData);
          console.log('✅ Token ditemukan, user tetap login:', userData.name || userData.email);
        } else {
          console.log('❌ Tidak ada token tersimpan, user perlu login');
        }
      } catch (error) {
        console.error('Error saat membaca token dari localStorage:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setIsLoading(false);
        console.log('Selesai mengecek token, isLoading set to false');
      }
    };

    checkStoredAuth();
  }, []);

  // Fungsi login menggunakan API
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Panggil API login
      console.log('Mencoba login dengan:', email);
      const result = await loginUser(email, password);
      
      console.log('Response dari API login:', result);
      
      if (result.success) {
        const userData = result.data.user || result.data;
        const userToken = result.data.token || result.data.access_token || result.data.accessToken;
        
        console.log('User data yang akan disimpan:', userData);
        console.log('Token yang akan disimpan:', userToken);
        
        // Validasi apakah token ada
        if (!userToken) {
          console.error('Token tidak ditemukan dalam response API');
          return { success: false, error: 'Token tidak ditemukan dalam response' };
        }
        
        setUser(userData);
        setToken(userToken);
        try {
          // Pastikan userToken valid sebelum disimpan
          if (userToken && typeof userToken === 'string') {
            localStorage.setItem('token', userToken);
            localStorage.setItem('user', JSON.stringify(userData));
            
            // Verifikasi penyimpanan
            const savedToken = localStorage.getItem('token');
            const savedUser = localStorage.getItem('user');
            
            console.log('Token tersimpan di localStorage:', savedToken);
            console.log('User tersimpan di localStorage:', savedUser);
          } else {
            console.error('userToken tidak valid untuk disimpan:', userToken);
          }
          
        } catch (storageError) {
          console.error('Error saat menyimpan ke localStorage:', storageError);
        }
        
        console.log('Login berhasil dan token tersimpan:', userData);
        return { success: true, user: userData };
      } else {
        console.log('Login gagal:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Error saat login:', error);
      return { success: false, error: 'Terjadi kesalahan saat login' };
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi logout
  const logout = async () => {
    setIsLoading(true);
    try {
      // Jika API memerlukan logout request
      if (token) {
        await logoutUser(token);
      }
    } catch (error) {
      console.error('Error saat logout:', error);
    } finally {
      // Hapus data user dan token
      setUser(null);
      setToken(null);
      
      // Hapus dari localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      console.log('Logout berhasil, token dihapus');
      setIsLoading(false);
    }
  };

  // Fungsi register
  const register = async (name, email, password) => {
    setIsLoading(true);
    try {
      // Panggil API register
      const result = await registerUser(name, email, password);
      
      if (result.success) {
        console.log('Register berhasil:', result.data);
        return { success: true, data: result.data };
      } else {
        console.log('Register gagal:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Error saat register:', error);
      return { success: false, error: 'Terjadi kesalahan saat register' };
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk cek apakah user sudah login
  const isAuthenticated = () => {
    return user !== null && token !== null;
  };

  // Fungsi untuk mendapatkan header authorization
  const getAuthHeader = () => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      login, 
      logout, 
      register,
      isAuthenticated,
      getAuthHeader,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};