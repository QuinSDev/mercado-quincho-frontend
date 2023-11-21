import React from "react";
import { NavBar } from "../components/NavBar"
import { HelpBar } from "../components/HelpBar"
import { Footer } from "../components/Footer"


export const HelpCenter = ({ userRole, openRegisterModal, isLoggedIn, handleLogout, userPhoto, updateAuthStatus }) => {
 
    return (

        <>
            <div data-theme="light">
                <NavBar userRole={userRole} openRegisterModal={openRegisterModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userPhoto={userPhoto} updateAuthStatus={updateAuthStatus}/>
                <HelpBar />
                <Footer/>
            </div>

        </>
    )
}



