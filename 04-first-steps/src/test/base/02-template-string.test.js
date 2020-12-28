import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-strings', () => {
  test('Prueba getSaludo ', () => {
    const nombre = 'Tamy';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  });

  test('Alfredo por defecto', () => {
    const nombre = 'Alfredo';
    const saludo = getSaludo();
    expect(saludo).toBe('Hola ' + nombre);
  });
});
