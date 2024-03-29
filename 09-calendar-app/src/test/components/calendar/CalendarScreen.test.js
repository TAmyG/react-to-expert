import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { act } from '@testing-library/react';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendar-messages-es';
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';

jest.mock('../../../actions/events', () => ({
    eventSetActive: jest.fn(),
    eventStartLoading: jest.fn(),
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    calendar: {
        events: [],
    },
    auth: {
        uid: '123',
        name: 'Tamy',
    },
    ui: {
        modalOpen: false,
    },
};

const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarScreen />
    </Provider>
);

describe('Pruebas en <CalendarScreen />', () => {
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('pruebas con las interacciones del calendario', () => {
        const calendar = wrapper.find('Calendar');
        const calendarMessages = calendar.prop('messages');

        expect(calendarMessages).toEqual(messages);

        calendar.prop('onDoubleClickEvent')();
        expect(store.dispatch).toHaveBeenCalledWith({
            type: types.uiOpenModal,
        });

        calendar.prop('onSelectEvent')({ start: 'start' });
        expect(eventSetActive).toHaveBeenCalledWith({ start: 'start' });

        act(() => {
            calendar.prop('onView')('week');
            expect(localStorage.setItem).toHaveBeenCalledWith(
                'lastView',
                'week'
            );
        });
    });
});
