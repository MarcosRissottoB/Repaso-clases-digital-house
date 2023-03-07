import React, { useState } from 'react'
import './App.css';
import { Form } from './components/form';

function App() {
  const [informacion, setInformacion] = useState({});
  const [isMensajeDeError, setMensajeDeError] = useState(false);

  const onSubmit = (data) => {
    console.log("data", data)

    if (data.nombre.length > 2 
      && data.apellido.length > 2) {
        // Si cumple la validacion,
        // actualizo el estado y muestro la informacion.
        setInformacion(data)
    } else {
      setMensajeDeError(true)
    }
  };

  return (
    <div className="App">
      <p>Test desde Repaso app</p>
      <Form
        onSubmit={onSubmit}
        titulo="Formulario de Login"
      />
      {informacion && !isMensajeDeError &&
        <div>
          <span>Nombre: {informacion.nombre}</span>
          <br />
          <br />
          <span>Apellido: {informacion.apellido}</span>
        </div>
      }
      {isMensajeDeError && 
        <span>"Verifica tus datos, hubo un error!!!"</span>
      }
    </div>
  );
}

export default App;
