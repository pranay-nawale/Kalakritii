import React from 'react'
import Navbar2 from './Components/Navbar2'
import ProductCard from "./Components/ProductCard";
import women1 from "./assets/women1.jpg";
import women2 from "./assets/women2.jpg";
import women3 from "./assets/women3.jpg";
import women4 from "./assets/women4.jpg";


const Womens = () => {
  return (
    <div className="container-fluid">
    <Navbar2 />
    <div className="row">
    <ProductCard image={women1} name="Traditional Bangles" price="600"/>
    <ProductCard image={women2} name="Embroidered Ethinic Lehenga Set" price="5000"/>
    <ProductCard image={women3} name="Ethinic Juttis" price="999"/>
    <ProductCard image={women4} name="Tribal Necklace" price="200"/>
    </div>
  </div>
  )
}

export default Womens