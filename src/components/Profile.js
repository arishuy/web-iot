import React from "react";
import "../styles/Profile.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";
import { updatePassword } from "firebase/auth";

const Profile = () => {
  const { currentUser } = useAuth();  
  const [name, setName] = React.useState(currentUser.displayName);
  const [email, setEmail] = React.useState(currentUser.email);
  const [phoneNumber, setPhoneNumber] = React.useState(currentUser.phoneNumber);
  const [photoURL, setPhotoURL] = React.useState(currentUser.photoURL);
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isUpdate, setIsUpdate] = React.useState(false);
  const handleChangePassword = () => {
      if (newPassword === confirmPassword) {
        updatePassword(currentUser, newPassword)
          .then(() => {
            setIsUpdate(true);
            document.getElementById("password_form").style.display = "none";
          })
          .catch((error) => {
            console.log(error);
          });
      }
      else {
        alert("New password and confirm password are not the same");
      }
  }
  const handleDisplayForm = () => {
    document.getElementById("password_form").style.display = "block";
  }
  const handleCloseForm = () => {
    document.getElementById("password_form").style.display = "none";
  }
  const handleSave = () => {
    updateProfile(currentUser, {
      displayName: name,
      photoURL: photoURL,
      phoneNumber: phoneNumber,
    })
      .then(() => {
        console.log("Update successful");
        setIsUpdate(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
      }
    setIsUpdate(false);
    };
  return (
    <div className="profile">
      <div id="password_form" style={{position: "fixed", top: "30%", left: "40%", backgroundColor: "white", display: "none", zIndex: 999}}>
      <Box sx={{ width: "100%", "& .MuiTextField-root": { m: 2, width: "37ch" }}}>
        <div style={{textAlign: 'center'}}>
          <span className="title-form"> Change Password </span>
          </div>
        <div>
        <TextField id="filled-basic" label="New Password" variant="filled" onChange={
          (e) => setNewPassword(e.target.value)
        } />
        </div>
        <div>
        <TextField id="filled-basic" label="Password Confirm" variant="filled" onChange={
          (e) => setConfirmPassword(e.target.value)
        } />
        </div>
        <Button variant="contained" style={{margin: '5px', float: "right", marginRight: '15px', marginBottom: '10px' }} onClick={handleChangePassword}>Change</Button>
        <Button variant="contained" color="error" style={{margin: '5px', float: "right" }} onClick={handleCloseForm}>Cancel</Button>
      </Box>
    </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isUpdate}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Update successful!
        </Alert>
      </Snackbar>
      <h1> Profile: </h1>
      <div className="profile-container">
        <div className="profile-avatar">
          <div className="profile-info">
            <img
              src={
                currentUser.photoURL
                  ? currentUser.photoURL
                  : "https://www.w3schools.com/howto/img_avatar.png"
              }
              alt="Avatar"
            />
            <span className="profile-name">
              {currentUser.displayName ? currentUser.displayName : ""}
            </span>
          </div>
          <button className="profile-button" onClick={handleDisplayForm}>Change Password</button>
        </div>

        <div className="profile-content">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 3, width: "37ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              defaultValue={
                currentUser.displayName ? currentUser.displayName : ""
              }
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                defaultValue={currentUser.email ? currentUser.email : ""}
                disabled
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                defaultValue={
                  currentUser.phoneNumber ? currentUser.phoneNumber : ""
                }
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 3, width: "80ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Photo URL"
              variant="outlined"
              defaultValue={currentUser.photoURL ? currentUser.photoURL : ""}
              onChange={(e) => setPhotoURL(e.target.value)}
              fullWidth
            />
          </Box>

          <button
            className="profile-button floa"
            style={{ marginLeft: "25px" }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
