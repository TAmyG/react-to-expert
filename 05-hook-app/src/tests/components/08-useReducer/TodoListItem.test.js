import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            i={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {
        //jest.fn()
        //toHaveBeeCalledWith
        const button = wrapper.find('button');
        button.simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id); // Called with a function
    });

    test('debe de llamar la funcion handleToggle', () => {
        //jest.fn()
        //toHaveBeeCalledWith
        const p = wrapper.find('p');
        p.simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        //contenido del p
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`${1 + 1}. ${demoTodos[0].desc}`);
    });

    test('debe de tener la clase complete si TODO.done es true', () => {
        //contenido del p

        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoListItem todo={todo} />);
        const p = wrapper.find('p');

        expect(p.hasClass('complete')).toBe(true);
    });
});
