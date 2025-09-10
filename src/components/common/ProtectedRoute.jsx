// import { useAuth } from '../context/AuthContext';

// // Komponen untuk melindungi halaman yang butuh login
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, isLoading, user } = useAuth();

//   // Tampilkan loading saat masih mengecek token
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Mengecek status login...</p>
//         </div>
//       </div>
//     );
//   }

//   // Jika belum login, redirect ke halaman login
//   if (!isAuthenticated()) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Akses Ditolak</h2>
//           <p className="text-gray-600 mb-4">Anda perlu login untuk mengakses halaman ini</p>
//           <button 
//             onClick={() => window.location.href = '/login'}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Login Sekarang
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Jika sudah login, tampilkan konten
//   return children;
// };

// export default ProtectedRoute;
