import React from 'react'
import { Route, Routes } from "react-router-dom";
import DashBoardPage from '../pages/DashBoardPage';
import Login from '../pages/Login';
import ProfilePage from '../pages/ProfilePage';
import Register from '../pages/Register';

const routes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

export default routes