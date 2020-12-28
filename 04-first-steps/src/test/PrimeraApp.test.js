import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
  /* test('debe de mostrar el mensaje "Hola, soy Tamy"', () => {
    const saludo = 'Hola, soy Tamy!!!';
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */

  test('debe de mostrar <PrimeraApp> correctamente', () => {
    const saludo = 'Hola, soy Tamy';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, soy Tamy';
    const subtitulo = 'Hola sutitulo';
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />,
    );

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
