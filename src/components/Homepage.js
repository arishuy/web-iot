import React from 'react'
import logo from '../asset/logo.png'
import "../styles/Homepage.css"

const Homepage = () => {
  return (
    <div className="homepage-content">
        <div className="homepage-logo">
        <img src={logo} alt="logo" />
        </div>
        <div className="homepage-title">
        <h1>Face Recognition System</h1>
        </div>
    </div>
  )
}

export default Homepage