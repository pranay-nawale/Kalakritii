import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductList = () => {
  const products = useSelector((state) => state.product.approvedProducts);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text-center my-4">Available Products</h2>
      <div className="row">
        {products.length === 0 ? (
          <p className="text-center">No products available</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-3 shadow">
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>₹{product.price}</strong>
                  </p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          description: product.description,
                          imageUrl: product.imageUrl, // ✅ Ensure imageUrl is passed
                        })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;

