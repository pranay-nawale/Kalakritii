import React from 'react'
import Navbar2 from './Components/Navbar2'
import ProductCard from "./Components/ProductCard";
import furniture1 from "./assets/furniture1.jpg";
import furniture2 from "./assets/furniture2.jpg";
import furniture3 from "./assets/furniture3.jpg";
import furniture4 from "./assets/furniture4.jpg";


const furniture = () => {
  return (
    <div className="container-fluid">
    <Navbar2 />
    <div className="row">
    <ProductCard image={furniture1} name="Wooden Coffee Table" price="1800"/>
    <ProductCard image={furniture2} name="Wooden Temple" price="10000"/>
    <ProductCard image={furniture3} name="Royal Curved Chair" price="2000"/>
    <ProductCard image={furniture4} name="Vintage Wooden Bed" price="7000"/>
    </div>
  </div>
  )
}

export default furniture