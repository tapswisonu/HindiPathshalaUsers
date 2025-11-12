import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login"; // if you have a generic login
import StudentLogin from "./pages/student/Login";
import TeacherLogin from "./pages/teacher/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/Profile";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherProfile from "./pages/teacher/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import LiveClass from "./pages/class/LiveClass";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/live-class" element={<LiveClass />} />

      <Route path="/student">
        <Route
          path="dashboard"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/teacher">
        <Route
          path="dashboard"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TeacherProfile />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
