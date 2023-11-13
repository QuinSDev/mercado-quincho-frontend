import React from "react";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";


export const Home = ({ userRole, openRegisterModal, isLoggedIn, handleLogout, userPhoto, updateAuthStatus }) => {
  return (
    <>
      <NavBar userRole={userRole} openRegisterModal={openRegisterModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userPhoto={userPhoto} updateAuthStatus={updateAuthStatus}/>
      <Hero />
      <Footer /> 
    </>
  );
};