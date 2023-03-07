import React, { useState } from 'react';

export const Form = ({onSubmit, titulo}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handlerChangeApellido = (e) => {
    setApellido(e.target.value);
  }

  const handlerChangeNombre = (e) => {
    setNombre(e.target.value); 
  }
  
  const handlerSubmit = (e) => {
    // Evita que se recargue la web
    e.preventDefault();

    const data = {
      nombre,
      apellido
    }
    
    onSubmit(data)
  }

  return (
    <form onSubmit={handlerSubmit}>
      <h1>{titulo}</h1>
      <input
        placeholder="Ingresar Apellido"
        id="apellido"
        type="text"
        name="apellido"
        value={apellido}
        onChange={handlerChangeApellido}
      />
      <input
        placeholder="Ingresar Nombre"
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={handlerChangeNombre}
      />
      <input type="submit" />





      {/* <Input /> */}
     {/* {mostrarError} */}
    </form>
  )
}