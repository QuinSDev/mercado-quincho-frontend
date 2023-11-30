import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarReservationForm } from "../components/CalendarRecationForm";
import { QuinchoContext } from "../provider/QuinchoProviderDetails";
import { Carousel as Carousel2, Thumbs } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Comentaries } from "../components/Comentaries";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const QuinchoDetails = ({
  userRole,
  openRegisterModal,
  isLoggedIn,
  handleLogout,
  userPhoto,
  updateAuthStatus,
}) => {
  const { selectedQuincho } = useContext(QuinchoContext);
  const [quincho, setQuincho] = useState([]);
  const [comentaries, setComentaries] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setQuincho(selectedQuincho);
  }, []);

  useEffect(() => {
    const fetchDataComentarie = async () => {
      try {
        const token = localStorage.getItem("token");
        const responseComentaries = await fetch(
          `https://mucho-cattle-production.up.railway.app/customer-opinions/quincho/${selectedQuincho.id}`,
          {}
        );

        if (responseComentaries.ok) {
          const comentariesData = await responseComentaries.json(); // Esperar a que se resuelva la promesa
          setComentaries(comentariesData);
        } else {
          throw new Error("Respuesta no exitosa");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataComentarie();
  }, [selectedQuincho.id]);

  useEffect(() => {
    setComentaries(comentaries); // Agrega este log para verificar los comentarios después de actualizarlos
  }, [comentaries]);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index); // Actualizar el estado con el índice de la imagen seleccionada
  };

  return (
    <>
      <NavBar
        userRole={userRole}
        openRegisterModal={openRegisterModal}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        userPhoto={userPhoto}
        updateAuthStatus={updateAuthStatus}
      />
      <div className="p-8 flex flex-col  md:flex-row items-center bg-white">
        {/* Carousel Section */}
        <figure className="rounded-md m-8 mt-12 md:w-[70vh]">
          <Carousel2
            showThumbs={false}
            dynamicHeight={false}
            emulateTouch={true}
            className="w-full rounded-lg"
            selectedItem={selectedImageIndex}
            onChange={(index) => setSelectedImageIndex(index)} // Agregar el cambio de índice al cambiar el carrusel
          >
            {selectedQuincho.photoUrls.map((photoUrl, index) => (
              <div key={index} className="flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 0.9 }}
                  src={photoUrl}
                  alt={`${selectedQuincho.nameQuincho} ${index}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </Carousel2>

          {/* Miniaturas (Thumbs) */}
          {selectedQuincho.photoUrls.length > 1 && (
            <Thumbs
              dynamicHeight={false}
              emulateTouch={true}
              className="w-full rounded-lg"
              selectedItem={selectedImageIndex} // Establecer la miniatura seleccionada
              onClickItem={(index) => handleThumbnailClick(index)} // Manejar clics en miniaturas
            >
              {selectedQuincho.photoUrls.map((photoUrl, index) => (
                <div key={index}>
                  <img
                    src={photoUrl}
                    alt={`Thumbnail ${index}`}
                    style={{
                      width: "50px",
                      height: "auto",
                      marginRight: "2px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      border:
                        index === selectedImageIndex
                          ? "2px solid #35C5DF"
                          : "none", // Resaltar la miniatura activa
                    }}
                  />
                </div>
              ))}
            </Thumbs>
          )}
        </figure>
        <div className="flex sm:px-9  ml-4 md:ml-20 items-center md:w-[120vh]  rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex-1">
            <div className="text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-b-2 border-[#35C5DF] text-3xl md:text-4xl font-bold text-black mb-6"
              >
                {selectedQuincho.nameQuincho}
              </motion.h2>
              <p className="italic text-[#35C5DF] font-bold text-sm mb-2">
                Categoría: {selectedQuincho.typeQuincho}
              </p>
              <p className="italic text-black text-lg md:text-xl mb-4">
                {selectedQuincho.location}
              </p>

              <p className="text-black text-lg font-medium md:text-xl mb-4">
                {selectedQuincho.description}
              </p>
              <p className="text-black text-lg md:text-xl mb-4">
                <span className="font-bold">Cantidad:</span>{" "}
                {selectedQuincho.numGuest} huéspedes
              </p>
              <p className="text-black text-lg md:text-xl mb-4">
                <span className="font-bold">Habitaciones:</span>{" "}
                {selectedQuincho.numBed}
              </p>
              <p className="text-black text-lg md:text-xl mb-4">
                <span className="font-bold">Baños:</span>{" "}
                {selectedQuincho.numBathroom}
              </p>
              <div className="divider">Monto por noche</div>
              <p className="font-bold text-black text-center text-xl mb-4">
                Precio:{" "}
                <span className="text-[#35C5DF]">${selectedQuincho.price}</span>
              </p>
            </div>
          </div>

          {/* Formulario de Reserva */}
          <div className="m-6">
            <CalendarReservationForm quincho={quincho} />
          </div>
        </div>
      </div>
      <div className="divider-info text-center text-white font-semibold text-lg">
        Opiniones de los usuarios
      </div>
      {comentaries && (
        <div className="py-8 px-4 sm:px-8 md:h-[78vh] sm:h-[100vh] bg-white flex flex-col md:flex-row items-center">
          <Comentaries comentaries={comentaries} />
        </div>
      )}

      <Footer />
    </>
  );
};
