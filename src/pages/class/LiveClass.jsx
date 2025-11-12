// src/pages/class/LiveClass.jsx
import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useLocation, useNavigate } from "react-router-dom";

export default function LiveClass() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Meeting link passed via navigation state
  const meetingLink = location.state?.meetingLink;

  if (!meetingLink) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-gray-700 text-lg mb-4">
          No meeting link provided 😢
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <JitsiMeeting
        roomName={meetingLink.split("/").pop()}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: false,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
          TOOLBAR_ALWAYS_VISIBLE: true,
        }}
        getIFrameRef={(node) => (node.style.height = "100vh")}
      />
    </div>
  );
}
