import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { UserContext } from "../components/UserProvider";

export const EditUserForm = ({ updateAuthStatus }) => {
  const { selectedUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    file: null,
    currentPhotoUrl: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name || "",
        lastName: selectedUser.lastName || "",
        address: selectedUser.address || "",
        phoneNumber: selectedUser.phoneNumber || "",
        email: selectedUser.email || "",
        password: "",
        confirmPassword: "",
        file: null,
        currentPhotoUrl: selectedUser.photoUrl,
      });
    }
  }, [selectedUser]);

  const { password, confirmPassword } = formData;
  const passwordsMatch = password === confirmPassword;

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    submitUser();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileUrl = URL.createObjectURL(selectedFile);

    setFormData({
      ...formData,
      file: selectedFile,
      currentPhotoUrl: "",
      fileUrl: fileUrl,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const API_URL = "https://mucho-cattle-production.up.railway.app/user/perfil";

  const submitUser = async () => {
    const token = localStorage.getItem("token");

    const requestData = new FormData();
    requestData.append("name", formData.name);
    requestData.append("lastName", formData.lastName);
    requestData.append("address", formData.address);
    requestData.append("phoneNumber", formData.phoneNumber);
    requestData.append("email", formData.email);
    requestData.append("password", formData.password);
    requestData.append("confirmPassword", formData.confirmPassword);
    // Verifica si se ha seleccionado una nueva imagen
    if (formData.file) {
      requestData.append("file", formData.file);
    } else {
      // Si no se seleccionó una nueva imagen, envía la imagen actual del usuario
      const currentPhotoBlob = await fetch(formData.currentPhotoUrl).then(
        (res) => res.blob()
      );
      requestData.append("file", currentPhotoBlob);
    }

    const requestOPtions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: requestData,
    };
    try {
      const response = await fetch(API_URL, requestOPtions);

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          alert(data.msg);
          updateAuthStatus();
          navigate("/userAccount");
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
      <div data-theme="light">
        <form
          className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-2xl"
          id="registrationForm"
          method="POST"
          onSubmit={handleRegister}
        >
          <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
            Tus Datos
          </h2>
          <p className="text-center mt-1 text-lg leading-6 text-[#35C5DF]">
            Actualiza tu informacion personal
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="mt-6 formQuincho">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
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
                value={formData.lastName}
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
              value={formData.address}
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
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder=""
            />
            <label htmlFor="phoneNumber">Teléfono</label>
          </div>

          <div className="mt-6 formQuincho">
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
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
              value={formData.confirmPassword}
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
                  {formData.currentPhotoUrl ? (
                    <img
                      src={formData.currentPhotoUrl} // Muestra la imagen actual si está disponible
                      alt="Foto perfil"
                      className="mx-auto h-20 w-20 object-cover rounded-full"
                    />
                  ) : formData.fileUrl ? (
                    <img
                      src={formData.fileUrl} // Muestra la nueva imagen seleccionada
                      alt="Foto perfil"
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

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to="/userAccount">
              <button
                type="button"
                className="btn bg-[#000000] text-white hover:bg-[#35C5DF] hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2"
              onClick={handleRegister}
            >
              {" "}
              Modificar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
