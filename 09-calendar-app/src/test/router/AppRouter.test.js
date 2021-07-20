import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { AppRouter } from '../../router/AppRouter';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// store.dispatch = jest.fn();

describe('Pruebas en <AppRouer/>', () => {
    test('debe de mostrar el espere...', () => {
        const initState = {
            auth: {
                checking: true,
            },
        };
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h5').exists()).toBe(true);
    });

    test('debe de mostrar la ruta public', () => {
        const initState = {
            auth: {
                checking: false,
                ui: null,
            },
        };
        const store = mockStore(initState);

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.login-container').exists()).toBe(true);
    });

    test('debe de mostrar la ruta private', () => {
        const initState = {
            auth: {
                checking: false,
                uid: '123',
                name: 'nameOfTest',
            },
            calendar: {
                events: [],
            },
            ui: {
                modalOpen: false,
            },
        };
        const store = mockStore(initState);

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.calendar-screen').exists()).toBe(true);
    });
});
