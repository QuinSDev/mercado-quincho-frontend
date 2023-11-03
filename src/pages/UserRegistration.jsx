import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

export const UserRegistration = ({ isOpen, onClose }) => {
  const auth = useAuth();
  const [name, setName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const passwordsMatch = password === confirmPassword;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      auth.register(
        name,
        lastName,
        address,
        phoneNumber,
        email,
        password,
        confirmPassword
      );
      alert("¡Registro exitoso!");
    } catch (error) {
      alert("Ingrese valores válidos");
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      maxWidth: "400px",
      width: "100%",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      style={customStyles}
    >
      <div className="flex justify-end">
        <button
          className="text-white text-xl hover:text-gray-300 focus:outline-none"
          onClick={onClose}
        >
          <MdClose className=" bg-black hover:shadow mb-2 text-md" />
        </button>
      </div>
      <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
        Regístrate
      </h2>
      <form
        className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-2xl"
        id="registrationForm"
        method="POST"
        onSubmit={handleRegister}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-semibold text-black"
            >
              Nombre:
            </label>
            <input
              type="text"
              name="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-semibold text-black"
            >
              Apellido:
            </label>
            <input
              type="text"
              name="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
              placeholder="Ingrese su apellido"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-semibold text-black"
          >
            Dirección:
          </label>
          <input
            type="text"
            name="text"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
            placeholder="Indique su dirección"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-semibold text-black"
          >
            Teléfono:
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
            placeholder="Ingrese su numero telefónico"
          />
        </div>

        <div>
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
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
            placeholder="Ingrese su email"
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
            onChange={(e) => setPassword(e.target.value)}
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-semibold text-black"
          >
            Confirmar contraseña:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-input w-full px-3 py-2 text-white rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
          />
        </div>
        <div>
          {passwordsMatch ? null : (
            <p className="text-red-500">Las contraseñas no coinciden.</p>
          )}
        </div>
        <div>
          <p className="text-black text-sm font-bold text-center">
            Recuerde 6 caracteres con al menos una mayúscula
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300"
          onClick={handleRegister}
        >
          Crear cuenta
        </button>
      </form>
    </Modal>
  );
};
