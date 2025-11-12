// src/features/auth/authService.js
import api from "../../app/api";

const login = async (credentials) => {
  // backend returns { id, name, email, role, token }
  const res = await api.post("/auth/login", credentials);
  return res.data;
};

const authService = { login };
export default authService;
