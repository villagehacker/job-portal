import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import BackgroundGlobe from "../BackgroundGlobe";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Both email and passwords are required.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Password and confirm password should be equal.");
    } else {
      // Handle sign-up logic here
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-main">
      <BackgroundGlobe />
      <div className="login-container">
        <div className="login-content">
          <h2>Create an Account</h2>
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className="login-center-buttons">
              <button type="button" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          </form>
          <p className="login-bottom-p">
            Already have an account?{" "}
            <a href="#" className="login-link" onClick={() => navigate("/login")}>
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
