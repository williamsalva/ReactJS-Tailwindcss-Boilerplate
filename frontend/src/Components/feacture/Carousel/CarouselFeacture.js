import React, { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselFeacture = ({ groupBy = 4, items }) => {
  return (
    <Carousel responsive={responsive}>
      {items.map((i) => {
        return (
          <div className='border-2 border-gray-800 rounded-lg overflow-hidden slide-right m-5 text-center'>
            <img
              src={i.src || i.image || i.img}
              
            />
            <h1 class='title-font text-3xl font-bold text-white mb-3 mt-8'>
              {i.titulo}
            </h1>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselFeacture;
