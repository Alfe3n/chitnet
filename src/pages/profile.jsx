import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function dashboard() {
  // const [searchtext, setsearchtext] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/profile" || location.pathname === "/profile/") {
      navigate("/profile/personal-details");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen page-container bg-ash">
      <Navbar />
      <div className="flex h-screen items-top">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default dashboard;
