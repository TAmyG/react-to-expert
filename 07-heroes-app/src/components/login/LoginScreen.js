import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        //history.push('/dc');
        dispatch({
            type: types.login,
            payload: {
                name: 'tamy',
            },
        });
        history.replace(lastPath);
    };
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
