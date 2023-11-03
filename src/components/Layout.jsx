// Header.js
import { NavBar } from "./NavBar";
import { useState } from "react";
import { UserLogin } from "../pages/UserLogin";
import { UserRegistration } from "../pages/UserRegistration";
import { Hero } from "./Hero";

export const Layout = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  //Modal login
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  //Modal registro
  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div>
      <NavBar
        openLoginModal={openLoginModal}
        openRegistrationModal={openRegistrationModal}
      />
      <Hero openLoginModal={openLoginModal} />
      <UserLogin isOpenL={isLoginModalOpen} onCloseL={closeLoginModal} />
      <UserRegistration
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
      />
    </div>
  );
};
