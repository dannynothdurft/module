/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */

// React
import React, { useRef } from "react";

function Item({ bg, classes, children }) {
  const slidesRef = useRef(null);

  // Stil, der nur angewendet wird, wenn bg vorhanden ist
  const itemStyle = bg
    ? {
        backgroundImage: `url(${bg})`, // Setze das Hintergrundbild
        backgroundSize: "cover", // Bild soll den gesamten Bereich abdecken
        backgroundPosition: "center", // Bild zentriert anzeigen
        width: "100%", // Breite des Items
        height: "100%", // Höhe des Items
        display: "flex", // Flexbox für Kinder-Inhalt
        alignItems: "center", // Zentriert den Inhalt vertikal
        justifyContent: "center", // Zentriert den Inhalt horizontal
      }
    : undefined; // Wenn bg nicht vorhanden, kein Stil

  return (
    <div
      className={`slider${classes ? ` ${classes}` : ""}`}
      ref={slidesRef}
      style={itemStyle}
    >
      {children}
    </div>
  );
}

export default Item;
