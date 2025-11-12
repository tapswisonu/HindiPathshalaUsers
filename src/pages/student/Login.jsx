// src/pages/student/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((s) => s.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(login({ email, password }));
    if (res.meta.requestStatus === "fulfilled") {
      // only allow students to continue to student dashboard
      const role = JSON.parse(localStorage.getItem("user"))?.role;
      if (role === "student") navigate("/student/dashboard");
      else alert("Please log in with a student account.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl mb-4">Student Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
