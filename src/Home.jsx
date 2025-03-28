import React from 'react';
import AuthSection from "./Components/AuthSection";
import Navbar2 from "./Components/Navbar2";
import Navbar1 from "./Components/Navbar1";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Banner from "./Components/Banner";
import "bootstrap/dist/css/bootstrap.css";
import Card from './Components/Card';
import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import home4 from "./assets/home4.jpg";
import women1 from "./assets/women1.jpg";
import women2 from "./assets/women2.jpg";
import women3 from "./assets/women3.jpg";
import women4 from "./assets/women4.jpg";
import kids1 from "./assets/kids1.jpg";
import kids2 from "./assets/kids2.jpg";
import kids3 from "./assets/kids3.jpg";
import kids4 from "./assets/kids4.jpg";
import mens1 from "./assets/mens1.jpg";
import mens2 from "./assets/mens2.jpg";
import mens3 from "./assets/mens3.jpg";
import mens4 from "./assets/mens4.jpg";
import furniture1 from './assets/furniture1.jpg';
import furniture2 from './assets/furniture2.jpg';
import furniture3 from './assets/furniture3.jpg';
import furniture4 from './assets/furniture4.jpg';
import painting1 from './assets/painting1.jpg';
import painting2 from './assets/painting2.jpg';
import painting3 from './assets/painting3.jpg';
import painting4 from './assets/painting4.jpg';

const Home = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Carousel />
    
      <h1
  style={{
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#444",
    letterSpacing: "2px",
    marginTop: "10px",
    marginBottom: "20px",
    padding: "10px 20px",
    borderLeft: "5px solid #ff4b2b",
    borderRight: "5px solid #ff4b2b",
    display: "inline-block",
  }}
>
  Shop by Category
</h1>




      <div className="container-fluid">
        <div className="row justify-content-center align-items-stretch">
  
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Card heading="Home & Living" image1={home1} text1="Pots" image2={home2} text2="Kitchen Sets" image3={home3} text3="Bedsheets" image4={home4} text4="Clocks" link="/HomeLiving" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Card heading="Womens" image1={women1} text1="Bangles" image2={women2} text2="Dress" image3={women3} text3="Shoes" image4={women4} text4="Neckless" link="/Womens" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Card heading="Kids" image1={kids1} text1="Clothes" image2={kids2} text2="Wooden Toy" image3={kids3} text3="Shoes" image4={kids4} text4="Clothes" link="/Kids" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Card heading="Mens" image1={mens1} text1="Wedding Accessories" image2={mens2} text2="Kurta" image3={mens3} text3="Shervani" image4={mens4} text4="Shoes" link="/Mens" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Card heading="Furniture" image1={furniture1} text1="Table" image2={furniture2} text2="Home-Temple" image3={furniture3} text3="Chair" image4={furniture4} text4="Beds" link="/Furniture" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Card heading="Painting" image1={painting1} text1="Pots" image2={painting2} text2="Kitchen Sets" image3={painting3} text3="Bedsheets" image4={painting4} text4="Clocks" link="/Painting" />
          </div>
          
        </div>
      </div>

      <AuthSection />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
