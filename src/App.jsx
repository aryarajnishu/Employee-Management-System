import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // State to manage button visibility
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setLoggedInUserData(employee);
        setUser("employee");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Show button only if login section is not open and user is not logged in */}
      {!showLogin && !user && (
        

        <div className="h-screen w-screen flex flex-col">
          {/* Navbar */}
          <nav className="w-full bg-gray-800 text-white flex justify-between items-center px-8 py-4 shadow-md">
            <h1 className="text-2xl font-bold text-yellow-600">EM System</h1>
            <button
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
              onClick={() => setShowLogin(true)} // Triggers login action
            >
              Login
            </button>
          </nav>

          {/* Content Section */}
          <div className="flex items-center justify-center flex-grow p-8 gap-[90px]">
            {/* Left Section - Content */}
            <div className="w-2/5 flex flex-col space-y-6">
              <div className="bg-gray-800 p-6 rounded-3xl shadow-xl">
                <h2 className="text-xl font-semibold">For Maneger</h2>
                <p className="text-gray-200">An Employee Management System offers critical benefits for employees. Individuals gain easy access to their personal information, performance records, and professional development resources. They can manage leave requests, track career progress, and engage with transparent workplace communication tools.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-3xl shadow-xl">
                <h2 className="text-xl font-semibold">For Employee</h2>
                <p className="text-gray-200">For managers, the system provides powerful organizational capabilities. Leaders can efficiently monitor team performance, allocate resources strategically, generate comprehensive analytical reports, and make data-driven decisions that enhance overall workplace productivity and team effectiveness.</p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-2/5 flex justify-center shadow-xl rounded-3xl">
              <img 
                src="https://www.reactjsindia.com/blog/wp-content/uploads/2023/11/Employee-Management-affilate-page-1536x1038-1.png" 
                alt="Company Image" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>



      )}

      {/* Show login form only if button is clicked and user is not logged in */}
      {showLogin && !user && <Login handleLogin={handleLogin} />}

      {/* Show the dashboard only after the user logs in */}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </div>
  );
}

export default App;
