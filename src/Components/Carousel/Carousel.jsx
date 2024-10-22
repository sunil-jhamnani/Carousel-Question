import React, { useState, createContext } from "react";
import "./carousel.css";


const Carousel = ({ children }) => {

  return (
      <div className="carousel">{children}</div>
    </CarouselContext.Provider>
  );
};

export { CarouselContext };
export default Carousel;
