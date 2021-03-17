import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
    test('debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Tamy',
            },
        };
        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Tamy',
        });
    });

    test('debe de realizar el logout', () => {
        const initState = {
            uid: 'abc',
            displayname: 'Tamy',
        };
        const action = {
            type: types.logout,
        };
        const state = authReducer(initState, action);

        expect(state).toEqual({});
    });

    test('debe de retornar initState', () => {
        const initState = {
            uid: 'abc',
            displayname: 'Tamy',
        };
        const action = {
            type: '123456789',
        };
        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    });
});
