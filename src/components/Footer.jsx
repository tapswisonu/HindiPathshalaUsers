import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-3 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Hindi Tutoring Platform — All rights
      reserved.
    </footer>
  );
}
