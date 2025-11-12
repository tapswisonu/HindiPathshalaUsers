// src/pages/teacher/Profile.jsx
import React from "react";
import { useSelector } from "react-redux";

export default function TeacherProfile() {
  const user = useSelector((s) => s.auth.user);
  return (
    <div className="p-6 max-w-xl bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Profile</h2>
      <div>
        <b>Name:</b> {user?.name}
      </div>
      <div>
        <b>Email:</b> {user?.email}
      </div>
      <div>
        <b>Role:</b> {user?.role}
      </div>
    </div>
  );
}
