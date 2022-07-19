import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

/**
 * 
 * 1. Componente
 * 2. useLocation
 */
export const PrivateRoute = ({children}) => {

    const {state} = useContext(AuthContext);
    const {logged} = state;

    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);//TODO implementar un useEffect o useMemo para evitar guardar a menos que haya un cambio

  return (logged ) ? children : <Navigate to="/login"/>
}
