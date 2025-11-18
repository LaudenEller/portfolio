import React, { createContext, useState, useContext } from 'react';

const NavShrinkContext = createContext();

export const NavShrinkProvider = ({ children }) => {
  // const [isNavShrinked, setIsNavShrinked] = useState(false);

  // return (
  //   <NavShrinkContext.Provider value={{ isNavShrinked, setIsNavShrinked }}>
  
  // Change from boolean to numeric shrink factor (0-1)
  const [shrinkFactor, setShrinkFactor] = useState(0);

  return (
    <NavShrinkContext.Provider value={{ shrinkFactor, setShrinkFactor }}>    
  {children}
    </NavShrinkContext.Provider>
  );
};

export const useNavShrink = () => useContext(NavShrinkContext);