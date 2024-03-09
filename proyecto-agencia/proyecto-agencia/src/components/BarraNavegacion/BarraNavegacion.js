import React from 'react';
import './BarraNavegacion.css';

function BarraNavegacion() {
    return (
        <nav>
            <ul>
                <li><a href="#quienesSomos">1. Quienes Somos</a></li>
                <li><a href="#perfil">2. Creación de Perfil</a></li>
                <li><a href="#destinos">3. Destinos y Precios disponibles</a></li>
                <li><a href="#hoteles">4. Hoteles Ofrecidos</a></li>
                <li><a href="#planes">5. Planes Ofrecidos</a></li>
                <li><a href="#soporte">6. Soporte al Viajero</a></li>
                <li><a href="#quejasReclamos">7. PQR</a></li>
            </ul>
        </nav>
    );
}

export default BarraNavegacion;

