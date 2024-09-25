/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */

// React
import React, { createContext, useContext, useState } from "react";

// Erstelle den Context
const AppContext = createContext();

// Erstelle einen Provider
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    slides: 0,
    activeIndex: 0,
    isAnimating: false,
    sliderSize: 100,
  });

  const updateValue = (key, newValue) => {
    setState((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  // Destructure die Werte hier
  const { slides, activeIndex, isAnimating, sliderSize } = state;

  return (
    <AppContext.Provider
      value={{ slides, activeIndex, isAnimating, sliderSize, updateValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Erstelle einen benutzerdefinierten Hook
export const useAppContext = () => {
  return useContext(AppContext);
};
