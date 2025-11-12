// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../../app/api"; // axios instance

// export default function TeacherDashboard() {
//   const user = useSelector((s) => s.auth.user);
//   const token = useSelector((s) => s.auth.token);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [classes, setClasses] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch teacher's classes and students
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const classRes = await api.get("/teachers/classes");
//         const studentRes = await api.get("/teachers/students");
//         setClasses(classRes.data || []);
//         setStudents(studentRes.data || []);
//       } catch (err) {
//         console.error("Error fetching teacher data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (token) fetchData();
//   }, [token]);

//   // ✅ Logout function
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Top Navbar */}
//       <header className="bg-white shadow-sm border-b sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-xl font-semibold text-gray-800">
//             Teacher Dashboard
//           </h1>
//           <div className="flex items-center gap-4">
//             <span className="text-gray-700 text-sm font-medium">
//               {user?.name}
//             </span>
//             <button
//               onClick={handleLogout}
//               className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
//         {loading ? (
//           <p className="text-gray-500 text-center">Loading your data...</p>
//         ) : (
//           <>
//             {/* Profile Section */}
//             <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 Profile Info
//               </h2>
//               <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
//                 <div>
//                   <span className="font-medium">Name:</span> {user?.name}
//                 </div>
//                 <div>
//                   <span className="font-medium">Email:</span> {user?.email}
//                 </div>
//                 <div>
//                   <span className="font-medium">Role:</span> {user?.role}
//                 </div>
//                 <div>
//                   <span className="font-medium">ID:</span> {user?.id || "—"}
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <Link
//                   to="/teacher/profile"
//                   className="text-blue-600 hover:underline text-sm"
//                 >
//                   View Full Profile →
//                 </Link>
//               </div>
//             </section>

//             {/* Classes Section */}
//             <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 My Classes
//               </h2>
//               {classes.length === 0 ? (
//                 <p className="text-gray-500 text-sm">
//                   No classes assigned yet.
//                 </p>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full text-sm text-gray-700 border">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-4 py-2 border">Class Name</th>
//                         <th className="px-4 py-2 border">Subject</th>
//                         <th className="px-4 py-2 border">Timing</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {classes.map((cls) => (
//                         <tr key={cls._id} className="hover:bg-gray-50">
//                           <td className="px-4 py-2 border">{cls.name}</td>
//                           <td className="px-4 py-2 border">{cls.subject}</td>
//                           <td className="px-4 py-2 border">
//                             {cls.startTime} - {cls.endTime}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </section>

//             {/* Students Section */}
//             <section className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 Connected Students
//               </h2>
//               {students.length === 0 ? (
//                 <p className="text-gray-500 text-sm">
//                   No students connected to your classes yet.
//                 </p>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full text-sm text-gray-700 border">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-4 py-2 border">Name</th>
//                         <th className="px-4 py-2 border">Email</th>
//                         <th className="px-4 py-2 border">Class</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {students.map((stu) => (
//                         <tr key={stu._id} className="hover:bg-gray-50">
//                           <td className="px-4 py-2 border">{stu.name}</td>
//                           <td className="px-4 py-2 border">{stu.email}</td>
//                           <td className="px-4 py-2 border">
//                             {stu.className || "—"}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </section>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import api from "../../app/api"; // axios instance

export default function TeacherDashboard() {
  const user = useSelector((s) => s.auth.user);
  const token = useSelector((s) => s.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [classes, setClasses] = useState([
    // ✅ Dummy data for testing UI
    {
      _id: "demo-1",
      name: "Hindi Grammar - Level 1",
      subject: "Hindi Grammar",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
  ]);

  const [students, setStudents] = useState([
    // ✅ Dummy data for testing UI
    {
      _id: "stu-1",
      name: "Riya Sharma",
      email: "riya.sharma@example.com",
      className: "Hindi Grammar - Level 1",
    },
  ]);

  const [loading, setLoading] = useState(true);

  // ✅ Fetch teacher's classes and students (real API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const classRes = await api.get("/teachers/classes");
        const studentRes = await api.get("/teachers/students");
        // Replace dummy with real if API works
        if (classRes.data?.length > 0) setClasses(classRes.data);
        if (studentRes.data?.length > 0) setStudents(studentRes.data);
      } catch (err) {
        console.warn("Using dummy data (API not connected yet)", err);
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
      {/* 🔹 Top Navbar */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">
            Teacher Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-sm font-medium">
              {user?.name || "Teacher"}
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
            {/* Profile Section */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Profile Info
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                <div>
                  <span className="font-medium">Name:</span>{" "}
                  {user?.name || "Demo Teacher"}
                </div>
                <div>
                  <span className="font-medium">Email:</span>{" "}
                  {user?.email || "teacher@example.com"}
                </div>
                <div>
                  <span className="font-medium">Role:</span>{" "}
                  {user?.role || "teacher"}
                </div>
                <div>
                  <span className="font-medium">ID:</span> {user?.id || "T001"}
                </div>
              </div>

              <div className="mt-4">
                <Link
                  to="/teacher/profile"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Full Profile →
                </Link>
              </div>
            </section>

            {/* My Classes Section */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                My Classes
              </h2>
              {classes.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No classes assigned yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-gray-700 border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Class Name</th>
                        <th className="px-4 py-2 border">Subject</th>
                        <th className="px-4 py-2 border">Timing</th>
                        <th className="px-4 py-2 border">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((cls) => (
                        <tr key={cls._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{cls.name}</td>
                          <td className="px-4 py-2 border">{cls.subject}</td>
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
                              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                              Start Class
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* Connected Students Section */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Connected Students
              </h2>
              {students.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No students connected to your classes yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-gray-700 border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Class</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((stu) => (
                        <tr key={stu._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{stu.name}</td>
                          <td className="px-4 py-2 border">{stu.email}</td>
                          <td className="px-4 py-2 border">
                            {stu.className || "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
