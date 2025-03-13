import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Singleproduct = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src="/path-to-your-image.jpg"
            alt="Handmade Buddha Relief Art"
            className="img-fluid border rounded"
          />
        </div>
        
        {/* Product Details */}
        <div className="col-md-6">
          <h2>Handmade Buddha Relief Art on Board | 45x61 cm</h2>
          <p className="text-danger">Only 1 left in stock!</p>
          <h3 className="text-warning">₹30,999.00</h3>
          <p>Be the first to review this product</p>
          
          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <label className="me-2">Qty</label>
            <input type="number" className="form-control w-25" defaultValue={1} min={1} />
          </div>
          
          {/* Action Buttons */}
          <div className="d-flex gap-2" style={{ width: "100%" }}>
            <button 
              className="btn" 
              style={{ 
                backgroundColor: "#007bff", 
                color: "#fff", 
                padding: "12px 18px", 
                fontSize: "16px", 
                fontWeight: "bold", 
                borderRadius: "8px", 
                border: "none",
                flex: 1,
                transition: "all 0.3s ease-in-out"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              Add to Cart
            </button>
            
            <button 
              className="btn" 
              style={{ 
                backgroundColor: "#ffc107", 
                color: "#000", 
                padding: "12px 18px", 
                fontSize: "16px", 
                fontWeight: "bold", 
                borderRadius: "8px", 
                border: "none",
                flex: 1,
                transition: "all 0.3s ease-in-out"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#e0a800"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#ffc107"}
            >
              Buy Now
            </button>
          </div>

          
          {/* Delivery Information */}
          <div className="mt-4">
            <h5>Delivery Information</h5>
            <input type="text" className="form-control w-50 d-inline-block me-2" placeholder="Enter Pincode" />
            <button className="btn btn-secondary">Check</button>
          </div>
          
          {/* Product Features */}
          <div className="mt-4">
            <h5>Product Features</h5>
            <p>
              The handmade Buddha relief art on board is a captivating masterpiece that embodies peace, hope, and love. Created with intricate craftsmanship, this artwork brings Lord Buddha to life, showcasing his serene presence with vibrant colors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
