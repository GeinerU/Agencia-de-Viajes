// Importa las bibliotecas necesarias para las pruebas
import React from 'react';
import { render } from '@testing-library/react';
import BarraNavegacion from './BarraNavegacion';

// Prueba básica para verificar que la barra de navegación se renderiza correctamente
test('Renderiza la barra de navegación correctamente', () => {
    render(<BarraNavegacion />);
}); 
