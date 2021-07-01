import React, { useState } from 'react'
import cliente1 from '../clients/img/cliente1.png'
import cliente2 from '../clients/img/cliente2.png'
import cliente3 from '../clients/img/cliente3.png'
import cliente4 from '../clients/img/cliente4.png'
import cliente5 from '../clients/img/cliente5.png'
import cliente6 from '../clients/img/cliente6.png'
import cliente7 from '../clients/img/cliente7.png'
import cliente8 from '../clients/img/cliente8.png'

function Clients () {
    const [state, setstate] = useState('state')

    return (

<section class="text-gray-500 body-font bg-gray-900">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h2 class='title-font font-medium text-2xl text-white mt-10'>Nuestros Clientes</h2>
        <h1 class="sm:text-3xl text-white title-font text-5xl mb-4 text-white font-bold">Las mejores empresas han confiado en nosotros</h1>
       
        <div class="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente1} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente2} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente3} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente4} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente5} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente6} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente7} alt="content"/>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={cliente8} alt="content"/>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Clients