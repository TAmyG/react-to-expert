import {getByTestId, render} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => { 
    
    /*
    El snapshot se crea la primera vez que se ejecuta la test
    con la tecla U actualizo el snapshot
    */
    test('debe hacer match en el snapshot', ()=>{
        const title = 'Hello world';
        const {container} = render(<FirstApp title={title}/>);

        expect(container).toMatchSnapshot();
    });

    // test('debe mostrar el titulo en un h1', () => { 
    //     const title = 'Hello world';
    //     const {container, getByText} = render(<FirstApp title={title}/>);

    //     expect(getByText(title)).toBeTruthy();

    //     const h1 = container.querySelector('h1');
    //     expect(h1.innerHTML).toContain(title);// para evitar espacios
    //  });


     test('debe mostrar el titulo en un h1', () => { 
        const title = 'Hello world';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(getByTestId('test-title').innerHTML).toContain(title);// para evitar espacios
     });


     /*
     getAllByText para obtener mas de un elemento del domßß
     */
     test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hello world';
        const subtitle = 'Hello subtitle';
        const {container, getAllByText, getByTestId} = render(
            <FirstApp title={title} subTitle={subtitle}/>
        );

        expect(getAllByText(subtitle).length).toBe(2);


      });
 })