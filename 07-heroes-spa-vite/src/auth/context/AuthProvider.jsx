
import { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

/**
 * 1. crear AuthProvider
 * 2. crear authReducer
 * 3. useReducer
 * 4. initialState
 * 5. login
 * 6. initializer luego de implementar LoginPage
 */

const initialState = {
  logged: false,
}

//6. Esta funcion de inicializacion se invoca cada vez que se recarga el navegador
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user, !user, !!user);
  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  //3.
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {

    const user= {id: '1234AD', name };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {

    const action = {
      type: types.logout
    }
    localStorage.removeItem('user');


    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
