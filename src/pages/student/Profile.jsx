import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaUserGraduate, FaArrowLeft } from "react-icons/fa";

export default function StudentProfile() {
  const user = useSelector((s) => s.auth.user);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 relative">
        {/* 🔹 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-gray-500 hover:text-blue-600 transition"
        >
          <FaArrowLeft size={18} />
        </button>

        {/* 🔹 Avatar Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-3 shadow-md">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.name || "Student"}
          </h2>
          <p className="text-sm text-gray-500 mt-1 capitalize">{user?.role}</p>
        </div>

        {/* 🔹 Profile Info */}
        <div className="divide-y divide-gray-200">
          <div className="flex items-center py-3">
            <FaEnvelope className="text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-800 font-medium">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center py-3">
            <FaUserGraduate className="text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-gray-800 font-medium capitalize">
                {user?.role}
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 Footer */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/student/dashboard")}
            className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
