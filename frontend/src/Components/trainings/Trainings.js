import React from 'react';
import medicina from '../trainings/img/pa.svg'
import extintor from '../trainings/img/extintor-de-incendios.svg';
import altura from '../trainings/img/altura.svg'
import cuerdas from '../trainings/img/cuerdas.svg'
import rescate from '../trainings/img/rescate.svg'
import llama from '../trainings/img/llama.svg'
import Fade from 'react-reveal/Fade';

const Trainings = () => (
  <section class='text-gray-500 bg-gray-900 body-font'>
     
    <div class='container px-5 py-24 mx-auto'>
    
      <div class='flex flex-col text-center w-full mb-20'>
        <h1 class='title-font text-5xl mb-4 text-white font-bold'>
          Capacitaciones con certificado DC-3
        </h1>
        <p class='lg:w-2/3 mx-auto text-2xl leading-relaxed text-base'>
          Al vernos envueltos en el medio de la seguridad laboral nos vimos en
          la necesidad de expandirnos al área de capacitación en temas de
          protección civil y prevención de accidentes
        </p>
      </div>
      
      <div class='flex flex-wrap -m-2'>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div class='h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600'>
            <div class='flex-grow text-center'>
            <div class="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center ">
            <img src={rescate} alt="React Logo" class="w-16 h-16  flex-shrink-0  mr-4" />
            </div>
              <h1 class='text-white title-font text-3xl'>Rescate Vertical</h1>
            </div>
          </div>
        </div>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div class='h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600'>
            <div class='flex-grow text-center'>
            <div class="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center ">
            <img src={altura} alt="React Logo" class="w-16 h-16  flex-shrink-0  mr-4" />
            </div>
              <h2 class='text-white title-font text-3xl'>Trabajos en altura</h2>
            </div>
          </div>
        </div>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div class='h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600'>
            <div class='flex-grow text-center'>
            <div class="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center ">
            <img src={cuerdas} alt="React Logo" class="w-16 h-16  flex-shrink-0  mr-4" />
            </div>
              <h2 class='text-white title-font text-3xl'>Acceso por cuerdas</h2>
            </div>
          </div>
        </div>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div class='h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600'>
            <div class='flex-grow text-center'>
            <div class="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center ">
            <img src={medicina} alt="React Logo" class="w-16 h-16  flex-shrink-0  mr-4" />
            </div>
              <h2 class='text-white title-font text-3xl'>Primeros auxilios</h2>
            </div>
          </div>
        </div>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div class='h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600'>
            <div class='flex-grow text-center'>
            <div class="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center ">
            <img src={llama} alt="React Logo" class="w-16 h-16  flex-shrink-0  mr-4" />
            </div>
              <h2 class='text-white title-font text-3xl'>Combate vs incendios</h2>
            </div>
          </div>
        </div>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div class='h-full flex items-center border-gray-800 border p-4 rounded-lg bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600'>
            <div class='flex-grow text-center'>
            <div class="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center ">
            <img src={extintor} alt="React Logo" class="w-16 h-16  flex-shrink-0  mr-4" />
            </div>
              <h2 class='text-white title-font text-3xl'>Manejo y uso de extintores</h2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
      
  </section>
);

export default Trainings;
