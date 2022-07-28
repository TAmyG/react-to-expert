import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn(); //definimos funcion mock para sustituir el use Navigate
// Indicamos que vamos a mockear la funcion useNavigate de la libreria react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), //que use todo lo que usa la libreria
    useNavigate: () => mockedUseNavigate, //solo sobreescribimos el useNavigate
}));

describe('Pruebas en <Navbar/>', () => {
    const contextValue = {
        logged: true,
        user: {
            id: '1234',
            name: 'Alfredo',
        },
    };

    //Para estar eismpre limpias
    beforeEach(() => jest.clearAllMocks());

    test('should aparecer nombre de la persona autenticada', () => {
        render(
            <AuthContext.Provider value={{ state: contextValue }}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getAllByText(contextValue.user.name)).toBeTruthy();
    });

    test('should de llamar el logout y navigate cuando se hace click en boton', () => {
        const logout = jest.fn();
        render(
            <AuthContext.Provider value={{ state: contextValue, logout }}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(logout).toHaveBeenCalledTimes(1);
        expect(logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {
            replace: true,
        });
    });
});
