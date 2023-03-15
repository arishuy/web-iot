import React from 'react'
import Menu from '../components/Menu'
import Profile from '../components/Profile'

const ProfilePage = () => {
  const token = localStorage.getItem('token')
  return (
    <div id="dash" style={ {display: 'flex'}}>
    <Menu />
    { token ? <Profile /> : window.location.href = '/login' }
    
  </div>
  )
}

export default ProfilePage