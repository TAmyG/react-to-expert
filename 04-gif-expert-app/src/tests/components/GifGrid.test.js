import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'Batman';

    // beforeEach(() => {
    //     // Clear all simulations of component
    //     jest.clearAllMocks();
    //     wrapper = shallow(<GifGrid category={category} />);
    // });

    test('debe de mostrar <GifGrid> correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se carga imagenes useFechGifs', () => {
        const gifs = [
            {
                id: 1,
                title: 'Hola mundo',
                url: 'https://media.giphy.com/media/oMLJaPmbUnoC4/giphy.gif',
            },
            {
                id: 2,
                title: 'Hola mundo',
                url: 'https://media.giphy.com/media/oMLJaPmbUnoC4/giphy.gif',
            },
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
