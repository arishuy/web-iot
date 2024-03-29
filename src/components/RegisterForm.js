import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";
import { useAuth } from "../context/AuthContext";

const RegisterForm = () => {
  const { signUp } = useAuth();
  const navigator = useNavigate();
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleRegister = () => {
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Password not match!");
      return;
    } else {
      signUp(email, password)
        .then(() => {
          navigator("/login");
        })
        .catch((error) => {
          setMessage("Register failed!");
          // ..
        });
    }
  };
  return (
    <div className="login-page">
      <div className="login-picture">
        <i className="fa-solid fa-key"></i>
      </div>
      <div className="form">
        <h1 style={{margin: 0}}>Register</h1>
        <div className="register-form">
          <input
            type="email"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p style={{color: 'red'}}>{message}</p>
          <button onClick={handleRegister}>Create</button>
          <p className="message">
            Already registered?
            <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
