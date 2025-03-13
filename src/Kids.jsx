import React from 'react'
import Navbar2 from './Components/Navbar2'
import ProductCard from "./Components/ProductCard";
import kids1 from "./assets/kids1.jpg";
import kids2 from "./assets/kids2.jpg";
import kids3 from "./assets/kids3.jpg";
import kids4 from "./assets/kids4.jpg";


const kids = () => {
  return (
    <div className="container-fluid">
    <Navbar2 />
    <div className="row">
    <ProductCard image={kids1} name="Traditional Clothes Set" price="1800"/>
    <ProductCard image={kids2} name="Wooden Toys" price="2999"/>
    <ProductCard image={kids3} name="Handpainted Footwear" price="2000"/>
    <ProductCard image={kids4} name="Handwoven Fabric" price="2500"/>
    </div>
  </div>
  )
}

export default kids