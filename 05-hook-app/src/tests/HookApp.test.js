import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en HookApp', () => {
    const wrapper = shallow(<HookApp />);

    test('debe de mostrar <HookApp> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        const h1 = wrapper.find('h1');
        const value = 'Hola mundo';
        expect(h1.text().trim()).toBe(value);
    });
});
