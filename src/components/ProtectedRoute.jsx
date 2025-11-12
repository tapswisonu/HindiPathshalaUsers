// src/components/ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const token = useSelector((s) => s.auth.token);
  const user = useSelector((s) => s.auth.user);

  if (!token) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user?.role))
    return <Navigate to="/login" replace />;
  return children;
}
