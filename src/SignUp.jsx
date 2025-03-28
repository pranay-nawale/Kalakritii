import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

function SignUp() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "", // New field for user role
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!user.fullName || !user.username || !user.email || !user.phone || !user.password || !user.confirmPassword || !user.role) {
      alert("Please fill all fields!");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign Up Successful! Please Sign In.");
    navigate("/SignIn");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        {/* Full Name */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaUser /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
        </div>

        {/* Username */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaUser /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaEnvelope /></span>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        {/* Phone Number */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaPhone /></span>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaLock /></span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        {/* Confirm Password */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaLock /></span>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          />
        </div>

        {/* Role Selection */}
        <div className="mb-3">
          <h6>Select Role:</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value="buyer"
              checked={user.role === "buyer"}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
            <label className="form-check-label">Buyer</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value="seller"
              checked={user.role === "seller"}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
            <label className="form-check-label">Seller</label>
          </div>
        </div>

        <button className="btn w-100" style={{ backgroundColor: "#c3613a" }} onClick={handleSignUp}>
          Sign Up
        </button>

        <p className="text-center mt-3">
          Already have an account? <NavLink to="/SignIn">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;



