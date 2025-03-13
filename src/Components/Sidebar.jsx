import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    alert("Logged out!"); // Replace with actual logout logic
  };

  return (
    <div className="d-flex">
      {/* Sidebar with fixed height and logout button always visible */}
      <div
        className={`bg-dark text-white d-flex flex-column p-3 ${isOpen ? "d-block" : "d-none d-md-flex"}`}
        style={{ width: "250px", height: "90vh", marginTop: "10px" }}
      >
        <div className="flex-grow-1">
          <h4 className="mb-4">Sidebar</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" >🏠 Home</a>
            </li>
            <li className="nav-item">
              <NavLink to="/ProductForm" className="nav-link text-white" >ℹ️ About</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" >🛠 Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" >📞 Contact</a>
            </li>
          </ul>
        </div>

        {/* Logout Button (Always at Bottom) */}
        <button className="btn btn-danger w-100">
          🔴 Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-grow-1" style={{ width: isOpen ? "calc(100% - 250px)" : "100%" }}>
        {/* Toggle Button (Visible on Mobile) */}
        <button className="btn btn-primary d-md-none mb-3" onClick={toggleSidebar}>
          {isOpen ? "✖ Close" : "☰ Open"}
        </button>

        <h1>Welcome to the Page</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;


