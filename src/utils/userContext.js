import React, { createContext, useContext, useState } from "react";

const FullNameContext = createContext();

export const useFullNameContext = () => useContext(FullNameContext);

export const FullNameProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");

  return (
    <FullNameContext.Provider value={{ fullName, setFullName }}>
      {children}
    </FullNameContext.Provider>
  );
};
