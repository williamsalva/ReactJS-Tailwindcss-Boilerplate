import React from 'react';

import './style/hero.css';
import image1 from '../Hero/img/Encabezado.jpg';
import logo from '../Hero/img/logo.png';
import Fade from 'react-reveal/Fade';


const Hero = () => (
  <section class='text-gray-500 bg-gray-900 body-font'>
    <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
    
      <div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <img class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center  rounded" alt="hero" src={logo}/>
        <h1 class='title-font text-5xl mb-4  text-white font-bold inline-block '>
          SVI          
        </h1>
        <h1 class='title-font text-5xl mb-4  text-white font-bold inline-block ' > Servicios Verticales Integrales</h1>

        <p class='mb-8 mx-auto text-2xl leading-relaxed text-base'>
          Somos especiales en servicios verticales en zonas de díficil acceso, capacitamos y ofrecemos soluciones a tus  necesidades.
        </p>
        
      </div>
      
      <div class='lg:max-w-2xl lg:w-full md:w-1/2 w-5/6'>
        <img
          class='object-cover object-center rounded-lg'
          alt='hero'
          src={image1}
        />
      </div>
     
    </div>
  </section>
);

export default Hero;
