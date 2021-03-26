import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPwd } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPwd: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <LoginScreen />', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de disparar la acción de startGoogleLogin', () => {
        const preventDefault = jest.fn();
        wrapper.find('.google-btn').prop('onClick')({ preventDefault });
        expect(startGoogleLogin).toHaveBeenCalled();
    });

    test('debe de disparar la acción de startLoginEmailPwd', () => {
        wrapper.find('form').prop('onSubmit')({ preventDefault() {} });
        expect(startLoginEmailPwd).toHaveBeenCalledWith(
            'tamy.vivas@gmail.com',
            '123456'
        );
    });
});
