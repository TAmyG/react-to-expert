import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState();

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                //setTimeout(() => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data,
                    });
                } else {
                    console.log('setState no se llamo');
                }
                //}, 100);
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info',
                });
            });
    }, [url]);

    return state;
};
