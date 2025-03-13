import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Carousel.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Carousel = () => {
  return (
    <div className="container-fluid px-0">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block carousel-img" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block carousel-img" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block carousel-img" alt="Third slide" />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;



