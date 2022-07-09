import {renderHook, waitFor}  from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.setTimeout(100000);

describe('Pruebas en useFetchGifs.js', () => { 
    /**
     * Un hook no se puede evaluar fuera de un functional component
     */
    test('debe retornar el estado inicial', ()=>{
        const { result} = renderHook (()=> useFetchGifs('Naruto')) ;
        const {gifs, isLoading} =  result.current;

        expect( gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });


    test('debe retornar un arreglo de gifs y isLoading false', async()=>{
        const { result} = renderHook (()=> useFetchGifs('Naruto')) ;
        
        //
        await waitFor(
            ()=> expect(result.current.gifs.length).toBeGreaterThan(0),
            {timeout: 10000 }
        );

        const {gifs, isLoading} =  result.current;

        expect( gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
 })