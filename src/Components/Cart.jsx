import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container d-flex flex-column align-items-center text-center my-5">
      
      {/* Text Section */}
      <h2 className="fw-bold">Your Cart is empty</h2>
      <NavLink to="/" className="text-primary text-decoration-none mb-3">
        Shop today's deals
      </NavLink>

      {/* Buttons */}
      <div className="d-flex gap-3">
        <NavLink to="/SignIn">
          <Button 
            variant="warning"
            className="fw-bold px-4 py-2 text-nowrap rounded border-0"
            style={{ minWidth: "220px" }}
          >
            Sign in to your account
          </Button>
        </NavLink>
        
        <NavLink to="/SignUp">
          <Button 
            variant="warning"
            className="fw-bold px-4 py-2 text-nowrap rounded"
            style={{ minWidth: "220px" }}
          >
            Sign up now
          </Button>
        </NavLink>
      </div>

    </div>
  );
};

export default Cart;



