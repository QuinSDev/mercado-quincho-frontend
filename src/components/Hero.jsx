import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {

  return (
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage:
          "url(https://images.trvl-media.com/lodging/67000000/66970000/66960500/66960467/3dc53381.jpg?impolicy=resizecrop&rw=1200&ra=fit)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-white text-5xl font-bold">
            ¡Bienvenidos a Mercado Quincho!
          </h1>
          <p className="mb-5 text-white">

            Encuentra y reserva quinchos para tus eventos al aire libre. Explora

            nuestras opciones y disfruta de un proceso sencillo. Estamos aquí
            para ayudarte a crear momentos inolvidables. ¡Comienza a explorar
            hoy mismo!
          </p>
          <Link to="/quinchos">
            <button className="btnQuincho">Ingresar</button>
          </Link>

        </div>
      </div>
    </div>
  );
};
