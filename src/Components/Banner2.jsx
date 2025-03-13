import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaIndustry, FaHandHoldingUsd, FaStore, FaPalette } from "react-icons/fa";
import weaving_women from "../assets/weaving_women.jpg";


const Banner2 = () => {
  return (
    <div className="container-fluid bg-light py-5 d-flex justify-content-center flex-column align-items-center">
      <div 
        className="container text-white rounded p-5 shadow-lg mb-5"
        style={{ backgroundColor: "#8B5E3C", maxWidth: "1200px" }}
      >
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={weaving_women}
              alt="Artisans Weaving"
              className="img-fluid rounded shadow-sm"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-md-6 text-center px-4">
            <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>A True Reflection of Authenticity & Tradition</h2>
            <p className="fs-5 mb-4">
              <span className="fw-bold text-warning">Zero</span> Commission | 
              <span className="fw-bold text-warning"> Zero</span> Shipping Fee
            </p>
            <div className="row mt-4 text-center g-3">
              <div className="col-6 col-md-3">
                <FaIndustry className="fs-1 text-warning" />
                <p className="mt-2">Ministry of Textiles Initiative</p>
              </div>
              <div className="col-6 col-md-3">
                <FaHandHoldingUsd className="fs-1 text-warning" />
                <p className="mt-2">Fair Prices & Sustainable Livelihood</p>
              </div>
              <div className="col-6 col-md-3">
                <FaStore className="fs-1 text-warning" />
                <p className="mt-2">Directly from Artisans & Weavers</p>
              </div>
              <div className="col-6 col-md-3">
                <FaPalette className="fs-1 text-warning" />
                <p className="mt-2">Traditional Authentic Designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-light rounded p-5 shadow-lg" style={{ maxWidth: "1200px" }}>
        <div className="row align-items-center">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h2 className="text-brown fw-bold">The Most <span className="text-warning">Transparent & Reliable</span></h2>
            <p className="fs-5">One-stop solution to conveniently buy 100% <br /><span className="fw-bold">Authentic Artisans & Weavers Products</span></p>
            <button className="btn btn-outline-dark mt-3">Know More</button>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <img src={pottery} alt="Pottery" className="rounded-circle me-3" width="80" height="80" />
              <p className="mb-0">Directly from the hands of rural artisans and weavers</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={ceramics} alt="Ceramics" className="rounded-circle me-3" width="80" height="80" />
              <p className="mb-0">Vibrant hues for the conscious buyers</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={market} alt="Market" className="rounded-circle me-3" width="80" height="80" />
              <p className="mb-0">A step towards preserving the glorious tradition in its true form</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
