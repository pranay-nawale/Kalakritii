import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "lucide-react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    image: null,
    price: "",
    description: "",
    discount: "",
    category: "",
  });

  const [preview, setPreview] = useState(null);

  // Handle form changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    alert("Product uploaded successfully!");
  };

  return (
    <div>
    <Sidebar />
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Upload Product</h2>
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">Product Image</label>
            <input type="file" className="form-control" onChange={handleImageChange} />
            {preview && <img src={preview} alt="Preview" className="mt-2 img-fluid rounded" style={{ maxHeight: "150px" }} />}
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price ($)</label>
            <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" value={product.description} onChange={handleChange} rows="3" required></textarea>
          </div>

          {/* Discount */}
          <div className="mb-3">
            <label className="form-label">Discount (%)</label>
            <input type="number" className="form-control" name="discount" value={product.discount} onChange={handleChange} />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" value={product.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Furniture</option>
              <option value="sports">Sports</option>
              <option value="books">Books</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100">Upload Product</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ProductForm;
