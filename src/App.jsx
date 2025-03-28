import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Account from "./Account";
import Singleproduct from "./Singleproduct";
import HomeLiving from "./HomeLiving";
import Womens from "./Womens";
import Kids from "./Kids";
import Mens from "./Mens";
import Painting from "./Painting";
import Furniture from "./Furniture";
import Errorpage from "./Errorpage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import About from "./About";
import AboutUs from "./Components/AboutUs";
import Description from "./Description";
import Wishlist from "./Wishlist";
import SellerForm from "./Components/SellerForm";
import AdminPanel from "./Components/AdminPanel";
import ProductList from "./Components/ProductList";
import DashboardRoutes from "./routes/DashboardRoutes";
import CartPage from "./CartPage";




const App = () => {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<CartPage />} />
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
        <Route path="/AboutUs" element={<AboutUs />} />
        
        <Route path="/Description" element={<Description />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        
      
        {/* Admin & Seller Routes */}
        <Route path="/SellerForm" element={<SellerForm />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/ProductList" element={<ProductList />} />
  
      {DashboardRoutes()}

      </Routes>
     
    </Router>
  );
};

export default App;



