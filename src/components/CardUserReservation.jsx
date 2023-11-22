import React, { useContext, useState } from "react";
import chalet from "../assets/images/chalet.png";
import quinta from "../assets/images/quinta.png";
import cabaña from "../assets/images/cabaña.png";
import placeblue from "../assets/images/placeblue.png";
import moneyblue from "../assets/images/moneyblue.png";
import bed from "../assets/images/bed.png";
import bathroom from "../assets/images/bathroom.png";
import blueman from "../assets/images/blueman.png";
import reservation from "../assets/images/reservation.png";
import reservablue from "../assets/images/reservablue.png";
import comentario from "../assets/images/comentario.png";
import edit from "../assets/images/edit.png";
import cancel from "../assets/images/cancel.png";
import { Link } from "react-router-dom";
import { QuinchoContext } from "./QuinchoProvider";

export const CardUserReservation = ({ quinchos }) => {

    const { updateSelectedQuincho } = useContext(QuinchoContext)

    const handleSelectQuincho = (quincho) => {
      updateSelectedQuincho(quincho);
    };
  
    const showIcon = (option) => {
      if (option === "Chalet") {
        return <img className="h-7 w-7" src={chalet} alt="Logo de chalets" />;
      }
      if (option === "Quinta") {
        return <img className="h-7 w-7" src={quinta} alt="Logo de quintas" />;
      }
      if (option === "Cabaña") {
        return <img className="h-7 w-7" src={cabaña} alt="Logo de cabañas" />;
      }
    };

  return (
    <>
    <div data-theme="light" className="mt-10 mx-auto max-w-screen-lg mb-10">


      {quinchos.map((quincho) => (

        <div data-theme="light" className="mt-10 max-w-5xl mx-auto bg-[#35C5DF] bg-opacity-40 rounded-md shadow-2xl">

          <div className="mt-20 mx-6 rounded-md">

            {/*Titulo del quincho*/}
            <div className="mt-6 flex justify-center">
              <div className="p-2">
                <span>
                  {showIcon(quincho.typeQuincho)}
                </span>
              </div>

              <div>
                <h3 className="p-2 font-semibold text-lg text-gray-900">
                  <a >
                    <span aria-hidden="true" />
                    {quincho.nameQuincho}
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div data-theme="light" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-md shadow-2xl">

            {/*Quinchos*/}
            <div key={quincho.id} className="m-6 relative rounded-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
              style={{ width: "290px" }} >

              {/*imagen*/}
              <div className="mt-2 w-full overflow-hidden  bg-gray-200 lg:h-52 group-hover:opacity-75">
                <img
                  src={quincho.photoUrl}
                  alt="imagen del quincho"
                  loading="lazy" // Agrega el atributo loading="lazy"
                  className="w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>


              <div className="m-3 mt-2">

                {/*Direccion*/}
                <div className="mt-1 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-7 w-7"
                        src={placeblue}
                        alt="Logo de direccion"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 text-sm text-gray-500">
                      <a >
                        <span aria-hidden="true" />
                        {quincho.location}
                      </a>
                    </h3>
                  </div>
                </div>

                {/*Numero de habitaciones y camas*/}
                <div className="mt-1 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-7 w-7"
                        src={bed}
                        alt="Logo de cama"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 text-sm text-gray-500">
                      <a >
                        <span aria-hidden="true" />
                        Habitaciones: {quincho.numBedroon}
                      </a>
                      <a >
                        <span aria-hidden="true" />
                        - Camas: {quincho.numBed}
                      </a>
                    </h3>
                  </div>
                </div>

                {/*Numero de baños*/}
                <div className="mt-1 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-7 w-7"
                        src={bathroom}
                        alt="Logo de baño"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 text-sm text-gray-500">
                      <a >
                        <span aria-hidden="true" />
                        Baños: {quincho.numBathRoon}
                      </a>
                    </h3>
                  </div>
                </div>

                {/*Huespedes*/}
                <div className="mt-1 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-7 w-7"
                        src={blueman}
                        alt="Logo de huesped"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 text-sm text-gray-500">
                      <a >
                        <span aria-hidden="true" />
                        Huespedes: {quincho.numGuest}
                      </a>
                    </h3>
                  </div>
                </div>

                {/*Precio*/}
                <div className="mt-1 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-7 w-7"
                        src={moneyblue}
                        alt="Logo de dolar"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                      <a >
                        <span aria-hidden="true" />
                        $ {quincho.price} Por noche
                      </a>
                    </h3>
                  </div>
                </div>

              </div>
            </div>

            {/*Reservas*/}
            <div className="m-6 relative rounded-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
              style={{ width: "290px" }}>

              {/*Titulo de reservas*/}
              <div className="mt-2 flex justify-center">
                <div className="p-2">
                  <span>
                    <img
                      className="h-7 w-7"
                      src={reservation}
                      alt="Logo de reserva"
                    />
                  </span>
                </div>
                <div>
                  <h3 className="p-2 font-semibold text-lg text-gray-900">
                    <a >
                      <span aria-hidden="true" />
                      Reservas
                    </a>
                  </h3>
                </div>
              </div>

              {/*lista de reservas*/}
              <div className="m-2 flex flex-col justify-center border-2 rounded-md">
                <img
                  className="h-7 w-7"
                  src={reservablue}
                  alt="Logo de reserva"
                />
                <div className="flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-gray-500">Fecha de Ingreso: </h3>
                  <h3 className="mt-0.5 text-sm text-gray-500"> 10/10</h3>
                </div>
                <div className="mt-2 flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-gray-500">Check In: </h3>
                  <h3 className="mt-0.5 text-sm text-gray-500"> 14:00 hs</h3>
                </div>
                <div className="mt-2 flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-gray-500">Fecah de Salida: </h3>
                  <h3 className="mt-0.5 text-sm text-gray-500"> 20/10</h3>
                </div>
                <div className="mt-2 flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-gray-500">Check Out: </h3>
                  <h3 className="mt-0.5 text-sm text-gray-500"> 10:00 hs</h3>
                </div>
                <div className="mt-2 flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-gray-500">Viajeros: </h3>
                  <h3 className="mt-0.5 text-sm text-gray-500">2</h3>
                </div>
                <div className="mt-2 flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-black">Total: </h3>
                  <h3 className="mt-0.5 text-sm text-black">$ 100</h3>
                </div>

                <div className="mt-2 flex justify-center">
                  <button className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300">
                    <img
                      className="h-7 w-7"
                      src={edit}
                      alt="Logo de editar"
                    />
                  </button>
                  <button className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300">
                    <img
                      className="h-8 w-8"
                      src={cancel}
                      alt="Logo de cancelar"
                    />
                  </button>

                </div>
              </div>

            </div>

            {/*Comentarios*/}
            <div className="m-6 relative rounded-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
              style={{ width: "290px" }}>

              {/*titulo de comentarios*/}
              <div className="mt-2 flex justify-center">
                <div className="p-2">
                  <span>
                    <img
                      className="h-7 w-7"
                      src={comentario}
                      alt="Logo de comentario"
                    />
                  </span>
                </div>
                <div>
                  <h3 className="p-2 font-semibold text-lg text-gray-900">
                    <a >
                      <span aria-hidden="true" />
                      Comentarios
                    </a>
                  </h3>
                </div>
              </div>

              {/*lista de comentarios*/}
              <div className="m-2 flex flex-col justify-center border-2 rounded-md">

                <div className="flex justify-center">
                  <h3 className="mt-0.5 font-semibold text-sm text-gray-500">"Chalet muy lindo"</h3>
                  {/*<h3 className="mt-0.5 text-sm text-gray-500">  chalet muy lindo</h3>*/}
                </div>

                <div className="mt-2 flex justify-center">
                  <button className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300">
                    <img
                      className="h-7 w-7"
                      src={edit}
                      alt="Logo de editar"
                    />
                  </button>
                  <button className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300">
                    <img
                      className="h-8 w-8"
                      src={cancel}
                      alt="Logo de cancelar"
                    />
                  </button>

                </div>
              </div>

              {/*boton de agregar comentario*/}
              <form data-theme="light" className="m-2">
                <label
                  htmlFor="typeQuincho"
                  className="mt-4 ml-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  Nuevo Comentario
                </label>
                <div className="formQuincho">
                  <textarea name="message"

                  />

                </div>
                <div className="mt-4 flex justify-center">
                  <button type="submit"
                    className="btn bg-[#35C5DF] hover:bg-black text-white text-xs font-semibold px-3.5 py-1 rounded-md transition duration-300 mt-1">
                    Agregar Comentario
                  </button>
                </div>
              </form>


            </div>

          </div>


        </div>
      ))}

    </div>
  </>
);
};
