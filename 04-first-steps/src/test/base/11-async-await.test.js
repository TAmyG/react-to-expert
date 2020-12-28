import { getImagen } from '../../base/11-async-await';

describe('Pruebas con 11-async-await y Fetch', () => {
  test('debe de retornar url de getImagen', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
});
