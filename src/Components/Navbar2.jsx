import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg nav2 w-vw">
      <div className="container d-flex justify-content-center align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/HomeLiving" className="nav-link">Home & Living</NavLink>
            <NavLink to="/Womens" className="nav-link">Womens</NavLink>
            <NavLink to="/Kids" className="nav-link">Kids</NavLink>
            <NavLink to="/Mens" className="nav-link">Mens</NavLink>
            <NavLink to="/Furniture" className="nav-link">Furniture</NavLink>
            <NavLink to="/Painting" className="nav-link">Painting</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

