import React, { createContext, useState } from 'react';

export const QuinchoContext = createContext();

export const QuinchoProvider = ({ children }) => {
  const [selectedQuincho, setSelectedQuincho] = useState(null);

  const updateSelectedQuincho = (quincho) => {
    setSelectedQuincho(quincho);
  };

  return (
    <QuinchoContext.Provider value={{ selectedQuincho, updateSelectedQuincho }}>
      {children}
    </QuinchoContext.Provider>
  );
};
