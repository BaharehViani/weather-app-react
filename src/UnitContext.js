import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider({ children }) {
  const [unit, setUnit] = useState("celsius");

  const toggleUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}