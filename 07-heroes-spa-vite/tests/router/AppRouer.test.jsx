import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
    test('should mostrar el login si no esta autenticado', () => {
        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={{ state: contextValue }}>
                <MemoryRouter initialEntries={['/dc']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('should mostrar el componente DC si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: '1234',
                name: 'Alfredo',
            },
        };
        render(
            <AuthContext.Provider value={{ state: contextValue }}>
                <MemoryRouter initialEntries={['/dc']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getAllByText('DC').length).toBeGreaterThanOrEqual(1);
    });
});
