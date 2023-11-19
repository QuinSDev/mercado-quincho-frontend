import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { QuinchoContext } from "../components/QuinchoProvider";

export const EditQuinchoForm = ({ fetchDataQuincho }) => {
  const { selectedQuincho } = useContext(QuinchoContext);

  const history = useNavigate();

  const onCancelClick = () => {
    history("/userAccount/quinchos", { replace: true });
    window.scrollTo(0, 0);
  };

  const [formState, setFormState] = useState({
    nameQuincho: "",
    location: "",
    description: "",
    price: "",
    typeQuincho: "",
    numGuest: "",
    numBed: "",
    numBedroom: "",
    numBathroom: "",
    files: [],
  });

  useEffect(() => {
    if (selectedQuincho) {
      setFormState({
        nameQuincho: selectedQuincho.nameQuincho || "",
        location: selectedQuincho.location || "",
        description: selectedQuincho.description || "",
        price: selectedQuincho.price || "",
        typeQuincho: selectedQuincho.typeQuincho || "",
        numGuest: selectedQuincho.numGuest || "",
        numBed: selectedQuincho.numBed || "",
        numBedroom: selectedQuincho.numBedroom || "",
        numBathroom: selectedQuincho.numBathroom || "",
        files: [],
      });
    }
  }, [selectedQuincho]);

  const handleFileChange = (e) => {
    // Agrega el nuevo archivo a la lista existente
    const newFile = e.target.files[0];
    console.log("Nuevo archivo:", newFile);
    setFormState((prevFormState) => ({
      ...prevFormState,
      files: [...prevFormState.files, newFile],
    }));
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Archivos a enviar:", formState.files);
    console.log("Datos", formState);
    submitUser();
  };

  const API_URL = `http://localhost:8080/quincho/edit/${selectedQuincho.id}`;

  const submitUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debe iniciar sesión primero para registrar un quincho.");
      return;
    }

    const requestData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file) => {
          requestData.append(key, file);
        });
      } else {
        requestData.append(key, value);
      }
    });

    const requestOPtions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: requestData,
    };

    const response = await fetch(API_URL, requestOPtions);

    // Comprobar el tipo de contenido de la respuesta
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json();
      if (data.msg === "Actualización exitosa") {
        fetchDataQuincho();
        alert(data.msg);
        console.log(data.msg);
      } else {
        alert(data.msg);
      }
    } else {
      throw new Error("La respuesta del servidor no es un JSON válido");
    }
  };

  return (
    <>
      <div data-theme="light" className="m-0 bg-white artboard-demo">
        <form
          data-theme="light"
          onSubmit={onSubmit}
          className="m-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-2xl"
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
                Tu Quincho
              </h2>
              <p className="text-center mt-1 text-lg leading-6 text-[#35C5DF]">
                Actualiza la informacion de tu Quincho.
              </p>

              <div className="mt-10 col-span-full">
                <div className="mt-6 formQuincho">
                  <input
                    type="text"
                    name="nameQuincho"
                    id="nameQuincho"
                    value={formState.nameQuincho}
                    onChange={onInputChange}
                    placeholder=""
                  />
                  <label htmlFor="nameQuincho">Nombre del Quincho</label>
                </div>

                <div className="mt-6 formQuincho">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formState.location}
                    onChange={onInputChange}
                    placeholder=""
                  />
                  <label htmlFor="location">Dirección</label>
                </div>

                <div className="mt-6 formQuincho">
                  <input
                    type="text"
                    name="description"
                    id="description"
                    rows={3}
                    value={formState.description}
                    onChange={onInputChange}
                    placeholder=""
                  />
                  <label htmlFor="description">Descripción del Quincho</label>
                </div>

                <div className="mt-6 formQuincho">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={formState.price}
                    onChange={onInputChange}
                    placeholder=""
                  />
                  <label htmlFor="price">Precio por Noche</label>
                </div>

                <label
                  htmlFor="typeQuincho"
                  className="mt-6 ml-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipo de Quincho
                </label>
                <div className="mt-2 formQuincho">
                  <select
                    type="text"
                    name="typeQuincho"
                    id="typeQuincho"
                    value={formState.typeQuincho}
                    onChange={onInputChange}
                    placeholder=""
                    disabled={selectedQuincho}
                  >
                    <option value="" disabled>
                      {selectedQuincho
                        ? selectedQuincho.typeQuincho
                        : "Seleccionar"}
                    </option>
                    <option value="Chalet">Chalet</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Cabaña">Cabaña</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-900/10 pb-12">
                <h2 className="text-center mt-6 text-xl font-bold leading-7 text-gray-900">
                  Servicios
                </h2>
                <p className="text-center mt-1 text-lg leading-6 text-[#35C5DF]">
                  Completa los servicios de tu Quincho
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3 formQuincho">
                    <input
                      type="number"
                      name="numGuest"
                      id="numGuest"
                      value={formState.numGuest}
                      onChange={onInputChange}
                      placeholder=""
                    />
                    <label htmlFor="numGuest">N° de Huespedes</label>
                  </div>

                  <div className="sm:col-span-3 formQuincho">
                    <input
                      type="number"
                      name="numBedroom"
                      id="numBedroom"
                      value={formState.numBedroom}
                      onChange={onInputChange}
                      placeholder=""
                    />
                    <label htmlFor="numBedroom">N° de Habitaciones</label>
                  </div>

                  <div className="sm:col-span-3 formQuincho">
                    <input
                      type="number"
                      name="numBed"
                      id="numBed"
                      value={formState.numBed}
                      onChange={onInputChange}
                      placeholder=""
                    />
                    <label htmlFor="numBed">N° de Camas</label>
                  </div>

                  <div className="sm:col-span-3 formQuincho">
                    <input
                      type="number"
                      name="numBathroom"
                      id="numBathroom"
                      value={formState.numBathroom}
                      onChange={onInputChange}
                      placeholder=""
                    />
                    <label htmlFor="numBathroom">N° de Baños</label>
                  </div>
                </div>
              </div>

              <div className="mt-0 border-t border-gray-900/10 pb-12">
                <h2 className="text-center mt-6 text-xl font-bold leading-7 text-gray-900">
                  Fotos
                </h2>
                <p className="text-center mt-1 text-lg leading-6 text-[#35C5DF]">
                  Sube las fotos de tu Quincho
                </p>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="files"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-[#35C5DF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#35C5DF] focus-within:ring-offset-2 hover:text-black"
                      >
                        <span>Sube un archivo</span>

                        <input
                          type="file"
                          id="files"
                          name="files"
                          className="sr-only"
                          onChange={handleFileChange}
                          multiple
                        />
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
                <button
                  type="button"
                  className="btn bg-[#000000] text-white hover:bg-[#35C5DF] hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2"
                  onClick={onCancelClick}
                >
                  <Link to="/userAccount"> Cancel </Link>
                </button>
                <button
                  type="submit"
                  className="btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2"
                >
                  Modificar tu Quincho
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
