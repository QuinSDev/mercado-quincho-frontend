import React from 'react'
import { NavBar } from "../components/NavBar"
import { UserBar } from "../components/UserBar"

export const UserAccount = ({ userRole, openRegisterModal, isLoggedIn, handleLogout, userPhoto, updateAuthStatus }) => {





    return (
        <>
            <div data-theme="light">
                <NavBar userRole={userRole} openRegisterModal={openRegisterModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userPhoto={userPhoto} updateAuthStatus={updateAuthStatus}/>
                <UserBar />
            </div>

        </>
    )

}
