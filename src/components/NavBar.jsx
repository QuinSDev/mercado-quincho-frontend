import React, { useState, useEffect } from "react";
import logo from "../assets/images/logoazul.png";
import avatar from "../assets/images/avatar.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { UserRegisterForm } from "../pages/UserRegisterForm";
import { UserLoginForm } from "../pages/UserLoginForm";

export const NavBar = ({}) => {
  const [modalOpen, setModalOpen] = useState(false); // Agrega este estado
  const [registerModal, setRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para actualizar el estado de autenticación
  const updateAuthStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };
  useEffect(() => {
    // Verificar la autenticación al cargar la página
    updateAuthStatus();
  }, []);

  const handleLogout = () => {
    // Elimina el token de autenticación del almacenamiento local
    localStorage.removeItem("token");

    // Actualiza el estado de autenticación para mostrar el botón de inicio de sesión
    setIsLoggedIn(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setRegisterModal(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const customStyles = {
    content: {
      margin: "10px",
      top: "56%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      maxWidth: "500px",
      width: "600px",
      height: "500px", // Establece la altura máxima al 80% del alto de la ventana
    },
  };

  const LoginStyles = {
    content: {
      top: "56%", // Centra verticalmente
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)", // Centra horizontalmente y ajusta verticalmente
      maxWidth: "400px", // Ajusta el ancho máximo del modal
      width: "100%", // Establece el ancho al 100%
      height: "auto",
    },
  };

  return (
    <div className="w-full border-b-[2px] border-gray-950 text-black bg-white sticky top-0 z-50">
      <div className="md:container md:mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-20 uppercase cursor-pointer"
              src={logo}
              alt="Logo de la tienda"
            />
          </Link>
        </div>
        <div className="item-center">
          <button className="smky-btn3 font-semibold relative hover:text-white  py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#35C5DF] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black">
            <Link to="/register/quincho"> Sube tu quincho al mercado</Link>
          </button>
        </div>
        <div className="dropdown dropdown-end ">
          <div className="flex items-center gap-6">
            <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </button>
            <button
              className="btn btn-ghost  btn-circle avatar"
              onClick={toggleMenu}
            >
              <img src={avatar} alt="Login" />
            </button>
          </div>
          <button className="lg:hidden ml-4" onClick={toggleMenu}></button>
          <ul className=" menu-sm  z-10 p-2 shadow-lg dropdown-content rounded-md bg-white text-black text-center m-3 w-52">
            {!isLoggedIn ? (
              <li className="liMenu">
                <a
                  className="block py-2 text-black font-semibold "
                  onClick={openModal}
                >
                  <Link to="/login">Iniciar sesión</Link>
                </a>
              </li>
            ) : null}
            {isLoggedIn ? (
              <li className="liMenu">
                <a
                  className="block py-2 text-black font-semibold "
                  onClick={handleLogout} // Agrega función para cerrar sesión
                >
                <Link to="/">  Cerrar sesión</Link>
                </a>
              </li>
            ) : null}
            <Modal
              isOpen={modalOpen}
              onRequestClose={closeModal}
              style={LoginStyles}
            >
              <UserLoginForm
                closeModal={closeModal}
                openRegisterModal={openRegisterModal}
                updateAuthStatus={updateAuthStatus}
              />
            </Modal>
            {!isLoggedIn ? (
            <li className="liMenu ">
              <a
                className="block py-2 text-black font-semibold text-center"
                onClick={openRegisterModal}
              >
                <Link to={"/register"}> Regístrate</Link>
              </a>
            </li>
            ) : null }
            <Modal
              isOpen={registerModal}
              onRequestClose={closeRegisterModal}
              style={customStyles}
            >
              <UserRegisterForm
                closeRegisterModal={closeRegisterModal}
                openModal={openModal}
              />
            </Modal>
            <li className="liMenu  border-gray-200">
              <a className="block py-2 text-black font-semibold ">
                Centro de ayuda
              </a>
            </li>
            {/*////////////////////////////////////////////////////////////////////*/}
            <li className="liMenu border-t border-gray-200">
              <a className="block py-2 text-black font-bold ">
                <Link to="/dashboard">Panel de Control</Link>
              </a>
            </li>
            <li className="liMenu  border-gray-200">
              <a className="block py-2 text-black font-semibold ">
                Tu cuenta
              </a>
            </li>
           {/*////////////////////////////////////////////////////////////////////*/}
            <li className="liMenu border-t border-gray-200">
              <a className="block py-2 text-black font-bold ">
                <Link to="/register/quincho">Sube tu quincho al mercado</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
