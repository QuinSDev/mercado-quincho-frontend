import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";

export const UserRegisterForm = ({ closeRegisterModal, openModal }) => {
  const initialState = {
    name: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    file: null,
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
    file,
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

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
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
    const requestData = new FormData();
    requestData.append("name", name);
    requestData.append("lastName", lastName);
    requestData.append("address", address);
    requestData.append("phoneNumber", phoneNumber);
    requestData.append("email", email);
    if (file) {
      requestData.append("file", file);
    }
    requestData.append("password", password);
    requestData.append("confirmPassword", confirmPassword);

    const requestOPtions = {
      method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: requestData,
    };
    try {
      const response = await fetch(API_URL, requestOPtions);

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          // const token = data.token;
          // Almacenar el token en el almacenamiento local
          // localStorage.setItem("token", token);

          alert(data.msg);
          resetForm();
          closeRegisterModal();
          openModal();
          navigate("/login");
        } else if (data.success) {
          alert(data.msg);
          resetForm();
          closeRegisterModal();
          openModal();
          navigate("/login");
        } else {
          alert(data.msg);
        }
      } else {
        throw new Error("La respuesta del servidor no es un JSON válido");
      }
    } catch (error) {
      console.error("Error durante la petición fetch:", error);
    }
  };

  return (
    <>
      <div className="flex justify-end">
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
      <form
        className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-2xl"
        id="registrationForm"
        method="POST"
        onSubmit={handleRegister}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-6 formQuincho">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder=""
            />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="mt-6 formQuincho">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder=""
            />
            <label htmlFor="lastName">Apellido</label>
          </div>
        </div>

        <div className="mt-6 formQuincho">
          <input
            type="text"
            name="address"
            id="address"
            rows={3}
            value={address}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="address">Dirección</label>
        </div>

        <div className="mt-6 formQuincho">
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="phoneNumber">Teléfono</label>
        </div>

        <div className="mt-6 formQuincho">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="mt-6 formQuincho">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="password">Contraseña</label>
        </div>

        <div className="mt-6 formQuincho">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder=""
          />
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        </div>

        <div>
          {passwordsMatch ? null : (
            <p className="text-red-500">Las contraseñas no coinciden.</p>
          )}
        </div>
        <div>
          <p className="text-[#35C5DF] text-sm font-bold text-center">
            Recuerde 5 caracteres con al menos una mayúscula
          </p>
        </div>

        <div className="mt-0 border-t border-gray-900/10 pb-12">
          <p className="text-center mt-1 text-lg leading-6 text-gray-600">
            Sube tu foto de perfil
          </p>

          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div className="text-center">
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Vista previa"
                    className="mx-auto h-20 w-20 object-cover rounded-full"
                  />
                ) : (
                  <PhotoIcon
                    className="mx-auto h-20 w-20 text-gray-300"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-[#35C5DF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#35C5DF] focus-within:ring-offset-2 hover:text-black"
                >
                  <span>Sube un archivo</span>

                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                  {/*ver el nombre en el repositorio para que coincida
                          value={numBathroom} onChange={onInputChange}*/}
                </label>
                <p className="pl-1">o arrastra y sueltalo</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
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
