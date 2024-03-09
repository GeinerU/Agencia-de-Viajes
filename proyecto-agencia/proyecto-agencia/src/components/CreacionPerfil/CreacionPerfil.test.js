// Importa las bibliotecas necesarias para las pruebas
import React from 'react';
import { render } from '@testing-library/react';
import CreacionPerfil from './CreacionPerfil';

// Prueba básica para verificar que el formulario de creación de perfil se renderiza correctamente
test('Renderiza el formulario de creación de perfil correctamente', () => {
    render(<CreacionPerfil />);
});
