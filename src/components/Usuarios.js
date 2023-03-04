import React from 'react';

const Usuarios = () => {
  //  variables y funciones
  const saludo = 'Bienvenido - INTECAP';
  const nombre = 'Oswaldo Alonzo';
  const estudiantes = [
    'Juan',
    'Jose',
    'Maria',
    'Jose',
    'Luis',
    'Ana',
    'Yoni',
    'Julissa',
  ]; // Array

  return (
    <>
      <h1 className='titulo'>{saludo}</h1>
      <p className='titulo'>{nombre}</p>

      <h2>Listados de Amigos</h2>

      <ol>
        {estudiantes.map((estudiante, index) => (
          <li key={index}>{estudiante}</li>
        ))}
      </ol>
    </>
  );
};

export default Usuarios;
