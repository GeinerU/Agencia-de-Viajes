// Importa las bibliotecas necesarias para las pruebas
import React from 'react';
import { render } from '@testing-library/react';
import DestinosPrecios from './DestinosPrecios';

// Prueba básica para verificar que la sección de destinos y precios se renderiza correctamente
test('Renderiza la sección de destinos y precios correctamente', () => {
    render(<DestinosPrecios />);
}); 
