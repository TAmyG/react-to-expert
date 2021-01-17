import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Angular',
            done: false,
        };

        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo,
        });
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe de borrar un TODO', () => {
        //action.payload = ID del TODO
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: 2,
        });
        expect(state.length).toBe(1);
        expect(state[0]).toEqual(demoTodos[0]);
    });

    test('debe de hacer el TOGGLE del TODO', () => {
        //action.payload = ID del TODO, done=true/false
        const state = todoReducer(demoTodos, {
            type: 'toggle',
            payload: 1,
        });
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });
});
