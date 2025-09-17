import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v0.1';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add request interceptor to include token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const loginService = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data.payload; // Assuming response has payload with token and user
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const registerService = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data.payload; // Assuming response has payload
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const logoutService = async () => {
  try {
    await api.post('/logout');
    localStorage.removeItem('token');
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};

export const getUserService = async (id) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data.payload;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user');
  }
};

export const updateUserService = async (id, userData) => {
  try {
    const response = await api.post(`/updateUser/${id}`, userData);
    return response.data.payload;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update user');
  }
};

export const fetchNewsService = async (id = null) => {
  try {
    const url = id ? `/News/${id}` : '/News';
    const response = await api.get(url);
    return response.data.payload || response.data; // Assuming payload or direct data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch news');
  }
};

export const addNewsService = async (newsData) => {
  try {
    const response = await api.post('/addNews', newsData);
    return response.data.payload;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to add news');
  }
};

export const deleteNewsService = async (id) => {
  try {
    const response = await api.post(`/deleteNews/${id}`);
    return response.data.payload;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete news');
  }
};
