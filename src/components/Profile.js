import React from "react";
import "../styles/Profile.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const Profile = () => {
  const { currentUser } = useAuth();
  const [name, setName] = React.useState(currentUser.displayName);
  const [email, setEmail] = React.useState(currentUser.email);
  const [phoneNumber, setPhoneNumber] = React.useState(currentUser.phoneNumber);
  const [photoURL, setPhotoURL] = React.useState(currentUser.photoURL);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const handleSave = () => {
    updateProfile(currentUser, {
      displayName: name,
      email: email,
      phoneNumber: phoneNumber,
      photoURL: photoURL,
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isUpdate}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Update successful
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
          <button className="profile-button">Upload Picture</button>
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
                onChange={(e) => setEmail(e.target.value)}
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
              label="Address"
              variant="outlined"
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
