import { useState } from "react";
import PropTypes from 'prop-types';


/**
 * 
 * Mostrar error para mostrar el onChange
 * 1. Crear state
 * 2. agregar input con su onInputChange
 * 3. Agregar form
 * 4. Creare onSubmit
 * 5. Agregar prop setCategories
 * 6. Tarea agregar inputValue a setCategories y definir proptype
 * 7. Implementar onNewCategory
 */
export const AddCategory = ({setCategories,onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        //setInputValue('Hola mundo');
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //1.React no redenriza por cada ejecucion del state sino al final de que la funcion principal termine todas sus operaciones
        //setCategories(categories=> [inputValue, ...categories]);
        //2.
        onNewCategory(inputValue.trim());


        setInputValue('');
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // Explicar atomicamente asi se pasa la referencia de una funcion 
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}


AddCategory.propTypes = {
    //setCategories: PropTypes.func.isRequired
}