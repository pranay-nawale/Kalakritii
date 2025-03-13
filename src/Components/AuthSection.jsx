import React from "react";
import { NavLink } from "react-router-dom"; 
import "./AuthSection.css"; 
import womenhandicraft from "../assets/womenhandicraft.jpg"; 

const AuthSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center bg-brown text-white rounded p-4">
        
        {/* Left Content Section */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="text-uppercase">
            Conventional <span className="fw-bold fst-italic">Authenticity</span>
          </h2>
          <h1 className="fw-semibold">Curated With Love</h1>
          <p className="mt-3">
            All our sellers are registered with <span className="fw-bold fst-italic">Ministry of Textiles</span>
          </p>

          {/* Features */}
          <div className="mt-3">
            <p className="d-flex align-items-center">
              <span className="badge bg-light text-dark me-2">✔</span>
              Seller’s crafts are inspected by Ministry of Textiles to uphold the standards.
            </p>
            <p className="d-flex align-items-center">
              <span className="badge bg-light text-dark me-2">✔</span>
              Upon compliance, artisans are onboarded on the portal.
            </p>
          </div>

          <p className="mt-3">Hence, you find authentic handmade products made by verified sellers.</p>

          {/* 🆕 Added NavLink Button */}
          <div className="mt-4">
            <NavLink to="/AboutUs" className="btn btn-light text-brown fw-bold px-4 py-2">
              Explore More
            </NavLink>
          </div>

        </div>

        {/* Right Image Section */}
        <div className="col-md-6 text-center">
          <img 
            src={womenhandicraft} 
            alt="Authenticity"
            className="img-fluid rounded shadow"
          />
        </div>

      </div>
    </div>
  );
};

export default AuthSection;


