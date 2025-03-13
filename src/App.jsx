import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Account from "./Account";
import Cart from "./Components/Cart";
import Singleproduct from "./Singleproduct";
import HomeLiving from "./HomeLiving";
import Womens from "./Womens";
import Kids from "./Kids";
import Mens from "./Mens";
import Painting from "./Painting";
import Furniture from "./Furniture";
import Errorpage from "./Errorpage";
import Navbar1 from "./Components/Navbar1"; 
import Footer from "./Components/Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserDashboard from "./UserDashboard";
import About from "./About";
import AboutUs from "./Components/AboutUs";
import Description from "./Description";
import Wishlist from "./Wishlist";
import ProductForm from "./ProductForm";


const App = () => {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="*" element={<Errorpage />} />

        <Route path="/HomeLiving" element={<HomeLiving />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Painting" element={<Painting />} />
        <Route path="/Furniture" element={<Furniture />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/About" element={<About />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        
        <Route path="/Description" element={<Description />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/ProductForm" element={<ProductForm />} />
        


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;



