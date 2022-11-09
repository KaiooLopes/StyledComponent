import { createContext, useState } from "react";

export const SelectedImgContext = createContext();

export const SelectedImgProvider = ({ children }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <SelectedImgContext.Provider value={{ selectedImg, setSelectedImg }}>
      {children}
    </SelectedImgContext.Provider>
  );
};
