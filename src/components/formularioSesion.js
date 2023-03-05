import React, { useState } from 'react';

const formularioSesion = ({ setSesion }) => {
  //Recibimos la funcion SetSesison
  const [usuario, setUsuario] = useState(''); //inicializamos el estado
  const [password, setPassword] = useState(''); //inicializamos el estado

  const onChange = (e) => {
    if (e.target.name === 'usuario') {
      setUsuario(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario === 'oswaldo' && password === '123') {
      alert('Sesion Iniciada');
      setSesion(true);
    } else if (usuario === '' || password === '') {
      alert('Debes llenar todos los campos');
    } else {
      alert('Usuario o contraseña incorrecta');
      setSesion(false);
      setPassword('');
      setUsuario('');
    }
  };

  return (
    <>
      <form action='' onSubmit={onSubmit}>
        <div>
          <label htmlFor='usuario'>Usuario</label>
          <input
            type='text'
            id='usuario'
            name='usuario'
            placeholder='Usuario'
            value={usuario}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button type='submit'></button>
      </form>
    </>
  );
};

export default formularioSesion;
