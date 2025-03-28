import React from "react";
import { Button, Navbar, Offcanvas, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#f4c89d" }} expand={false} className="mb-3 d-md-none w-100 h-25">
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand className="ms-2" style={{ color: "#a56830" }}>Seller Panel</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="top"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" style={{ color: "#a56830", height:"100vh" }}>Seller Panel</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: "#f4c89d" }}>
            <Nav className="flex-column">
              <NavLink to="/dashboard" className="nav-link" style={{ color: "#a56830" }}>Dashboard</NavLink>
              <NavLink to="/add-products" className="nav-link" style={{ color: "#a56830" }}>Add Products</NavLink>
              <NavLink to="/products-listed" className="nav-link" style={{ color: "#a56830" }}>Product Listed</NavLink>
              <NavLink to="/orders" className="nav-link" style={{ color: "#a56830" }}>Orders</NavLink>
              <NavLink to="/reviews" className="nav-link" style={{ color: "#a56830" }}>Customer Reviews</NavLink>
            </Nav>
            <Button style={{ backgroundColor: "#a54e1f", border: "none" }} className="w-100 mt-2">Buy Product</Button>
            <Button style={{ backgroundColor: "#a54e1f", border: "none" }} className="w-100 mt-2">Logout</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

      <div className="d-none d-md-block p-3" style={{ width: "250px", height: "100vh", backgroundColor: "#f4c89d" }}>
        <h4 style={{ color: "#a56830" }}>Seller Panel</h4>
        <Nav className="flex-column">
          <NavLink to="/dashboard" className="nav-link" style={{ color: "#a56830" }}>Dashboard</NavLink>
          <NavLink to="/add-products" className="nav-link" style={{ color: "#a56830" }}>Add Products</NavLink>
          <NavLink to="/products-listed" className="nav-link" style={{ color: "#a56830" }}>Product Listed</NavLink>
          <NavLink to="/orders" className="nav-link" style={{ color: "#a56830" }}>Orders</NavLink>
          <NavLink to="/reviews" className="nav-link" style={{ color: "#a56830" }}>Customer Reviews</NavLink>
        </Nav>
        <Button style={{ backgroundColor: "#a54e1f", border: "none" }} className="w-100 mt-2">Buy Product</Button>
        <Button style={{ backgroundColor: "#a54e1f", border: "none" }} className="w-100 mt-2">Logout</Button>
      </div>
    </>
  );
};

export default Sidebar;
