import React from "react";
import Navbar2 from "./Components/Navbar2";
import ProductCard from "./Components/ProductCard";
// import { NavLink } from "react-router-dom";
import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import home4 from "./assets/home4.jpg";


const HomeLiving = () => {
  return (
    <div className="container-fluid">
      <Navbar2 />
  
      <div className="row">
      <ProductCard image={home1} name="Decorative Pot" price="1800" />
      <ProductCard image={home2} name="Wooden Spice Rack" price="2800"/>
      <ProductCard image={home3} name="Embroidered Fabric" price="2000"/>
      <ProductCard image={home4} name="Wooden Wall Clock" price="2500"/>
      </div>
    </div>
  );
};

export default HomeLiving;




