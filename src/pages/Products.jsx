import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Handle API submission here
  };

  return (
    <div className="container mt-5 w-75 p-4">
      <h2 style={{ color: "#8c4b2d", textAlign: "center" }}>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="home and living">Home and Living</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
            <option value="furniture">Furniture</option>
            <option value="paintings">Paintings</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="productImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} required />
        </Form.Group>

        <Button type="submit" className="mt-3" style={{ backgroundColor: "#8c4b2d", border:"none"}}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;

// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";

// const AddProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     // Handle API submission here
//   };

//   return (
//     <div style={{ padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "auto" }}>
//       <h2 style={{ color: "#8c4b2d", textAlign: "center" }}>Add Product</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="productName">
//           <Form.Label style={{ color: "#8c4b2d" }}>Product Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={{ borderColor: "#8c4b2d" }}
//           />
//         </Form.Group>

//         <Form.Group controlId="productDescription">
//           <Form.Label style={{ color: "#8c4b2d" }}>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             style={{ borderColor: "#8c4b2d" }}
//           />
//         </Form.Group>

//         <Form.Group controlId="productPrice">
//           <Form.Label style={{ color: "#8c4b2d" }}>Price</Form.Label>
//           <Form.Control
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             style={{ borderColor: "#8c4b2d" }}
//           />
//         </Form.Group>

//         <Form.Group controlId="productCategory">
//           <Form.Label style={{ color: "#8c4b2d" }}>Category</Form.Label>
//           <Form.Control
//             as="select"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             required
//             style={{ borderColor: "#8c4b2d" }}
//           >
//             <option value="">Select Category</option>
//             <option value="home and living">Home and Living</option>
//             <option value="women">Women</option>
//             <option value="men">Men</option>
//             <option value="kids">Kids</option>
//             <option value="furniture">Furniture</option>
//             <option value="paintings">Paintings</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="productImage">
//           <Form.Label style={{ color: "#8c4b2d" }}>Upload Image</Form.Label>
//           <Form.Control type="file" onChange={handleImageChange} required style={{ borderColor: "#8c4b2d" }} />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="mt-3" style={{ backgroundColor: "#8c4b2d", borderColor: "#8c4b2d" }}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AddProductForm;

