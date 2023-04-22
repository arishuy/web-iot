import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";
import { useAuth } from "../context/AuthContext";

const RegisterForm = () => {
  const { signUp } = useAuth();
  const navigator = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  // const addUser =  () => {
  //     const docRef =  addDoc(collection(db, "users"), {
  //       email: email,
  //       avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
  //       name: "User",
  //       phonenumber: "0123456789",
  //       address: "Hanoi"
  //     }).catch (error => {
  //       console.error("Error adding document: ", error);
  //     });
  //   }
  const handleRegister = () => {
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      signUp(email, password)
        .then(() => {
          // addUser();
          // ...
          navigator("/login");
        })
        .catch((error) => {
          console.log(error);
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
        <h1>Register</h1>
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
