import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { QuinchoBar } from '../components/QuinchoBar'
import { Footer } from '../components/Footer'

export const HomeQuincho = ({ userRole, isLoggedIn, handleLogout, userPhoto, updateAuthStatus, quinchos }) => {
  const quinchoUserForm = true;

  return (
    <>
    <div data-theme="light" >
    <NavBar quinchoUserForm={quinchoUserForm} userRole={userRole} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userPhoto={userPhoto} updateAuthStatus={updateAuthStatus}/>
    <QuinchoBar quinchos={quinchos}/>
    <Footer />
    </div>
    </>
  )
}
