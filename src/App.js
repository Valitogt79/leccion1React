import React from 'react';
import './css/styles.css';
import Usuarios from './components/Usuarios';
import Footer from './components/Footer';
import Boton from './components/Boton';
import Boton2 from './components/Boton2';
import FormularioSesion from './components/FormularioSesion';

const App = () => {
  // Constantes y funciones de JS
  const setSesion = true;

  return (
    //Render o lo que se muestra en pantalla.
    <>
      <FormularioSesion setSesion={setSesion} />

      {setSesion ? (
        <>
          <Usuarios />
          <Footer />
        </>
      ) : (
        <>
          <h1 className='titulo'>Debes iniciar Sesión</h1>
          <Boton />
          <Boton2 />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
