import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
    const {
        nextPage,
        pokemons = [],
        isLoading = false,
    } = useSelector((state) => state.pokemon);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>
            <ul>
                {pokemons.map(({ name, url }) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <span>Page: {nextPage}</span>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(nextPage))}
            >
                Next
            </button>
        </>
    );
};
