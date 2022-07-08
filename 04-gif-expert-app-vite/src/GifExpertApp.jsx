/**
 * 
 * After react v17 is not necesary the React import
 */

import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid";
/**
 * 
 * 1. crear state
 * 2. agregar categoria. Investiguen como agregar un elemento
 * 3. Crear componente Add Category
 * 4. Enviar prop setCategories
 * 5. Eliminar button Agregar
 * 6. Tarea implmentar con onAddCategory mejor solucion ya que el componente debe emitir el valor
 * 7. Evitar duplicados
 * 8. Nuevo Componente GifGrid
 */
export const GifExpertApp = () => {
    //1.
    const [categories, setCategories] = useState(['One Punch']);

    /** 
    * 2.
    * No se puede hacer push directo a categories, ya que React trata de no mutar el state
    * Lo preferible es crear un nuevo state con setCategories
    */
    const onAddCategory = (newCategory) => {
        //1.
        //setCategories(prev => ['Naruto', ...prev]);

        //3.
        if(categories.includes(newCategory)) return;
        //2.
        setCategories(prev => [newCategory, ...prev]);

    }

    return (
        <>
            {/**Titulo */}
            <h1>GifExpertApp</h1>
            {/**Input */}
            {/* <AddCategory setCategories={setCategories} />
            <button onClick={onAddCategory} >Agregar</button> */}
            <AddCategory onNewCategory={onAddCategory} />
            <ol>
                {/* {categories.map(category => <li key={category} >{category}</li>)} */}
                {categories.map(category => <GifGrid key={category} category={category}/>)}
            </ol>

            {/**Listado de Gifs */}
            {/**Gif Item*/}

        </>
    )
}
