/* useState es una funcion que nos permite crear variables estado o un componente funcional. */

//refce: crea el componente

import React, { useState } from 'react';

const Boton = () => {
  //Variables y funciones.
  const [contador, setContador] = useState(0);

  return (
    <>
      <p
        className='titulo'
        style={{ backgroundColor: 'orange', color: 'blue' }}
      >
        Ejemplo de contador haz Click {contador}
      </p>
      <button className='btn' onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </>
  );
};

export default Boton;
