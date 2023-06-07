import React from "react";
import "../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = async () => {
    await login(email, password)
      .then((userCredential) => {
        // Signed in
        localStorage.setItem("token", userCredential.user.accessToken);
        // console(userCredential)
        navigation("/");
      })
      .catch((error) => {
        setMessage("Login failed!");
      });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigation("/");
  };
  
  return (
    <div>
      { token ? window.location.href = "/"  : 
    <div className="login-page">
      <div className="login-picture">
      <i className="fa-regular fa-user"></i>
        </div>
      <div className="form">
        <div className="login-form">
          <h1 style={{margin: 0}}>Web IoT</h1>
          <input type="text" placeholder="Username" onChange={
            (e) => setEmail(e.target.value)
          }/>
          <input type="password" placeholder="Password" 
          onChange={
            (e) => setPassword(e.target.value)
          }/>
          <p style={{color: 'red'}}>{message}</p>
          <button onClick={handleLogin}>Login</button>
          <p className="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </div>
    }
    </div>
  );
};

export default LoginForm;
