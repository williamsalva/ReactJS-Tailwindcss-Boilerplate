import React, { useState } from 'react';
import Carousel from './Carousel/Carousel';
import CarouselFeacture from './Carousel/CarouselFeacture';

import imagen1 from '../feacture/img/imagen1.jpg';
import imagen2 from '../feacture/img/imagen2.jpg';
import imagen3 from '../feacture/img/imagen3.jpg';
import imagen4 from '../feacture/img/imagen4.jpg';
import imagen5 from '../feacture/img/imagen5.jpg';
import imagen6 from '../feacture/img/imagen6.jpg';
import imagen7 from '../feacture/img/imagen7.jpg';
import imagen8 from '../feacture/img/imagen8.jpg';
import imagen9 from '../feacture/img/imagen9.jpg';
import imagen10 from '../feacture/img/imagen10.jpg';
import imagen11 from '../feacture/img/imagen11.jpg';
import imagen12 from '../feacture/img/imagen12.jpg';
import imagen13 from '../feacture/img/imagen13.jpg';
import imagen14 from '../feacture/img/imagen14.jpg';
import imagen15 from '../feacture/img/imagen15.jpg';
import imagen16 from '../feacture/img/imagen16.jpg';
import imagen17 from '../feacture/img/imagen17.jpg';

function Feacture() {
  const [state, setstate] = useState('state');
  const slider = [
    {
      image: imagen1,
      alt: 'Albañilería en altura',
      titulo: 'Albañilería en altura',
    },
    {
      image: imagen2,
      alt: 'Apoyo a la construcción',
      titulo: 'Apoyo a la construcción',
    },
    {
      image: imagen3,
      alt: 'Reparación de luminarias',
      titulo: 'Reparación de luminarias',
    },
    {
      image: imagen4,
      alt: 'Lavado de tenso lonas',
      titulo: 'Lavado de tenso lonas',
    },
    {
      image: imagen5,
      alt: 'Pintura de edificios',
      titulo: 'Pintura de edificios',
    },
    {
      image: imagen6,
      alt: 'Mantenimiento de cables industriales',
      titulo: 'Mantenimiento de cables industriales',
    },
    {
      image: imagen7,
      alt: 'Instalación de lonas espectaculares',
      titulo: 'Instalación de lonas espectaculares',
    },
    {
      image: imagen8,
      alt: 'Instalación de tirolesas y puentes',
      titulo: 'Instalación de tirolesas y puentes',
    },
    {
      image: imagen9,
      alt: 'limpieza de cristales',
      titulo: 'limpieza de cristales',
    },
    {
      image: imagen10,
      alt: 'Mantenimiento a muros de escalada',
      titulo: 'Mantenimiento a muros de escalada',
    },
    {
      image: imagen11,
      alt: 'Recubrimiento estructural',
      titulo: 'Recubrimiento estructural',
    },
    {
      image: imagen12,
      alt: 'Sellado de grietas',
      titulo: 'Sellado de grietas',
    },
    {
      image: imagen13,
      alt: 'Sellado de ventanas',
      titulo: 'Sellado de ventanas',
    },
    {
      image: imagen14,
      alt: 'Capacitación trabajo en alturas',
      titulo: 'Capacitación trabajo en alturas',
    },
    {
      image: imagen15,
      alt: 'Desbaste de concreto',
      titulo: 'Desbaste de concreto',
    },
    {
      image: imagen16,
      alt: 'Cursos primeros auxilios',
      titulo: 'Cursos primeros auxilios',
    },
    {
      image: imagen17,
      alt: 'Sanitizado',
      titulo: 'Sanitizado',
    },
  ];
  return (
    <section class='text-gray-500 bg-gray-900 body-font py-24' id='servicios'>
      <div class='flex flex-col text-center w-full mb-20 ' >
        <h1 class='title-font text-5xl mb-4 text-white font-bold'>
          Servicios de mantenimiento en alturas
        </h1>
      </div>

      <CarouselFeacture items={slider} groupBy={4} />
    </section>
  );
}

export default Feacture;
