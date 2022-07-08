import {screen, render} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp/> #2', () => { 
    const title = 'Hello world';
    const subtitle = 'Hello subtitle';
    
    /*
    El snapshot se crea la primera vez que se ejecuta la test
    con la tecla U actualizo el snapshot
    */
    test('debe hacer match en el snapshot', ()=>{
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });


    /**
     * Screen is the renderized object
     */
    test('debe mostrar "Hello World"', ()=>{
        render(<FirstApp title={title}/>);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar titulo en h1', ()=>{
        render(<FirstApp title={title}/>);
        // screen.debug();
        console.log(screen.getByRole('heading', {level: 1}).innerHTML)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);//level 1 because h1
    });

    test('debe mostrar subtitulo enviado por props', ()=>{
        render(<FirstApp title={title} subTitle={subtitle}/>);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
 })