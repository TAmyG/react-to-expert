import React from 'react';
import { mount, shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen/>', () => {
    //wrapper//mount
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        // snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejectuar el setUser con el argumento esperado', () => {
        //id, name
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 12345,
            name: 'Tamy Vivas',
        });
    });
});
