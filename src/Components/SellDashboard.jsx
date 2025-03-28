import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SellDashboard = () => {
  return (
    <Container fluid className="p-4">
      <h2 className="mb-4">Seller Dashboard</h2>

      {/* Earnings & Orders */}
      <Row className="mb-4">
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center">
          <Card style={{ backgroundColor: "#a54e1f", color: "white", padding: "20px", minWidth: "300px", width: "100%" }}>
            <h5>Total Earnings</h5>
            <h2>₹50,000</h2>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center">
          <Card style={{ backgroundColor: "#d8965a", color: "white", padding: "20px", minWidth: "300px", width: "100%" }}>
            <h5>Total Orders</h5>
            <h2>120</h2>
          </Card>
        </Col>
      </Row>

      {/* Feature Cards */}
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="mb-3 d-flex justify-content-center">
          <Card style={{ backgroundColor: "#f4c89d", padding: "20px", minWidth: "300px", width: "100%" }}>
            <h5>Add Products</h5>
            <p>Add, edit, and manage your products.</p>
            <NavLink to="/add-products">
            <Button style={{ backgroundColor: "#a56830", border: "none" }}>Add Products</Button>
            </NavLink>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="mb-3 d-flex justify-content-center">
          <Card style={{ backgroundColor: "#f4c89d", padding: "20px", minWidth: "300px", width: "100%" }}>
            <h5>Product Listed</h5>
            <p>Product Lists</p>
            <NavLink to="/products-listed">
            <Button style={{ backgroundColor: "#a56830", border: "none" }}>Product List</Button>
            </NavLink>
          </Card>
        </Col>
    
      </Row>

      <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="mb-3 d-flex justify-content-center">
          <Card style={{ backgroundColor: "#f4c89d", padding: "20px", minWidth: "300px", width: "100%" }}>
            <h5>Customer Reviews</h5>
            <p>Check feedback and respond to customers.</p>
            <NavLink to="/reviews">
            <Button style={{ backgroundColor: "#a56830", border: "none" }}>View Reviews</Button>
            </NavLink>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="mb-3 d-flex justify-content-center">
          <Card style={{ backgroundColor: "#f4c89d", padding: "20px", minWidth: "300px", width: "100%" }}>
            <h5>View Orders</h5>
            <p>Track and manage customer orders.</p>
            <NavLink to="/orders">
            <Button style={{ backgroundColor: "#a56830", border: "none" }}>Go to Orders</Button>
            </NavLink>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SellDashboard;
