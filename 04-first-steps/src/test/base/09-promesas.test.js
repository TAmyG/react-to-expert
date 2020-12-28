import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un Heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes[0]);
      return done();
    });
  });

  test('getHeroeByIdAsync debe retornar error si id no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((hero) => {
      expect(hero).toBe('No se pudo encontrar el héroe');
      return done();
    });
  });
});
