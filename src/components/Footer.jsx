import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/images/github.png"
import instagram from "../assets/images/instagram.png"

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer footer-center p-8 text-black rounded"
      style={{ backgroundColor: "#35c5df" }}
    >
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="text-2x1 text-black link link-hover">
          Inicio
        </Link>
        <Link to="/register" className="text-2x1  text-black link link-hover">
          Registrate
        </Link>
        <Link to="/login" className="text-2x1 text-black link link-hover">
          Logueate
        </Link>
        <Link
          to="/register/quincho"
          className="text-2x1 text-black link link-hover">
          Sube tu Quincho
        </Link>
        <Link to="/helpCenter"
        className="text-2x1 text-black link link-hover">
          Centro de ayuda
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img
              className="h-10 w-10"
              src={github}
              alt="Logo de Github"
            />
          </a>

          <a>
            <img
              className="h-10 w-10"
              src={instagram}
              alt="Logo de Github"
            />
          </a>
        </div>
      </nav>
      <aside className="text-2x1 text-black">
        <p>&copy; {year} - Dev - Team One</p>
      </aside>
    </footer>
  );
};
