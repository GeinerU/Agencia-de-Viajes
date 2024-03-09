// Importa las bibliotecas necesarias para las pruebas
import React from 'react';
import { render } from '@testing-library/react';
import SoporteViajero from './SoporteViajero';

// Prueba básica para verificar que la sección de soporte al viajero se renderiza correctamente
test('Renderiza la sección de soporte al viajero correctamente', () => {
    render(<SoporteViajero />);
}); 
