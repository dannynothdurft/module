/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 * @requires     sass
 */

// Module Styles
import "../style/contentSlider.scss";

// Store / Context
import { AppProvider } from "../context/contentSliderContext";

// React
import React, { useRef } from "react";

// Costum
import Navigation from "./Navigation";

function SliderContainer({ children }) {
  const sliderContainerRef = useRef(null);

  return (
    <AppProvider>
      <div className="slider-outer-wrapper" ref={sliderContainerRef}>
        {children}
        <Navigation />
      </div>
    </AppProvider>
  );
}

export default SliderContainer;
