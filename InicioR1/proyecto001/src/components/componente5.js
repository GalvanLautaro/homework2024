import React, { useState } from 'react';

function Formulario() {
    const [nombre, setNombre] = useState('');

    const submit = () => {
        alert(`¡Hola, ${nombre}! Bienvenido.`);
    };

    return (
        <form onSubmit={submit}>
        <label>
            Nombre:
            <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
        </label>
        <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;