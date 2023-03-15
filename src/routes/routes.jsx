import React from 'react'
import { Route, Routes } from "react-router-dom";
import ChangePassword from '../components/ChangePassword';
import DashBoardPage from '../pages/DashBoardPage';
import Login from '../pages/Login';
import ProfilePage from '../pages/ProfilePage';
import Register from '../pages/Register';

const routes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/test" element={<ChangePassword />} />
    </Routes>
  )
}

export default routes