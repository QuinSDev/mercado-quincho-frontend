import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarReservationForm } from "../components/CalendarRecationForm";
import { QuinchoContext } from "../provider/QuinchoProviderDetails";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Comentaries } from "../components/Comentaries";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const QuinchoDetails = ({ userRole, openRegisterModal, isLoggedIn, handleLogout, userPhoto, updateAuthStatus }) => {
  const { selectedQuincho } = useContext(QuinchoContext);
  const [quincho, setQuincho] = useState([]);
  const [comentaries, setComentaries] = useState([]);

  useEffect(() => {
    setQuincho(selectedQuincho);
  }, []);

  useEffect(() => {
    const fetchDataComentarie = async () => {
      try {
        const token = localStorage.getItem("token");
        const responseComentaries = await fetch(
          `http://localhost:8080/customer-opinions/quincho/${selectedQuincho.id}`,
          {
            
          }
        );
  
        if (responseComentaries.ok) {
          const comentariesData = await responseComentaries.json(); // Esperar a que se resuelva la promesa
          setComentaries(comentariesData);
        } else {
          throw new Error("Respuesta no exitosa");
        }
      } catch (error) {
        console.log(error)
      }
    };
  
    fetchDataComentarie();
  }, [selectedQuincho.id]);

  useEffect(() => {
    setComentaries(comentaries) // Agrega este log para verificar los comentarios después de actualizarlos
  }, [comentaries]);
  
  
  return (
    <>
      <NavBar userRole={userRole} openRegisterModal={openRegisterModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} userPhoto={userPhoto} updateAuthStatus={updateAuthStatus}/>
      <div className="mt-7 mr-16 ml-16 w-[100vh] rounded-md overflow-hidden">
        <figure className="rounded-md w-full h-[50vh] flex items-center justify-center">
          <Carousel>
            {selectedQuincho.photoUrls.map((photoUrl, index) => (
              <div key={index} className="flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 0.9 }}
                  src={photoUrl}
                  alt={`${selectedQuincho.nameQuincho} ${index}`}
                  className="w-full"
                />
              </div>
            ))}
          </Carousel>
        </figure>
      </div>
      <div className="py-8 px-4 sm:px-8 md:h-[78vh] sm:h-[100vh] bg-white flex flex-col md:flex-row items-center">
        <div className="card-body text-center md:text-left w-full md:w-1/2 mt-4 md:mt-0">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-black mb-2"
          >
            {selectedQuincho.nameQuincho}
          </motion.h2>
          <p className="italic text-black font-bold text-sm mb-2">
            Categoría: {selectedQuincho.typeQuincho}
          </p>
          <p className="text-black text-lg md:text-xl mb-4">
            {selectedQuincho.description}
          </p>
          <p className="font-bold text-black text-xl mb-4">
            Precio: ${selectedQuincho.price}
          </p>
        </div>
        <div className="card-actions flex flex-col md:flex-row justify-center md:justify-start">
          <CalendarReservationForm quincho={quincho} isLoggedIn={isLoggedIn} />
        </div>
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
