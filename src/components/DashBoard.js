import React from 'react'
import "../styles/DashBoard.css"
import FaceDetector from './FaceDetector'
import Homepage from './Homepage';


const DashBoard = () => {
  const token = localStorage.getItem("token");
  console.log(process.env.REACT_APP_PROXY_URL)
  const url = `${process.env.REACT_APP_PROXY_URL}/video_feed/jetsonnano`
  return (
    <div className="dashboard">
      { token ? 
      <div>
      <h1 className="header_dashboard">Cam: </h1>
      {/* <FaceDetector /> */}
      <img src={url} alt="Camera stream 1" />
      </div>
      :
      <Homepage />
      }
    </div>
  )
}

export default DashBoard