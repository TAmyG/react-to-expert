import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import {
    login,
    logout,
    startLoginEmailPwd,
    startLogout,
} from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas en Auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

    test('login y logout debe de crear la accion respectiva', () => {
        const uid = 'ABC123';
        const displayName = 'Tamy';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName,
            },
        });

        expect(logoutAction).toEqual({
            type: types.logout,
        });
    });

    test('debe realizar el startLogout', async () => {
        await store.dispatch(startLogout());
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout,
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning,
        });
    });

    test('debe de iniciar el startLoginEmailPassword ', async () => {
        await store.dispatch(startLoginEmailPwd('test@testing.com', '123456'));
        const actions = store.getActions();
        console.log(actions);

        expect(actions[2]).toEqual({
            type: types.login,
            payload: {
                uid: 'cIvtKEycP0PCqmrjkWpblwKbyIi1',
                displayName: null,
            },
        });
    });
});
