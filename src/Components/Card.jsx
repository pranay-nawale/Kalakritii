import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ heading, image1, image2, image3, image4, text1, text2, text3, text4, link }) => {
  return (
    <div className="container card p-3 rounded">
      <div className="position-relative text-center">
        <h4 className="mb-3">{heading}</h4>

        <div className="row g-2">
          <div className="col-6 col-md-6">
            <img className="image img-fluid rounded w-100" src={image1} alt={heading} />
            <p className="text mt-2">{text1}</p>
          </div>
          <div className="col-6 col-md-6">
            <img className="image img-fluid rounded w-100" src={image2} alt="Image 2" />
            <p className="mt-2">{text2}</p>
          </div>
        </div>

        <div className="row g-2 mt-2">
          <div className="col-6 col-md-6">
            <img className="image img-fluid rounded w-100" src={image3} alt="Image 3" />
            <p className="mt-2">{text3}</p>
          </div>
          <div className="col-6 col-md-6">
            <img className="image img-fluid rounded w-100" src={image4} alt="Image 4" />
            <p className="mt-2">{text4}</p>
          </div>
        </div>

        <NavLink to={link}>
          See More
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
