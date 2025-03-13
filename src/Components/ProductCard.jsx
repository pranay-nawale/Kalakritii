import React, { useState } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ image, name, price }) => {
  const [isLiked, setIsLiked] = useState(false); // ✅ Manage state inside the component

  const toggleWishlist = () => {
    setIsLiked((prev) => !prev); // ✅ Toggle heart color
  };

  console.log("isLiked:", isLiked); // Debugging

  return (
    <div className="card shadow-sm border-0 rounded mx-auto" style={{ width: "18rem", height: "27rem" }}>
      <div className="position-relative">
        <img src={image} alt={name} className="card-img-top img-fluid rounded" />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist();
          }}
          className="btn position-absolute top-0 end-0 m-2 p-2 bg-white border rounded-circle"
        >
          <Heart 
            size={24}
            style={{ stroke: isLiked ? "red" : "gray", fill: isLiked ? "red" : "none" }}
          />
        </button>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong className="text-dark fs-5">₹{price}</strong>
        </p>
        <button className="btn w-100" style={{ backgroundColor: "#c3613a", color: "white" }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;





