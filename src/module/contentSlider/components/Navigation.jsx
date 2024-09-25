/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */

// Store / Context
import { useAppContext } from "../context/contentSliderContext";

// React
import React from "react";

function Navigation() {
  const { slides, activeIndex, sliderSize, updateValue } = useAppContext();
  const sliderElement = document.querySelector(".slider-inner-wrapper");

  const bulletClick = (index) => {
    if (index < 0) {
      updateValue("activeIndex", 0);
    } else if (index > slides - 1) {
      updateValue("activeIndex", slides - 1);
    } else {
      updateValue("activeIndex", index);
      const percentage = -(sliderSize / slides) * index;
      updateValue("isAnimating", true);
      sliderElement.style.transform = `translateX(${percentage}%)`;
    }
  };

  return (
    <div className="navigation">
      {Array.from({ length: slides }, (_, index) => (
        <button
          className={activeIndex === index ? "bullet-active" : ""}
          key={index}
          onClick={() => bulletClick(index)}
        ></button>
      ))}
    </div>
  );
}

export default Navigation;
