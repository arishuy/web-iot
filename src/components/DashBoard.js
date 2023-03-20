import React from 'react'
import "../styles/DashBoard.css"
import FaceDetector from './FaceDetector'
import Homepage from './Homepage';


const DashBoard = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="dashboard">
      { token ? 
      <div>
      <h1 className="header_dashboard">Cam: </h1>
      <FaceDetector />
      </div>
      :
      <Homepage />
      }
    </div>
  )
}

export default DashBoard