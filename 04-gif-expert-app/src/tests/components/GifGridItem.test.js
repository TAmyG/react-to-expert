import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en GifGridItem', () => {
    /* test('debe de mostrar el mensaje "Hola, soy Tamy"', () => {
    const saludo = 'Hola, soy Tamy!!!';
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */

    const props = {
        id: 1,
        title: 'Hola mundo',
        url: 'https://media.giphy.com/media/oMLJaPmbUnoC4/giphy.gif',
    };
    const wrapper = shallow(<GifGridItem key={props.id} {...props} />);
    test('debe de mostrar <GifGridItem> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(props.title);
    });

    test('debe de tener la img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(props.url);
        expect(img.prop('alt')).toBe(props.title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});
