import axios from "axios";

// URL API Backend
const API_BASE_URL = "https://backend-748604676242.asia-southeast2.run.app";

// Konfigurasi axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menambahkan token ke setiap request
api.interceptors.request.use(
  (config) => {
    // Ambil token dari localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk handle response error (misal token expired)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Jika token expired atau unauthorized
    if (error.response?.status === 401) {
      // Hapus token yang tidak valid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirect ke login (opsional)
      // window.location.href = '/login';
      
      console.log('Token tidak valid, silakan login kembali');
    }
    return Promise.reject(error);
  }
);

// Fungsi untuk login
export const loginUser = async (email, password) => {
  try {
    // Kirim POST request ke endpoint /login
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    // Jika berhasil, return data response
    console.log("Login berhasil:", response.data);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    // Jika ada error, tangkap dan return error message
    console.error("Login gagal:", error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || "Login gagal, coba lagi",
    };
  }
};

// Fungsi untuk register (jika dibutuhkan)
export const registerUser = async (name, email, password) => {
  try {
    // Kirim POST request ke endpoint /register
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });

    // Jika berhasil, return data response
    console.log("Register berhasil:", response.data);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    // Jika ada error, tangkap dan return error message
    console.error("Register gagal:", error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || "Register gagal, coba lagi",
    };
  }
};

// Fungsi untuk logout (jika API memerlukan logout)
export const logoutUser = async (token) => {
  try {
    // Kirim POST request ke endpoint /logout dengan token
    const response = await api.post("/logout", {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Logout berhasil:", response.data);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Logout gagal:", error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || "Logout gagal",
    };
  }
};


