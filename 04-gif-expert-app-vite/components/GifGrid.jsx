import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

/**
 * 1. ejemplo arreglo de gifs
 * 2. implementacion de API giphy con getGifs
 * 3. implementacion useEffect
 * 4. listar titulos de gifs
 * 5. crear componente GifItem
 * 6. crear custom hook useFetchGifs
 * @param {category} param0 
 * @returns 
 */
export const GifGrid = ({ category }) => {

    //1.
    //const gifs = [1,2,3,4,5];
    //2.
    // getGifs();//Nunca colocar llamadas directas en el componente por el renderizado

    //3.
    // const [gifs, setGifs] = useState([]);

    // const getLocalGifs = async () => {
    //     const newGifs = await getGifs(category);
    //     //console.log(newGifs); 
    //     setGifs(newGifs);
    // }

    // useEffect(() => {
    //     getLocalGifs();
    // }, []);
    //////////////////////////////////////////////
    //6.
    const {gifs, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* {gifs.map(gif=><p key={gif}>{gif}</p>)} */}
            {/* <ol> */}
            {
                isLoading && <h1>Loading...</h1>
            }
            <div className="card-grid">
            
                {
                    gifs.map(gif => <GifItem key={gif.id} {...gif}/>)
                }
            </div>
            {/* </ol> */}
        </>
    )
}
