import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar1.css";
import kalaakriti from "../assets/kalaakriti.png"; // ✅ Make sure the path is correct!
import { NavLink } from "react-router-dom";

const Navbar1 = () => {

  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      if (!document.getElementById("google_translate_element").children.length) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,gu,bn,te,kn,pa,ur,ta",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 nav1">
  <div className="container-fluid d-flex align-items-center justify-content-between">
    
    <NavLink to="/">
      <div className="d-flex align-items-center">
        <img src={kalaakriti} alt="Kalaakriti Logo" height="50" />
        <h3 className="ms-2 mb-0 text-dark">KALAKRITI</h3>
      </div>
    </NavLink>

    <form className="d-flex w-50">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn" style={{ backgroundColor: "#f4cc9b" }} type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>

    <div className="d-flex align-items-center">
      <div id="google_translate_element" className="me-3"></div>

      <NavLink to="/account" className="me-3 text-dark">
        <i className="fa-solid fa-user"></i> Account
      </NavLink>

      {/* Wishlist */}
      <NavLink to="/Wishlist" className="me-3 text-dark wishlist-link">
        <i className="fas fa-heart wishlist-icon"></i>
        <span className="wishlist-count"></span> Wishlist
      </NavLink>

      {/* Cart */}
      <NavLink to="/cart" className="me-3 text-dark cart-trolley">
        <i className="fas fa-shopping-cart trolley"></i> 
        <span className="total-items">10</span> Cart
      </NavLink>
    </div>
  </div>
</nav>

  );
};

export default Navbar1;

