describe('Pruebas en el demo.test.js', () => {
  test('should be equal', () => {
    const mensaje = 'Hola Mundo';
    const mensaje2 = `Hola Mundo`;

    expect(mensaje).toBe(mensaje2);
  });
});
