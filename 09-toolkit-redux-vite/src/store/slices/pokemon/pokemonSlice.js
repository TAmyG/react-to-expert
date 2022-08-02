import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        nextPage: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state /* action */) => {
            //! https://react-redux.js.org/tutorials/quick-start
            // Redux Toolkit allows us to write 'mutating' logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a 'draft state' and produces a brand new
            // immutable state based off those changes
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.nextPage = action.payload.nextPage;
            state.pokemons = action.payload.pokemons;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
