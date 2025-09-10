import { useAuth } from '../context/AuthContext';

// Komponen untuk debug dan test AuthContext
const AuthDebug = () => {
  const { user, token, isLoading, isAuthenticated, login, logout } = useAuth();

  const handleTestLogin = async () => {
    console.log('🧪 Testing login...');
    const result = await login('test@example.com', 'password123');
    console.log('🧪 Login result:', result);
  };

  const handleTestLogout = async () => {
    console.log('🧪 Testing logout...');
    await logout();
    console.log('🧪 Logout completed');
  };

  const handleCheckLocalStorage = () => {
    console.log('🧪 Checking localStorage...');
    console.log('Token:', localStorage.getItem('token'));
    console.log('User:', localStorage.getItem('user'));
  };

  const handleClearStorage = () => {
    console.log('🧪 Clearing localStorage...');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg m-4">
      <h2 className="text-xl font-bold mb-4">🧪 Auth Debug Panel</h2>
      
      <div className="mb-4 p-4 bg-white rounded border">
        <h3 className="font-semibold mb-2">📊 Current State:</h3>
        <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
        <p><strong>Authenticated:</strong> {isAuthenticated() ? 'Yes' : 'No'}</p>
        <p><strong>User:</strong> {user ? JSON.stringify(user) : 'null'}</p>
        <p><strong>Token:</strong> {token ? `${token.substring(0, 20)}...` : 'null'}</p>
      </div>

      <div className="space-x-2 mb-4">
        <button 
          onClick={handleTestLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          🧪 Test Login
        </button>
        <button 
          onClick={handleTestLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          🧪 Test Logout
        </button>
        <button 
          onClick={handleCheckLocalStorage}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          🧪 Check Storage
        </button>
        <button 
          onClick={handleClearStorage}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          🧪 Clear Storage
        </button>
      </div>

      <div className="text-sm text-gray-600">
        <p>💡 Buka Developer Tools (F12) → Console untuk melihat log detail</p>
      </div>
    </div>
  );
};

export default AuthDebug;
