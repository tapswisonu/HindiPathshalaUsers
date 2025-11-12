import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // default selection
  const dispatch = useDispatch();
  const { loading, error } = useSelector((s) => s.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role before logging in.");
      return;
    }

    // dispatch Redux action
    const res = await dispatch(login({ email, password }));

    if (res.meta.requestStatus === "fulfilled") {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.role === role) {
        if (role === "student") navigate("/student/dashboard");
        else if (role === "teacher") navigate("/teacher/dashboard");
        else navigate("/");
      } else {
        alert(
          `You tried to log in as ${role}, but your account is ${user?.role}`
        );
        localStorage.clear();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow p-6 rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        <label className="block mb-3">
          <span className="block text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="block text-sm font-medium text-gray-700">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">Role</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
