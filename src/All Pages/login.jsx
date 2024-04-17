import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import BackgroundGlobe from "../BackgroundGlobe";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/Jobs");
  };

  return (
    <div className="login-main">
      <BackgroundGlobe />
      <div className="login-container">
        <div className="login-content">
          <h2>Welcome back!</h2>
          <p>Please enter your details</p>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="pass-input-div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaEye onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>

            <div className="login-center-buttons">
              <button type="button" onClick={handleLogIn}>
                Log In
              </button>
              <button type="button">Sign In with Google</button>
            </div>
          </form>
          <p className="login-bottom-p">
            Don't have an account?{" "}
            <a href="#" className="signup-link" onClick={() => navigate("/signup")}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
