import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import { Sidebar } from '../../../components/journal/Sidebar';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'tv12324654',
        name: 'TamyVivas',
    },
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 'ABC',
        },
        notes: [],
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Sidebar />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <Sidebar/>', () => {
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar startLogout', () => {
        //startLogout
        wrapper.find('.btn').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
    });

    test('debe de llamar startNewNote', () => {
        //startNewNote
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
    });
});
