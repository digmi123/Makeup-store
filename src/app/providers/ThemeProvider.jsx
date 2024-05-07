"use client";

import { createContext, useContext, useEffect, useState } from "react";

const contextTheme = createContext();

export default function ThemeProvider({ themeColors = {}, children }) {
  // const { data: session, status } = useSession();
  const [currentColors, setCurrentColor] = useState(themeColors);

  const colorElement = (data, element = document.documentElement) => {
    for (const [key, value] of Object.entries(data)) {
      element.style.setProperty(key, value);
    }
  };

  useEffect(() => {
    colorElement(currentColors);
  }, [currentColors]);

  return (
    <contextTheme.Provider value={{ colorElement, currentColors }}>
      {children}
    </contextTheme.Provider>
  );
}

export function useTheme() {
  return useContext(contextTheme);
}
