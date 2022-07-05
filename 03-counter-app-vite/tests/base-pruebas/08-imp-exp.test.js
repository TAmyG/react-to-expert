import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroesById debe retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        //To Equal because is object
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     })


     test('getHeroesById debe retornar undefined', () => { 
        const id = 100;
        const hero = getHeroeById(id);

        //To Equal fasle, undefined, null
        expect(hero).toBeFalsy();
     })


     test('getHeroesByOwner debe retornar heroes DC', () => { 
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        //To Equal fasle, undefined, null
        expect(hero.length).toBe(3);
        expect(hero).toEqual(heroes.filter((heroe)=>heroe.owner === owner));

     })


     test('getHeroesByOwner debe retornar heroes Marvel', () => { 
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);

        //To Equal fasle, undefined, null
        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter((heroe)=>heroe.owner === owner));

     })


})