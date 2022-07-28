import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {
    test('debe de mostrar el children sino esta autenticado', () => {
        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={{ state: contextValue }}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Miguel',
                id: '12345',
            },
        };

        /**
         * Memory Router
         * Si solo dejo 1 ruta se va ciclar debido a que solo existe la ruta login
         */
        render(
            <AuthContext.Provider value={{ state: contextValue }}>
                <MemoryRouter initialEntries={['/login']}>
                    {/* Si dejo solo una ruta se cicla */}
                    {/* <PublicRoute>
                        <h1>Ruta Publica</h1>
                    </PublicRoute> */}

                    <Routes>
                        <Route
                            path="login"
                            element={
                                <PublicRoute>
                                    <h1>Ruta Publica</h1>
                                </PublicRoute>
                            }
                        />
                        <Route path="dc" element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    });
});
