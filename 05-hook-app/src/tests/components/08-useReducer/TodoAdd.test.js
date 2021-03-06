import React from 'react';
import { shallow } from 'enzyme';
//import '@testing-library/jest-dom';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la funcion handleAddTodo', () => {
        //con un argumento--called whitour argument
        const value = 'Aprender angular';
        const input = wrapper.find('input').simulate('change', {
            target: { value, name: 'description' },
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        //Reset validation
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
