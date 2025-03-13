import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock } from "react-icons/fa";

function SignIn() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === credentials.username && storedUser.password === credentials.password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Sign In</h2>

        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaUser /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text bg-light"><FaLock /></span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>

        <button className="btn w-100" style={{ backgroundColor: "#c3613a" }} onClick={handleSignIn}>
  Sign In
</button>


        <p className="text-center mt-3">
          Don't have an account? <NavLink to="/SignUp">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
