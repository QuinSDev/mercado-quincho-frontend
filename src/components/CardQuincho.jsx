import React, { useContext } from "react";
import heart from "../assets/images/heart.png";
import chalet from "../assets/images/chalet.png";
import quinta from "../assets/images/quinta.png";
import cabaña from "../assets/images/cabaña.png";
import location from "../assets/images/location.png";
import money from "../assets/images/money.png";
import { Link } from "react-router-dom";
import { QuinchoContext } from "../provider/QuinchoProviderDetails";

export const CardQuincho = ({ quinchos }) => {
  const { detailsSelectedQuincho } = useContext(QuinchoContext);

  const handleDetailsSelectedQuincho = (quincho) => {
    detailsSelectedQuincho(quincho);
  };

  const showIcon = (option) => {
    if (option === "Chalet") {
      return <img className="h-8 w-8" src={chalet} alt="Logo de chalets" />;
    }
    if (option === "Quinta") {
      return <img className="h-8 w-8" src={quinta} alt="Logo de quintas" />;
    }
    if (option === "Cabaña") {
      return <img className="h-8 w-8" src={cabaña} alt="Logo de cabañas" />;
    }
  };

  return (
    <div data-theme="light" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mt-0 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
          Nuestros Quinchos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {quinchos.map((quincho) => (
            <div key={quincho.id} className="relative rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700">
              {/*imagen*/}
              <div className="mt-2 w-full overflow-hidden  bg-gray-200 lg:h-52 group-hover:opacity-75">
                {/*hover:opacity-75*/}
                <img
                  src={quincho.photoUrls[0]}
                  alt="imagen del quincho"
                  loading="lazy" // Agrega el atributo loading="lazy"
                  className="w-full object-cover object-center lg:h-full lg:w-full"
                />
                <span aria-hidden="true">
                  <img className="h-8 w-8" src={heart} alt="Logo de corazon" />
                </span>
              </div>

              <div className="m-5 mt-3">
                {/*Titulo*/}
                <div className="flex justify-between">
                  <div>
                    <span>{showIcon(quincho.typeQuincho)}</span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 text-lg font-bold text-gray-900">
                      <a>
                        <span aria-hidden="true" />
                        {quincho.nameQuincho}
                      </a>
                    </h3>
                  </div>
                </div>

                {/*Direccion*/}
                <div className="mt-2.5 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-8 w-8"
                        src={location}
                        alt="Logo de direccion"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 text-sm text-gray-500">
                      <a>
                        <span aria-hidden="true" />
                        {quincho.location}
                      </a>
                    </h3>
                  </div>
                </div>

                {/*Precio*/}
                <div className="mt-2.5 flex justify-between">
                  <div>
                    <span>
                      <img
                        className="h-8 w-8"
                        src={money}
                        alt="Logo de dolar"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                      <a>
                        <span aria-hidden="true" />$ {quincho.price} Por noche
                      </a>
                    </h3>
                  </div>
                </div>
                <Link
                  to="/quinchosDetails"
                  onClick={() => handleDetailsSelectedQuincho(quincho)}
                >
                  <button className="mt-8 btnQuincho cursor-pointer">
                    Ver detalles
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
