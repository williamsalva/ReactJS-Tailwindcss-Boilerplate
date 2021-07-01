import React, { useState, useEffect } from 'react';

import Footer from '../src/Components/footer/Footer';
import './App.scss';
import Contact from '../src/Components/Contact/Contact';
import Feacture from './Components/feacture/Feacture';
import Hero from './Components/Hero/Hero';
import Header from './Components/header/Header';
import Trainings from './Components/trainings/Trainings';
import Clients from './Components/clients/Clients';
import logo from './Components/Hero/img/logo.png';
import Fade from 'react-reveal/Fade';

import { useWindowWidth } from '@react-hook/window-size/throttled';
import whats from '../src/img/whatsapp.svg';
import telenlace from '../src/img/llamada.svg';
import { ScrollingProvider, SectionLink, Section } from 'react-scroll-section';

function App() {
  const [menuHiden, setMenuHiden] = useState(true);

  return (
    <ScrollingProvider>
      <a
        style={{ position: 'fixed', backgroundColor: '#44D46A' }}
        onClick={() => window.open('https://wa.link/b9pc0w', '_blank')}
        className=' Whats z-50 rounded-full lg:w-16 lg:h-16 sm:w-8  md:w-14 md:h-14 sm:h-8  w-8 h-8 flex items-center justify-cente'>
        <img
          src={whats}
          alt='React Logo'
          class='lg:w-16 lg:h-16 sm:w-8  md:w-14 md:h-14 sm:h-8  w-8 h-8 flex-shrink-0  mr-4 w-8 h-8'
        />
      </a>
      <a href="tel:3334887226"
      style={{ position: 'fixed', backgroundColor: '#ffc901' }}
      className=' telenlace z-50 rounded-full lg:w-16 lg:h-16 sm:w-8  md:w-14 md:h-14 sm:h-8  w-8 h-8 flex items-center justify-cente'>
        <img
          src={telenlace}
          alt='React Logo'
          class='lg:w-10 lg:h-10 sm:w-8 md:w-5 md:h-5 sm:h-8 w-5 h-5 flex-shrink-0  ml-1  lg:ml-3'
        /></a>

      <header class='text-gray-500 bg-gray-900 body-font'>
        <div
          className={menuHiden ? 'menu-collapsed ms:bg-gray-600' : 'menu-expanded  linehei h-screen w-screen fixed z-50'}
          onClick={() => setMenuHiden(!menuHiden)}>
          <div className='bar'>
            <nav
             className={menuHiden ? '' : 'h-screen w-screen	'}
             >
                <ul>
                <SectionLink section='Inicio'>
                    {({ onClick, isSelected }) => (
                      <li>
                        <a class="lg:text-5xl  text-3xl font-bold" onClick={onClick} selected={isSelected}>
                          Inicio
                        </a>
                      </li>
                    )}
                  </SectionLink>
                  <SectionLink section='Servicios'>
                    {({ onClick, isSelected }) => (
                      <li>
                        <a  class="lg:text-5xl text-3xl font-bold" onClick={onClick} selected={isSelected}>
                          Servicios
                        </a>
                      </li>
                    )}
                  </SectionLink>
                  <SectionLink section='Capacitaciones'>
                    {({ onClick, isSelected }) => (
                      <li>
                        <a class="lg:text-5xl  text-3xl font-bold" onClick={onClick} selected={isSelected}>
                          Capacitaciones
                        </a>
                      </li>
                    )}
                  </SectionLink>
                  <SectionLink section='Clientes'>
                    {({ onClick, isSelected }) => (
                      <li>
                        <a  class=" lg:text-5xl text-3xl font-bold" onClick={onClick} selected={isSelected}>
                          Clientes
                        </a>
                      </li>
                    )}
                  </SectionLink>
                  <SectionLink section='Contacto'>
                    {({ onClick, isSelected }) => (
                      <li>
                        <a class="lg:text-5xl text-3xl font-bold" onClick={onClick} selected={isSelected}>
                          Contacto
                        </a>
                      </li>
                    )}
                  </SectionLink>
                </ul>
           
            </nav>
          </div>
        </div>
      </header>
      <Section id='Inicio'>
      <Hero />
      </Section>
      <Section id='Servicios'>
        <Feacture />
      </Section>
      <Section id='Capacitaciones'>
        <Trainings />
      </Section>
      <Section id='Clientes'>
        <Clients />
      </Section>
      <Section id='Contacto'>
        <Contact />
      </Section>
      <Footer />
    </ScrollingProvider>
  );
}

export default App;
