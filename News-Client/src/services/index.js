import axios from 'axios';

export const loginService = async ({ email, password }) => {
  // TODO: Implement actual login API call
  // This is a stub for demonstration
  if (email === "admin@example.com" && password === "admin") {
    return { role: "admin", token: "admin-token" };
  }
  if (email && password) {
    return { role: "user", token: "user-token" };
  }
  throw new Error("Invalid credentials");
};

export const registerService = async (userData) => {
  // TODO: Implement actual registration API call
  // This is a stub for demonstration
  if (userData.email && userData.password) {
    return { success: true };
  }
  throw new Error("Invalid registration data");
};

export const fetchNewsService = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  const response = await axios.get('http://localhost:8000/api/v0.1/News', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

export const logoutService = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  await axios.post('http://localhost:8000/api/v0.1/logout', {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  localStorage.removeItem('token');
};
