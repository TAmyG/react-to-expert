import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
/**
 * 
 * 1. componete
 * 2. aplicar useContext
 * 3. Checkar en components del browser el Context.Provider
 * 4. LastPath
 */
export const LoginPage = () => {
  const navigate =  useNavigate();
  const {login}  = useContext(AuthContext);


  const onLogin = ()=>{
    //4.
    const lastPath = localStorage.getItem('lastPath') || '/';

    //2. 
    login('Tamy Vivas');
    navigate(lastPath, {replace: true}); //borra el stack
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button className="btn btn-primary" onClick={onLogin}>Login</button>
    </div>
  )
}
