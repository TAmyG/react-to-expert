import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CouterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={() => increment(10)} className="btn">
                +1
            </button>
            <button onClick={() => decrement(10)} className="btn">
                -1
            </button>
            <button onClick={reset} className="btn">
                reset
            </button>
        </>
    );
};
