import { useState } from 'react';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getLocalGifs = async () => {
        const newGifs = await getGifs(category);
        //console.log(newGifs);
        setGifs(newGifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getLocalGifs();
    }, []);

    return { gifs, isLoading };
};
