import React, { useEffect } from 'react'
import "../styles/DashBoard.css"
import FaceDetector from './FaceDetector'
import Home from './Home';
import Axios  from 'axios';
import { Button, Dropdown, Space } from 'antd';


const DashBoard = () => {
  const [device, setDevice] = React.useState('1');
  const items = [
    {
      key: '1',
      label: (
        <span onClick={
          () => {
            setDevice('1')
          }
         }>
          JestonNano 1
        </span>
      ),
    },
    {
      key: '2',
      label: (
        <span onClick={
          () => {
            setDevice('2')
          }
         }>
          JestonNano 2
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <span onClick={
          () => {
            setDevice('3')
          }
         }>
          JestonNano 3
        </span>
      ),
    },
  ];
  const token = localStorage.getItem("token");
  const url = `${process.env.REACT_APP_PROXY_URL}/video_feed/jetsonnano`
  return (
    <div className="dashboard">
      { token ? 
      <div>
        <div className="header_container" style={{display:'flex'}}>
      <h1 className="header_dashboard">Cam {device}: </h1>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button type="primary" style={{marginLeft: 'auto'}}  >Device</Button>
      </Dropdown>
      </div>
      {/* <FaceDetector /> */}
      <img src={url} alt="Camera stream 1" />
      <div>
      </div>
      </div>
      :
      <Home />
      }
    </div>
  )
}

export default DashBoard