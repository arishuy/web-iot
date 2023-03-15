import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

const ChangePassword = () => {
  return (
    <div style={{position: "fixed", top: "30%", left: "40%", backgroundColor: "white"}}>
      <Box sx={{ width: "100%", "& .MuiTextField-root": { m: 2, width: "37ch" }}}>
        <div>
        <TextField id="filled-basic" label="Old Password" variant="filled" />
        </div>
        <div>
        <TextField id="filled-basic" label="New Password" variant="filled" />
        </div>
        <div>
        <TextField id="filled-basic" label="Password Confirm" variant="filled" />
        </div>
        <Button variant="contained" style={{margin: '10px', float: "right" }}>Change Password</Button>
      </Box>
    </div>
  );
};

export default ChangePassword;
