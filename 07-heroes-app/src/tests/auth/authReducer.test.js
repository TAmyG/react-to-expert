import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
    const state = {
        name: 'tamy',
        logged: false,
    };
    test('debe retornar el estado por defecto', () => {
        const newState = authReducer(state, {});
        expect(newState).toEqual(state);
    });

    test('debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Alfredo',
            },
        };
        const newState = authReducer(state, action);
        expect(newState.name).toBe(action.payload.name);
        expect(newState.logged).toBe(true);
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        };
        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });
    });
});
