import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        // Clear all simulations of component
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrar <AddCategory> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
    });

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} }); // preventDefault is a function scape
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola setCategories';
        // 1. Simular inputChange
        input.simulate('change', { target: { value } });
        // 2. Simular submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Called with a function
        // 4. El Valor del input debe ser ''
        expect(input.text()).toBe('');
    });
});
