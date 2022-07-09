import { screen, render, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />>', () => { 

    test('debe de cambiar el valor de la caja de texto', ()=>{
        render(<AddCategory onNewCategory={()=>{}}/>);
        
        const input =  screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Naruto'}});//Input calls onChange event of the component

        expect(input.value).toBe('Naruto');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory =  jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});//Setear el valor en el input
        fireEvent.submit(form);//Validar que se este llamando el onSubmit

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

     });


     test('no debe de llamar onNewCategory si el input esta vacio', () => { 
        const onNewCategory =  jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);//Validar que se este llamando el onSubmit

        // expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

     });
 })