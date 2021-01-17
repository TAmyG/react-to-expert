import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen/>', () => {
    const user = {
        name: 'Tamy',
        email: 'tamy.vivas@gmail.com',
    };
    const wrapper = shallow(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
