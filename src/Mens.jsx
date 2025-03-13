import React from 'react'
import Navbar2 from './Components/Navbar2'
import ProductCard from "./Components/ProductCard";
import mens1 from "./assets/mens1.jpg";
import mens2 from "./assets/mens2.jpg";
import mens3 from "./assets/mens3.jpg";
import mens4 from "./assets/mens4.jpg";


const mens = () => {
  return (
    <div className="container-fluid">
    <Navbar2 />
    <div className="row">
    <ProductCard image={mens1} name="Royal Accesories Set" price="1999"/>
    <ProductCard image={mens2} name="Tradiional Kurta" price="499"/>
    <ProductCard image={mens3} name="Wedding Shervani" price="3999"/>
    <ProductCard image={mens4} name="Mojaris" price="399"/>
    </div>
  </div>
  )
}

export default mens