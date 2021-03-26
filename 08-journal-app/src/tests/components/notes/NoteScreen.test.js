import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
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
            id: 1234,
            title: 'Hola',
            body: 'mundo',
            date: 0,
        },
        notes: [],
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <NoteScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <NoteScreen/>', () => {
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de disparar el active note', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo',
            },
        });

        expect(activeNote).toHaveBeenLastCalledWith(1234, {
            body: 'mundo',
            title: 'Hola de nuevo',
            id: 1234,
            date: 0,
        });
    });
});
