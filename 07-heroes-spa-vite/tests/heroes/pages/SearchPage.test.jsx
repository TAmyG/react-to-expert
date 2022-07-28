import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

const mockedUseNavigate = jest.fn(); //definimos funcion mock para sustituir el use Navigate
// Indicamos que vamos a mockear la funcion useNavigate de la libreria react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), //que use todo lo que usa la libreria
    useNavigate: () => mockedUseNavigate, //solo sobreescribimos el useNavigate
}));

describe('Pruebas en <SearchPage />', () => {
    beforeEach(() => jest.clearAllMocks());

    test('should de hacer match con el snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('should mostrar a batman y el input con valor del query string', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger'); //Agregar etiqueta aria-label
        expect(alert.style.display).toBe('none');
    });

    test('should mostrar un error si no se encuentra el hero', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger'); //Agregar etiqueta aria-label
        expect(alert.style.display).not.toBe('none');
    });

    test('should llamar el navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'superman' } }); //Setear el valor en el input
        fireEvent.submit(form); //Validar que se este llamando el onSubmit
        expect(mockedUseNavigate).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
    });
});
