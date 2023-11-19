import React, { createContext, useState } from 'react';

export const QuinchoContext = createContext();

export const QuinchoProviderDetails = ({ children }) => {
  const [selectedQuincho, setSelectedQuincho] = useState(null);

  const detailsSelectedQuincho = (quincho) => {
    setSelectedQuincho(quincho);
  };
  
  return (
    <QuinchoContext.Provider value={{ selectedQuincho, detailsSelectedQuincho }}>
      {children}
    </QuinchoContext.Provider>
  );
};