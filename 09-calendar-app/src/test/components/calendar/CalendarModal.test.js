import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';

import { CalendarModal } from '../../../components/calendar/CalendarModal';
import {
    eventStartUpdated,
    eventClearActiveEvent,
    eventStartAddNew,
} from '../../../actions/events';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

jest.mock('../../../actions/events', () => ({
    eventStartUpdated: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    eventStartAddNew: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initState = {
    ui: {
        modalOpen: true,
    },
    calendar: {
        events: [],
        activeEvent: {
            title: 'Title',
            notes: 'Notes Body',
            start: now.toDate(),
            end: nowPlus1.toDate(),
        },
    },
    auth: {
        uid: '123',
        name: 'Tamy',
    },
};
const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarModal />
    </Provider>
);
describe('Pruebas en <CalendarModal />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el modal', () => {
        expect(wrapper.find('Modal').prop('isOpen')).toBe(true);
    });

    test('debe de llamar la accion de actualizar y cerrar modal', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });

        expect(eventStartUpdated).toHaveBeenCalledWith(
            initState.calendar.activeEvent
        );

        expect(eventClearActiveEvent).toHaveBeenCalled();
    });

    test('debe de mostrar error si falta titulo', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });

        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(
            true
        );
    });

    test('debe de llamar la creacion de un evento nuevo', () => {
        const initState = {
            ui: {
                modalOpen: true,
            },
            calendar: {
                events: [],
                activeEvent: null,
            },
            auth: {
                uid: '123',
                name: 'Tamy',
            },
        };
        const store = mockStore(initState);
        store.dispatch = jest.fn();

        const wrapper = mount(
            <Provider store={store}>
                <CalendarModal />
            </Provider>
        );

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hi Tests',
            },
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });

        expect(eventStartAddNew).toHaveBeenCalledWith({
            end: expect.anything(),
            start: expect.anything(),
            title: 'Hi Tests',
            notes: '',
        });

        expect(eventClearActiveEvent).toHaveBeenCalled();
    });

    test('debe de validar las fechas', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hi Tests',
            },
        });

        const today = new Date();

        act(() => {
            //ACT is to prevent problems when a component calls a react function

            wrapper.find('DateTimePicker').at(1).prop('onChange')(today);
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });

        expect(Swal.fire).toHaveBeenCalledWith(
            'Error',
            'La fecha fin debe de ser mayor a la fecha de inicio',
            'error'
        );
    });
});
