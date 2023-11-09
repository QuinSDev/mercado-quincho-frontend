import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


export const QuinchoForm = () => {
  const history = useNavigate();

  const onCancelClick = () => {
    history("/", { replace: true });
    window.scrollTo(0, 0);
  }

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
  });

  const {
    nameQuincho,
    location,
    description,
    price,
    typeQuincho,
    numGuest,
    numBed,
    numBedroom,
    numBathroom,
  } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitUser()
  };


  const API_URL = "http://localhost:8080/quincho/register";

  const submitUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debe iniciar sesión primero para registrar un quincho.");
      return;
    }

    const requesData = {
      nameQuincho: formState.nameQuincho,
      location: formState.location,
      description: formState.description,
      price: formState.price,
      typeQuincho: formState.typeQuincho,
      numGuest: formState.numGuest,
      numBed: formState.numBed,
      numBedroom: formState.numBedroom,
      numBathroom: formState.numBathroom
    };

    const requestOPtions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requesData),
    };

    const response = await fetch(API_URL, requestOPtions);

    // Comprobar el tipo de contenido de la respuesta
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json();
      console.log(token)
      if (data.msg === "Registro éxitoso") {
        alert(data.msg);
        console.log(data.msg);
      } else {
        alert(data.msg)

        console.log(typeQuincho)
      }
    } else {
      throw new Error("La respuesta del servidor no es un JSON válido");
    }

    setFormState({
      nameQuincho: "",
      location: "",
      description: "",
      price: "",
      typeQuincho: "",
      numGuest: "",
      numBed: "",
      numBedroom: "",
      numBathroom: "",
    });
  };

  return (
    <>
      <div data-theme="light" className="m-0 bg-white artboard-demo">

        <form data-theme="light" onSubmit={onSubmit} className="m-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-2xl">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">

              <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Tu Quincho</h2>
              <p className="text-center mt-1 text-sm leading-6 text-gray-600">Completa la informacion de tu Quincho.</p>
              <div className="mt-10 col-span-full">
                <label htmlFor="nameQuincho" 
                className="block mb-2 text-sm font-semibold text-black">Nombre del Quincho</label>
                <div className="mt-2">
                  <input type="text" 
                  name="nameQuincho" 
                  id="nameQuincho" 
                  value={nameQuincho} onChange={onInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" 
                  placeholder="Ingrese el nombre de su quincho"/>

                </div>
                <label htmlFor="location" className="mt-6 block text-sm font-medium leading-6 text-gray-900 bg-white">Direccion</label>
                <div className="mt-2">
                  <input type="text" name="location" id="location" value={location} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                </div>
                <label htmlFor="description" className="mt-6 block text-sm font-medium leading-6 text-gray-900">Descripcion</label>
                <div className="mt-2">
                  <input id="description" name="description" rows={3} value={description} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                </div>
                <label htmlFor="price" className="mt-6 block text-sm font-medium leading-6 text-gray-900">Precio por noche</label>
                <div className="mt-2">
                  <input type="number" name="price" id="price" value={price} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                </div>
                <label htmlFor="typeQuincho" className="mt-6 block text-sm font-medium leading-6 text-gray-900">Tipo de Quincho</label>
                <div className="mt-2">
                  <select id="typeQuincho" name="typeQuincho" value={typeQuincho} onChange={onInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:max-w-xs sm:text-sm sm:leading-6">
                    <option value="" disabled>Seleccionar</option>
                    <option value="Chale">Chalet</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Casa con piscina">Casa con piscina</option>
                  </select>
                </div>
              </div>
              <div className="mt-10 border-t border-gray-900/10 pb-12">
                <h2 className="text-center mt-6 text-base font-semibold leading-7 text-gray-900">Servicios</h2>
                <p className="text-center mt-1 text-sm leading-6 text-gray-600">Completa las dependencias de tu Quincho</p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Numero de huespedes</label>
                    <div className="mt-2">
                      <input type="number" name="numGuest" id="numGuest" value={numGuest} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Numero de habitaciones</label>
                    <div className="mt-2">
                      <input type="number" name="numBedroom" id="numBedroom" value={numBedroom} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Numero de Camas</label>
                    <div className="mt-2">
                      <input type="number" name="numBed" id="numBed" value={numBed} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Numero de baños</label>
                    <div className="mt-2">
                      <input type="number" name="numBathroom" id="numBathroom" value={numBathroom} onChange={onInputChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="btn bg-[#000000] text-white hover:bg-[#35C5DF] hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2"
                  onClick={onCancelClick}
                >
                  <Link to="/"> Cancel </Link>
                </button>
                <button type="submit" className="btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2">Cargar tu Quincho</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
