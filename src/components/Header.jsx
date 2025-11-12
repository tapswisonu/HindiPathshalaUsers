import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-[var(--color-brand-primary)] text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center font-bold">
          HT
        </div>
        <h1 className="text-xl font-semibold">Hindi Tutoring</h1>
      </div>

      <nav className="flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-sm px-3 py-1 rounded hover:bg-white/10"
        >
          Home
        </button>

        <button
          onClick={handleLogout}
          className="bg-white text-[var(--color-brand-primary)] px-4 py-1 rounded font-medium hover:opacity-95"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
