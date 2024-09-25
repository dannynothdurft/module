/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 * @requires     hammerjs
 */

// Store / Context
import { useAppContext } from "../context/contentSliderContext";

// React
import React, { useRef, useEffect } from "react";

// NPM Module
import Hammer from "hammerjs";

function Slider({ children }) {
  const { isAnimating, slides, activeIndex, sliderSize, updateValue } =
    useAppContext();

  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (index < 0) {
      updateValue("activeIndex", 0);
    } else if (index > slides - 1) {
      updateValue("activeIndex", slides - 1);
    } else {
      updateValue("activeIndex", index);
      const percentage = -(sliderSize / slides) * index;
      animateSlider(percentage);
    }
  };

  const animateSlider = (percentage) => {
    console.log(percentage);
    updateValue("isAnimating", true);
    sliderRef.current.style.transform = `translateX(${percentage}%)`;
  };

  useEffect(() => {
    if (slides === 0) {
      const SLIDES = sliderRef.current.children;
      updateValue("slides", SLIDES.length);
      sliderRef.current.style.width = `${SLIDES.length * 100}%`;
    }
  }, [slides, updateValue]);

  useEffect(() => {
    const hammer = new Hammer(sliderRef.current);
    hammer.on("swipeleft", () => {
      let newActiveIndex = activeIndex + 1;
      goToSlide(newActiveIndex);
    });
    hammer.on("swiperight", () => {
      let newActiveIndex = activeIndex - 1;
      goToSlide(newActiveIndex);
    });

    return () => {
      hammer.destroy();
    };

    // ESLint-Warnung ignorieren
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        updateValue("isAnimating", false);
      }, 400);

      return () => clearTimeout(timer);
    }

    // ESLint-Warnung ignorieren
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating]);

  return (
    <div
      className={`slider-inner-wrapper${isAnimating ? " is-animating" : ""}`}
      ref={sliderRef}
    >
      {children}
    </div>
  );
}

export default Slider;
