import React from 'react';
import logoUsuario from '../components/logoUsuario.jpg';

function TarjetaPresentacion() {
    return (
        <div className='tarjeta componenteGenerico'>
            <img src={logoUsuario} alt='ImagenUsuario'/>
            <h2>Lautaro Iannotti</h2>
            <p>Ingeniero en Informática</p>
        </div>
    );
}

export default TarjetaPresentacion;