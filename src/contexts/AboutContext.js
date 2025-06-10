import React, { createContext, useContext, useState } from 'react';

const AboutContext = createContext();

export const AboutProvider = ({ children }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <AboutContext.Provider value={{ showAbout, setShowAbout }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAboutContext = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error("useAboutContext must be used within an AboutProvider");
  }
  return context;
};
