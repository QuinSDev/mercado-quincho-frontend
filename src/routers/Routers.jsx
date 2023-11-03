import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import { Home } from "../pages/Home";
import { UserLogin } from "../pages/UserLogin";
import { UserRegistration } from "../pages/UserRegistration";

export const Routers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen y su estado inicial

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="login"
        element={<UserLogin isOpenL={isModalOpen} onCloseL={closeModal} />}
      />
      <Route
        path="registration"
        element={<UserRegistration isOpen={isModalOpen} onClose={closeModal} />}
      />
    </Routes>
  );
};
