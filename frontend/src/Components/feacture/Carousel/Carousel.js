/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import * as swipe from 'swiped-events';
import './styles/carousel.css';
import Slide from 'react-reveal/Slide';

const Carousel = ({ items, groupBy, showDots, showButton, effect }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [carouselitems, setCarouselitems] = useState(null);
  const [width, setWidth] = useState(null);
  const [className] = useState(random(8));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const [direccionEfectoRight, setDireccionEfectoRight] = useState(true);
  const [direccionEfectoLeft, setDireccionEfectoLeft] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions, { passive: true });
    document
      .getElementById('rhc-carousel')
      .addEventListener('swiped-left', (e) => {
        console.log(e);
        plusSlides(-1);
      });

    document
      .getElementById('rhc-carousel')
      .addEventListener('swiped-right', (e) => {
        console.log(e);
        plusSlides(1);
      });

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
      document
        .getElementById('rhc-carousel')
        .removeEventListener('swiped-right');
      document
        .getElementById('rhc-carousel')
        .removeEventListener('swiped-left');
    };
  }, []);

  useEffect(() => {
    setSlideIndex(1);
  }, []);

  useEffect(() => {
    if (screenWidth > 992 && groupBy && groupBy > 1) {
      setCarouselitems(items.chunk(groupBy));
      setWidth(90 / groupBy);
    } else {
      setCarouselitems(items);
    }
  }, [groupBy, screenWidth]);

  useEffect(() => {
    if (slideIndex) {
      showSlides(slideIndex);
    }
  }, [slideIndex]);

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  };

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName(className);
    var dots = document.getElementsByClassName(className + 'dot');

    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    if (showDots) {
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      dots[slideIndex - 1].className += ' active';
    }

    slides[slideIndex - 1].style.display = 'block';
  };

  return (
    <>
      <div className='slideshowContainer' id='rhc-carousel'>
        {carouselitems &&
          carouselitems.map((item, i) => {
            return (
              <div
                key={i}
                className={`${className}`}
                style={{ display: 'none' }}>
                 <Slide right={direccionEfectoRight} left={direccionEfectoLeft}>
                {Array.isArray(item) ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    >
                    {item.map((i) => {
                      return (
                        <div
                        className="border-2 border-gray-800 rounded-lg overflow-hidden slide-right"
                        style={{ width: width + '%', height: '100%' }}
                        >
                        <img
                          src={i.src || i.image || i.img}
                          style={{ width:'100%', height: '100%' }}
                        />
                        <p>Titulo</p>
                        </div>
                      );
                    })}
                  </div>
                
                
                ) : (
                  <img
                    src={item.src || item.image || item.img}
                    alt={item.alt}
                    style={{ width: '100%' }}
                  />
                )}
                </Slide>
              </div>
            );
          })}
          
        <>
          {showButton && (
            <>
              <a className='prev' onClick={() => {
                plusSlides(-1)
                setDireccionEfectoLeft(true)
                setDireccionEfectoRight(false)
              }}>
                &#10094;
              </a>
              <a className='next' onClick={() => {
                plusSlides(1)
                setDireccionEfectoLeft(false)
                setDireccionEfectoRight(true)
              }}>
                &#10095;
              </a>
            </>
          )}
        </>
      </div>
      
      {showDots && (
        <div style={{ textAlign: 'center' }}>
          {items.map((item, i) => {
            return (
              <span
                key={i}
                className={className + 'dot'}
                onClick={() => currentSlide(i)}></span>
            );
          })}
        </div>
      )}
    </>
  );
};

function random(L) {
  var s = '';
  var randomchar = function () {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  };
  while (s.length < L) s += randomchar();
  return s;
}

Array.prototype.chunk = function (n) {
  if (!this.length) {
    return [];
  }
  return [this.slice(0, n)].concat(this.slice(n).chunk(n));
};

export default Carousel;
