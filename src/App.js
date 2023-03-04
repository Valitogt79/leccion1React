import React from 'react';
import './css/styles.css';

const App = () => {
  // Constantes y funciones de JS

  const nombre = 'Oswaldo Alonzo';
  const saludo = 'Curso de React - INTECAP';
  return (
    //Render o lo que se muestra en pantalla.
    <div>
      <h1 className='titulo'>
        {saludo} 
      </h1>
      <p className='titulo'>{nombre}</p>
    </div>
  );
};

export default App;
