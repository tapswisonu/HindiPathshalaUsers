// src/pages/student/Classes.jsx
import React from "react";
import api from "../../app/api";

const StudentClassCard = ({ cls }) => {
  const handleJoin = async () => {
    const res = await api.put(`/classes/join/${cls._id}`);
    window.open(res.data.meetingLink, "_blank");
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{cls.title}</h3>
      <p className="text-gray-600 text-sm">Teacher: {cls.teacherId.name}</p>
      <button
        onClick={handleJoin}
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Join Class
      </button>
    </div>
  );
};

export default StudentClassCard;
