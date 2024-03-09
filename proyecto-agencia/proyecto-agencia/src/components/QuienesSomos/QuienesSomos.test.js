// Importa las bibliotecas necesarias para las pruebas
import React from 'react';
import { render } from '@testing-library/react';
import QuienesSomos from './QuienesSomos';

// Prueba básica para verificar que la sección "Quienes Somos" se renderiza correctamente
test('Renderiza la sección "Quienes Somos" correctamente', () => {
    render(<QuienesSomos />);
}); 
