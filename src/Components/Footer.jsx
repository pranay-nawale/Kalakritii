import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white py-5 w-100" style={{backgroundColor:"#362311"}} >
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy and Cookie Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Search Terms</a></li>
              <li><a href="#" className="text-white text-decoration-none">Orders and Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Policies & Info</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Use</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Social Media</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-white fs-4"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-white fs-4"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" className="text-white fs-4"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
