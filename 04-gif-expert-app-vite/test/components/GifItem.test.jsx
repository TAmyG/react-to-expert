import { screen, render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const title = 'Hello world';
    const url = 'https://media1.giphy.com/media/2y98KScHKeaQM/giphy.gif?cid=39ae98e5q29hy9kunadf2qo0a12204ne9e8hkjhfah9bago1&rid=giphy.gif&ct=g';

    test('debe hacer match en el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT', () => {
        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toContain(url);
        const {src, alt}= screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });


    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        
        expect(screen.getByText(title)).toBeTruthy();
    });
})