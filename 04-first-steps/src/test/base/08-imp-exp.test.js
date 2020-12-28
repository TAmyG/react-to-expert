import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('debe de retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(hero).toEqual(heroeData);
  });

  test('debe retornar undefined sino existe heroe', () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test('debe de retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    const heroData = heroes.filter((h) => h.owner === owner);
    expect(hero).toEqual(heroData);
  });

  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(2);
  });
});
