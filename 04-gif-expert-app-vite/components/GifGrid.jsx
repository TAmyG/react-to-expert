import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * 1. ejemplo arreglo de gifs
 * 2. implementacion de API giphy con getGifs
 * 3. implementacion useEffect
 * 4. listar titulos de gifs
 * @param {category} param0 
 * @returns 
 */
export const GifGrid = ({ category }) => {

    //1.
    //const gifs = [1,2,3,4,5];
    //2.
    // getGifs();//Nunca colocar llamadas directas en el componente por el renderizado

    //3.
    const [gifs, setGifs] = useState([]);

    const getLocalGifs = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
    }

    useEffect(() => {
        getLocalGifs();
    }, [gifs])

    return (
        <>
            <h3>{category}</h3>
            {/* {gifs.map(gif=><p key={gif}>{gif}</p>)} */}
            <ol>
                {
                    gifs.map(gif => <li key={gif.id}>{gif.title}</li>)
                }
            </ol>


        </>
    )
}
