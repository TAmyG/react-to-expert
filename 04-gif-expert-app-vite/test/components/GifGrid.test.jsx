import { screen, render, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 

    const category = 'Naruto';

    test('debe de mostrar el loading inicialmente', ()=>{
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });

        render(<GifGrid category={category}/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));

    });


    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', ()=>{
        const gifs = [{
            id:'123',
            title: 'Titulo',
            url: 'https://localhost:3000/1'
        }, {
            id:'1234',
            title: 'Titulo2',
            url: 'https://localhost:3000/1'
        }];
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: true,
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);        

    });
 })