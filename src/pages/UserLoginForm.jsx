import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export const UserLoginForm = ({ closeModal, openRegisterModal, updateAuthStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    

    if (!email || !password) {
      alert("Por favor, complete todos los campos.");

      setEmail("");
      setPassword("");
      return;
    }

    // Validar que el campo de correo electrónico sea una dirección de correo válida
    if (!isValidEmail(email)) {
      alert("Ingrese una dirección de correo válida.");
      return;
    }

    submitUser();
  };

  // Función para validar una dirección de correo electrónico usando una expresión regular
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const API_URL = "http://localhost:8080/auth/login";

  const submitUser = async () => {
    try {
      const requestData = {
        email: email,
        password: password,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };

      const response = await fetch(API_URL, requestOptions);
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        console.log(data);

        if (data.token) {
          const token = data.token;
          localStorage.setItem("token", token);
          // Almacenar el token en el almacenamiento local
          updateAuthStatus();
          alert("¡El inicio de sesión fue exitoso!");
          
          closeModal();
          navigate("/");
        } else {
          if (data.userNoR) {
            alert("Usuario no registrado. Regístrese primero.");
            closeModal(); // Cierra el modal de inicio de sesión
            openRegisterModal(); // Abre el modal de registro
            navigate("/register");
          }
          if (data.contraI) {
            alert(data.contraI)
          }
        }
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Se produjo un error en la solicitud. Inténtelo de nuevo.");
    }
    setEmail("");
    setPassword("");
  };

  // const handleGoogle = (e) => {
  //   e.preventDefault();
  //   auth.loginWidthGoogle();
  // };

  const LoginStyles = {
    content: {
      top: "56%", // Centra verticalmente
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)", // Centra horizontalmente y ajusta verticalmente
      maxWidth: "400px", // Ajusta el ancho máximo del modal
      width: "100%", // Establece el ancho al 100%
    },
  };

  return (
    <>
      <div data-theme="light" className="flex justify-end">
        <button
          className="text-white text-xl hover:text-gray-300 rou focus:outline-none"
          onClick={closeModal}
        >
          <Link to="/">
            <MdClose className=" bg-black hover:shadow mb-2 text-md" />{" "}
          </Link>
        </button>
      </div>
      <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
        Iniciar sesión
      </h2>
      <form className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-2xl">


      <div className="mt-6 formQuincho">
          <input type="email"
            name="email"
            id="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder=" " />
          <label htmlFor="email">Email</label>
        </div>

        <div className="mt-6 formQuincho">
          <input type="password"
            name="password"
            id="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder=" " />
          <label htmlFor="password">Contraseña</label>
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
        {/* <button
            type="submit"
            className="w-full bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300 "
            onClick={handleGoogle}
          >
            Iniciar con Google
          </button> */}
      </form>
    </>
  );
};
