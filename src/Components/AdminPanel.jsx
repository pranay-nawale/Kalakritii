import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { approveProduct } from "../features/productSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const pendingProducts = useSelector((state) => state.product.pendingProducts);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Admin Panel - Approve Products</h2>

      {pendingProducts.length === 0 ? (
        <p className="text-center">No pending products</p>
      ) : (
        <div className="row">
          {pendingProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card shadow-sm p-3 mb-3">
                {/* Render Multiple Images */}
                {product.images && product.images.length > 0 ? (
                  <div className="d-flex flex-wrap justify-content-center">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)} // Correct image display
                        alt={`Product ${index}`}
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px", objectFit: "cover", margin: "5px" }}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted">No Image Available</p>
                )}

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text"><strong>₹{product.price}</strong></p>
                  <p className="text-muted">{product.description}</p>
                  <button className="btn btn-success" onClick={() => dispatch(approveProduct(product.id))}>
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

