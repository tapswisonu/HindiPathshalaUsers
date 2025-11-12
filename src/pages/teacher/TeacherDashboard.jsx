// src/pages/teacher/Dashboard.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  const user = useSelector((s) => s.auth.user);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Teacher Dashboard</h1>
      <p className="mt-2">Welcome, {user?.name}</p>
      <div className="mt-4">
        <Link to="/teacher/profile" className="text-blue-600">
          View Profile
        </Link>
      </div>
    </div>
  );
}
