import React, { useContext, useState } from "react";
import chalet from "../assets/images/chalet.png";
import quinta from "../assets/images/quinta.png";
import cabaña from "../assets/images/cabaña.png";
import location from "../assets/images/location.png";
import money from "../assets/images/money.png";
import { Link } from "react-router-dom";
import { QuinchoContext } from "./QuinchoProvider";

export const CardUserQuincho = ({ quinchos }) => {

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
      <div className="mt-10 mx-auto max-w-screen-lg mb-10">
        <div
          data-theme="light"
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6"
        >
          {quinchos.map((quincho) => (
            <div key={quincho.id} className="relative rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
            style={{width:"280px"}}
            >

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

                {/*Titulo*/}
                <div className="flex justify-between">
                    <div>
                        <span>
                            {showIcon(quincho.typeQuincho)}
                        </span>
                    </div>

                    <div>
                        <h3 className="mt-0.5 text-l font-bold text-gray-900">
                            <a >
                                <span aria-hidden="true"/>
                                {quincho.nameQuincho}
                            </a>
                        </h3>
                    </div>
                </div>


                {/*Direccion*/}
                <div className="mt-1 flex justify-between">
                    <div>
                        <span>
                            <img
                                className="h-7 w-7"
                                src={location}
                                alt="Logo de direccion"
                            />
                        </span>

                    </div>

                    <div>
                        <h3 className="mt-0.5 text-sm text-gray-500">
                            <a >
                                <span aria-hidden="true"/>
                                {quincho.location}
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
                                src={money}
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
                                    
                <div className="mt-4 flex justify-center">
                  <Link to="/editQuincho" onClick={() => handleSelectQuincho(quincho)}>
                    <button className="btn bg-[#35C5DF] hover:bg-black text-white text-xs font-semibold px-3.5 py-1 rounded-md transition duration-300 mt-1">
                      Actualizar Quincho
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
