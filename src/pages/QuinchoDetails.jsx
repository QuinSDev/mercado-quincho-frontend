import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarReservationForm } from "../components/CalendarRecationForm";
import { QuinchoContext } from "../provider/QuinchoProviderDetails";

export const QuinchoDetails = () => {

    const { selectedQuincho } = useContext(QuinchoContext)
    const [quincho, setQuincho] = useState([]);

  useEffect(() => {
    setQuincho(selectedQuincho)
  }, [])
    
  
  return (
    <div className="py-8 px-4 sm:px-8 md:h-[78vh] sm:h-[100vh] bg-white flex flex-col md:flex-row items-center">
      <figure className="w-full md:w-1/3">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={selectedQuincho.photoUrl}
          alt={selectedQuincho.nameQuincho}
          className="w-full"
        />
      </figure>
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
        <div className="card-actions flex flex-col md:flex-row justify-center md:justify-start">
          <CalendarReservationForm quincho={quincho}/>
        </div>
      </div>
    </div>
  );
};
