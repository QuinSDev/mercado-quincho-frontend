import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";



export const UserLogin = ({ isOpenL, onCloseL }) => {
  const auth = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login(userEmail, password);

      alert("¡El inicio de sesión fue exitoso!");
      onCloseL();
    } catch (error) {
      alert("Ingrese un usuario o contraseña valido");
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWidthGoogle();
  };

  const customStyles = {
    content: {
      top: "50%", // Centra verticalmente
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)", // Centra horizontalmente y ajusta verticalmente
      maxWidth: "400px", // Ajusta el ancho máximo del modal
      width: "100%", // Establece el ancho al 100%
    },
  };

  return (
    <Modal
      isOpen={isOpenL}
      onRequestClose={onCloseL}
      contentLabel="Login Modal"
      style={customStyles}
    >
      <div className="flex justify-end">
        <button
          className="text-white text-xl hover:text-gray-300 rou focus:outline-none"
          onClick={onCloseL}
        >
          <MdClose className="bg-black  hover:shadow mb-2 text-md" />
        </button>
      </div>
      <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
        Iniciar sesión
      </h2>
      <form className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-2xl">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-black"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF] "
            placeholder="name@company.com"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-black"
          >
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-[#35C5DF]"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-semibold text-black"
            >
              Recordar
            </label>
          </div>
        </div>
        <div className="mb-4">
          <a
            href="#"
            className="text-sm text-[#35C5DF] font-bold hover:underline "
          >
            Olvidaste tu clave?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300"
          onClick={handleLogin}
        >
          Iniciar sesión
        </button>
        <button
          type="submit"
          className="w-full bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300 "
          onClick={handleGoogle}
        >
          Iniciar con Google
        </button>
        
      </form>
    </Modal>
  );
};
