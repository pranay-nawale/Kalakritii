import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitProduct } from "../features/productSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const SellerForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Painting");
  const [images, setImages] = useState([]); // Store image files
  const [imagePreviews, setImagePreviews] = useState([]); // Store preview URLs
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  // Handle Multiple Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    
    // Create preview URLs
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !description || !category || images.length === 0 || !stock) {
      setError("All fields are required, including at least one image!");
      return;
    }

    if (price <= 0 || stock <= 0) {
      setError("Price and stock must be greater than zero!");
      return;
    }

    // Create FormData to send multiple images
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("stock", stock);
    
    // Append each image file
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    // Dispatch action with FormData
    dispatch(
      submitProduct({
        id: Date.now(),
        name,
        price: parseFloat(price),
        description,
        category,
        images, // Send multiple image files
        stock: parseInt(stock),
      })
    );

    // Reset Form
    setName("");
    setPrice("");
    setDescription("");
    setCategory("Painting");
    setImages([]);
    setImagePreviews([]);
    setStock("");
    setError("");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-3">Seller Product Submission</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (INR)</label>
            <input type="number" className="form-control" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" placeholder="Enter product description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Painting">Painting</option>
              <option value="Handicraft">Handicraft</option>
              <option value="Clothing">Clothing</option>
              <option value="Jewelry">Jewelry</option>
            </select>
          </div>

          {/* Multiple Image Upload */}
          <div className="mb-3">
            <label className="form-label">Upload Images</label>
            <input type="file" className="form-control" accept="image/*" multiple onChange={handleImageUpload} />
          </div>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mb-3 text-center">
              <h5>Image Previews:</h5>
              <div className="d-flex flex-wrap justify-content-center">
                {imagePreviews.map((preview, index) => (
                  <img key={index} src={preview} alt={`Preview ${index}`} className="img-thumbnail m-2" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                ))}
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Stock Quantity</label>
            <input type="number" className="form-control" placeholder="Enter stock quantity" value={stock} onChange={(e) => setStock(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit for Approval</button>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;
