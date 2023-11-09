import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export const UserRegisterForm = ({ closeRegisterModal, openModal }) => {
  const initialState = {
    name: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const {
    name,
    lastName,
    address,
    phoneNumber,
    email,
    password,
    confirmPassword,
  } = formData;

  const passwordsMatch = password === confirmPassword;

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validar que el campo de correo electrónico sea una dirección de correo válida
    if (!isValidEmail(email)) {
      alert("Ingrese una dirección de correo válida.");
      return;
    }
    submitUser();
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  // Función para validar una dirección de correo electrónico usando una expresión regular
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const API_URL = "http://localhost:8080/auth/register";

  const submitUser = async () => {
    const requesData = {
      name: name,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const requestOPtions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requesData),
    };

    const response = await fetch(API_URL, requestOPtions);

    // Comprobar el tipo de contenido de la respuesta
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json();
      if (data.token) {
        // const token = data.token;
        // Almacenar el token en el almacenamiento local
        // localStorage.setItem("token", token);
        
        alert("¡Te registraste exitosamente!");

        //////////////////////////////////////////////////////////
        resetForm();
        closeRegisterModal();
        openModal();
        navigate("/login");
      } else {
        if (data.useR) {
          resetForm();
          closeRegisterModal();
          openModal();
          navigate("/login");
        }
        alert(data.msg);
      }
    } else {
      throw new Error("La respuesta del servidor no es un JSON válido");
    }
  };

  return (
    <>
      <div data-theme="light" className="flex justify-end">
        <button
          className="text-white text-xl hover:text-gray-300 focus:outline-none"
          onClick={closeRegisterModal}
        >
          <Link to="/">
            <MdClose className=" bg-black hover:shadow mb-2 text-md" />{" "}
          </Link>
        </button>
      </div>
      <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
        Regístrate
      </h2>
      <form data-theme="light"
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
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
            name="address"
            id="address"
            value={address}
            onChange={handleChange}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
            value={phoneNumber}
            onChange={handleChange}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
            value={email}
            onChange={handleChange}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
            value={password}
            onChange={handleChange}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
            value={confirmPassword}
            onChange={handleChange}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring-2 focus:ring-[#35C5DF]"
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
    </>
  );
};
