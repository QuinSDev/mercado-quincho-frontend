import React, { createContext, useState } from 'react';

export const QuinchoContext = createContext();

export const QuinchoProvider = ({ children }) => {
  const [selectedQuincho, setSelectedQuincho] = useState(null);
  const [selectedQuinchoR, setSelectedQuinchoR] = useState(null)

  const updateSelectedQuincho = (quincho) => {
    setSelectedQuincho(quincho);
  };

  const editReservation = (reservation) => {
    setSelectedQuinchoR(reservation)
  }

  return (
    <QuinchoContext.Provider value={{ selectedQuincho, updateSelectedQuincho, selectedQuinchoR, editReservation }}>
      {children}
    </QuinchoContext.Provider>
  );
};
