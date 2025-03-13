import React from 'react'
import Navbar2 from './Components/Navbar2'
import ProductCard from "./Components/ProductCard";
import painting1 from "./assets/painting1.jpg";
import painting2 from "./assets/painting2.jpg";
import painting3 from "./assets/painting3.jpg";
import painting4 from "./assets/painting4.jpg";


const painting = () => {
  return (
    <div className="container-fluid">
    <Navbar2 />
    <div className="row">
    <ProductCard image={painting1} name="Warli Art" price="1800"/>
    <ProductCard image={painting2} name="Madhubani Fish Painting" price="2800"/>
    <ProductCard image={painting3} name="Pattachitra Temple Festival Scene" price="2000"/>
    <ProductCard image={painting4} name="Intricate Pattachitra Folk Art" price="2500"/>
    </div>
  </div>
  )
}

export default painting