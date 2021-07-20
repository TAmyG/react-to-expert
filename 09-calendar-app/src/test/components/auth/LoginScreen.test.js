import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);

store.dispatch = jest.fn();

jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn(),
}));

const wrapper = mount(
    <Provider store={store}>
        <LoginScreen />
    </Provider>
);

describe('Pruebas en <LoginScreen/>', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar dispatch del login', () => {
        wrapper.find('input[name="lEmail"]').simulate('change', {
            target: { name: 'lEmail', value: 'tamy.vivas@gmail.com' },
        });

        wrapper.find('input[name="lPassword"]').simulate('change', {
            target: { name: 'lPassword', value: '123456' },
        });

        wrapper.find('form').at(0).prop('onSubmit')({ preventDefault() {} });

        expect(startLogin).toHaveBeenCalledWith(
            'tamy.vivas@gmail.com',
            '123456'
        );
    });

    test('no hay registro si las contrasenias son diferentes', () => {
        // 1-2... rPassword1, rPassword2 simulate
        wrapper.find('input[name="rPassword1"]').simulate('change', {
            target: { name: 'rPassword1', value: 'tamy.vivas@gmail.com' },
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: { name: 'rPassword2', value: '123456798' },
        });

        wrapper.find('form').at(1).prop('onSubmit')({ preventDefault() {} });

        // startRegister NO sea llamado

        expect(startRegister).not.toHaveBeenCalled();

        //Swal.fire se llame con los argumentos: 'Error', 'Passwords does not match', 'error'
        expect(Swal.fire).toHaveBeenCalledWith(
            'Error',
            'Passwords does not match',
            'error'
        );
    });

    test('registro con contrasenias iguales', () => {
        // 1-2... rPassword1, rPassword2 simulate
        wrapper.find('input[name="rPassword1"]').simulate('change', {
            target: { name: 'rPassword1', value: '123456798' },
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: { name: 'rPassword2', value: '123456798' },
        });

        wrapper.find('form').at(1).prop('onSubmit')({ preventDefault() {} });

        // startRegister NO sea llamado

        expect(startRegister).toHaveBeenCalled();
    });
});
