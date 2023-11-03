import React, { useState } from "react";
import logo from "../assets/images/logoazul.png";
import avatar from "../assets/images/avatar.svg";
import { Link } from "react-router-dom";

export const NavBar = ({ openLoginModal, openRegistrationModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full border-b-[2px] border-gray-950 text-black bg-white sticky top-0 z-50">
      <div className="md:container md:mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-20 uppercase cursor-pointer"
            src={logo}
            alt="Logo de la tienda"
          />
        </div>

        <div className="item-center">
          <button className="smky-btn3 font-semibold relative hover:text-white  py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#35C5DF] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black">
            Sube tu quincho al mercado
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
            <li className="liMenu">
              <a
                className="block py-2 text-black font-semibold "
                onClick={openLoginModal}
              >
                <Link to="/login">Iniciar sesión</Link>
              </a>
            </li>

            <li className="liMenu ">
              <a
                className="block py-2 text-black font-semibold "
                onClick={openRegistrationModal}
              >
                <Link to="/registration">Regístrate</Link>
              </a>
            </li>
            <li className="liMenu  border-gray-200">
              <a className="block py-2 text-black font-semibold ">
                Centro de ayuda
              </a>
            </li>

            <li className="liMenu border-t border-gray-200">
              <a className="block py-2 text-black font-bold ">
                Sube tu quincho al mercado
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
