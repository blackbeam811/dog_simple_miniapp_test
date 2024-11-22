import { createContext, useState } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }) {
  const [themeID, setThemeID] = useState(1);

  return (
    <RefContext.Provider
      value={{
        themeID,
        setThemeID,
      }}
    >
      {children}
    </RefContext.Provider>
  );
}
