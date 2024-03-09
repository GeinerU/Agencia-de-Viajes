// Importa las bibliotecas necesarias para las pruebas
import React from 'react';
import { render } from '@testing-library/react';
import PlanesOfrecidos from './PlanesOfrecidos';

// Prueba básica para verificar que la lista de planes ofrecidos se renderiza correctamente
test('Renderiza la lista de planes ofrecidos correctamente', () => {
    render(<PlanesOfrecidos />);
}); 
