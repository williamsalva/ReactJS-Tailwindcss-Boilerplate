import React, { useState } from 'react';
import { firebase } from '../../firebase';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = () => {


  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });



 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };


  const changeHandler = (event) => {
    console.log(state);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {


    e.preventDefault();
    if(!state.email || !state.name || !state.phone  || !state.message  ){
      setOpenError(true);
    }else{
    try {
      const db = firebase.firestore();
      const nuevoMensaje = {
        email: state.email,
        name: state.name,
        phone: state.phone,
        message: state.message,
        fecha: Date.now(),
      };

      console.log('submitHandler -> nuevoMensaje', nuevoMensaje);
      const data = await db.collection('Contacto').add(nuevoMensaje);
      console.log('submitHandler -> data', data);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
    setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }
  };

  return (

    <>
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mensaje enviado 
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error">
         Todos los campos son obligatorios
        </Alert>
      </Snackbar>



    <section class='text-gray-500 bg-gray-900 body-font'>
      <div class='container px-5 py-24 mx-auto flex flex-wrap items-center'>
        <div class='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
          <h1 class='title-font text-5xl mb-4 text-white font-bold'>
            Contáctanos
          </h1>
          <h2 class='title-font font-medium text-2xl text-white mt-10'>
            Teléfonos de Atención al Cliente
          </h2>
          <p class='leading-relaxed mt-2'>Cancun: </p>
          <p class='leading-relaxed'>998-303-8102</p>
          <p class='leading-relaxed mt-2'>Guadalajara:</p>
          <p class='leading-relaxed'>332-641-2785</p>
          <p class='leading-relaxed mt-2'>Whatsapp:</p>
          <p class='leading-relaxed'>331-985-2695</p>
        </div>
        <div class='lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
          <h2 class='text-white text-lg font-medium title-font mb-5'>
            Envíenos un mensaje
          </h2>
          <input
            class='bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4'
            placeholder='Nombre'
            type='text'
            value={state.name}
            name='name'
            onChange={changeHandler}
          />
          <input
            class='bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4'
            placeholder='Teléfono'
            type='text'
            value={state.phone}
            name='phone'
            onChange={changeHandler}
          />
          <input
            class='bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4'
            placeholder='Email'
            type='email'
            value={state.email}
            name='email'
            onChange={changeHandler}
          />
          <textarea
            class='autoexpand bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mb-4'
            placeholder='Mensaje'
            type='text'
            value={state.message}
            name='message'
            onChange={changeHandler}
          />
          <button
            class='text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg'
            onClick={submitHandler}>
            Enviar
          </button>
          <p class='text-xs text-gray-600 mt-3'>
            Le contestaremos en un lapso no mayor a 24 hr.
          </p>
         
        </div>
      </div>
    </section>

    </>
  );
};

export default Contact;
