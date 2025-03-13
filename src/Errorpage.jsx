import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{ background: "linear-gradient(to right, #ff9966, #ff5e62)" }}
    >
      <h1 
        className="display-1 fw-bold text-white" 
        style={{ fontSize: "6rem", textShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)" }}
      >
        404
      </h1>
      <h2 className="fw-semibold text-white mb-3">Oops! Page Not Found</h2>
      <p className="text-light" style={{ maxWidth: "500px" }}>
        The page you're looking for might have been removed, renamed, or is temporarily unavailable.
      </p>

      <NavLink 
        to="/" 
        className="btn px-4 py-2 mt-3"
        style={{
          backgroundColor: "#ffffff",
          color: "#ff5e62",
          fontWeight: "bold",
          borderRadius: "25px",
          transition: "0.3s",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#ff5e62";
          e.target.style.color = "#ffffff";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.color = "#ff5e62";
        }}
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default Errorpage;




