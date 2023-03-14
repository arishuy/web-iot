import React from 'react'
import Menu from '../components/Menu'
import Profile from '../components/Profile'

const ProfilePage = () => {
  return (
    <div id="dash" style={ {display: 'flex'}}>
    <Menu />
    <Profile />
  </div>
  )
}

export default ProfilePage