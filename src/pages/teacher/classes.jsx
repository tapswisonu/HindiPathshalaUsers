// src/pages/teacher/Classes.jsx
import React from "react";
// import { useDispatch } from "react-redux";
import api from "../../app/api";

const TeacherClassCard = ({ cls }) => {
  const handleStart = async () => {
    const res = await api.put(`/classes/start/${cls._id}`);
    window.open(res.data.meetingLink, "_blank"); // open Jitsi meet
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{cls.title}</h3>
      <p className="text-gray-600 text-sm">Time: {cls.startTime}</p>
      <button
        onClick={handleStart}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Start Class
      </button>
    </div>
  );
};

export default TeacherClassCard;
