import {screen, render, fireEvent} from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";

describe('pruebas en <CounterApp />', () => {
    const initialValue = 100; 

    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
     });


     test('debe mostrar el valor inicial de 100 en el h2', () => {        
        render(<CounterApp value={initialValue}/>);
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(`${initialValue}`);//level 2 because h2
      });

      /**
       * import fireEvent to simulate interactions on the component
       */
      test('debe incrementar con el boton +1', () => { 
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
       });

       test('debe decrementar con el boton -1', () => { 
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
       });

       test('debe de funcionar boton reset', () => {         
         render(<CounterApp value={initialValue}/>);
         fireEvent.click(screen.getByText('+1'));
         fireEvent.click(screen.getByText('+1'));
         fireEvent.click(screen.getByText('+1'));
        //  fireEvent.click(screen.getByText('Reset')); //easiest alternative
         fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
         expect(screen.getByText('100')).toBeTruthy();
        });

 })