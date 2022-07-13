import {  Route, Routes } from "react-router-dom";
// import { LoginPage } from "../auth/pages/LoginPage";
// import { DcPage } from "../heroes/pages/DcPage";
// import { MarvelPage } from "../heroes/pages/MarvelPage";

import { HeroesRoutes } from '../heroes';
import { LoginPage } from "../auth/";

// import { Navbar } from "../ui";

/***
 * 1. Crear Navbar y explicar lo de la clase active
 * 2. Archivo de barril para heroes
 * 3. Archivo de barril para auth
 * 4. Crear HeroesRoutes
 * 5. Crear search y hero pages
 * 6. 
 */
export const AppRouter = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    );
}
