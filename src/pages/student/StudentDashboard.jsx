import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import api from "../../app/api"; // axios instance

export default function StudentDashboard() {
  const user = useSelector((s) => s.auth.user);
  const token = useSelector((s) => s.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [classes, setClasses] = useState([
    // ✅ Dummy data for preview
    {
      _id: "demo-1",
      name: "Hindi Grammar - Level 1",
      subject: "Hindi Grammar",
      teacher: "Mr. Rajesh Kumar",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
  ]);

  const [loading, setLoading] = useState(true);

  // ✅ Fetch enrolled classes (real data later)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const classRes = await api.get("/students/classes");
        if (classRes.data?.length > 0) setClasses(classRes.data);
      } catch (err) {
        console.warn("Using dummy class (API not connected yet)", err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchData();
  }, [token]);

  // ✅ Logout function
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 🔹 Navbar */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">
            Student Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-sm font-medium">
              {user?.name || "Student"}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* 🔹 Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
        {loading ? (
          <p className="text-gray-500 text-center">Loading your data...</p>
        ) : (
          <>
            {/* Profile Info */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Profile Info
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                <div>
                  <span className="font-medium">Name:</span>{" "}
                  {user?.name || "Riya Sharma"}
                </div>
                <div>
                  <span className="font-medium">Email:</span>{" "}
                  {user?.email || "riya.sharma@example.com"}
                </div>
                <div>
                  <span className="font-medium">Role:</span>{" "}
                  {user?.role || "student"}
                </div>
                <div>
                  <span className="font-medium">ID:</span> {user?.id || "S001"}
                </div>
              </div>

              <div className="mt-4">
                <Link
                  to="/student/profile"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Full Profile →
                </Link>
              </div>
            </section>

            {/* Enrolled Classes Section */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                My Enrolled Classes
              </h2>
              {classes.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No classes enrolled yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-gray-700 border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Class Name</th>
                        <th className="px-4 py-2 border">Subject</th>
                        <th className="px-4 py-2 border">Teacher</th>
                        <th className="px-4 py-2 border">Timing</th>
                        <th className="px-4 py-2 border">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((cls) => (
                        <tr key={cls._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{cls.name}</td>
                          <td className="px-4 py-2 border">{cls.subject}</td>
                          <td className="px-4 py-2 border">{cls.teacher}</td>
                          <td className="px-4 py-2 border">
                            {cls.startTime} - {cls.endTime}
                          </td>
                          <td className="px-4 py-2 border text-center">
                            <button
                              onClick={() =>
                                navigate("/live-class", {
                                  state: {
                                    meetingLink: `https://meet.jit.si/${cls._id}`,
                                  },
                                })
                              }
                              className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                              Join Class
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* Dummy Progress Section */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Learning Progress
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Hindi Grammar
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">70% completed</p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
