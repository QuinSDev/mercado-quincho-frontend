import React from 'react'
import { AdminBar } from '../components/AdminBar'
import { NavBar } from '../components/NavBar'

export const Dashboard = ({ userRole, isLoggedIn, handleLogout, userPhoto, updateAuthStatus }) => {
  return (
    
    <>
    <div data-theme="light">
    <NavBar userRole={userRole} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userPhoto={userPhoto} updateAuthStatus={updateAuthStatus}/>
    <AdminBar/>
    
    </div>
    </>
  )
}
