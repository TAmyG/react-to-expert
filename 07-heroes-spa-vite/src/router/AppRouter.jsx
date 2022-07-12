import { Navigate, Route, Routes } from "react-router-dom";
// import { LoginPage } from "../auth/pages/LoginPage";
// import { DcPage } from "../heroes/pages/DcPage";
// import { MarvelPage } from "../heroes/pages/MarvelPage";

import { DcPage, MarvelPage } from '../heroes';
import { LoginPage } from "../auth/";

import { Navbar } from "../ui";

/***
 * 1. Crear Navbar y explicar lo de la clase active
 * 2. Archivo de barril para heroes
 * 3. Archivo de barril para auth
 */
export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="dc" element={<DcPage />} />
                <Route path="marvel" element={<MarvelPage />} />

                <Route path="login" element={<LoginPage />} />


                <Route path="/" element={<Navigate to="/dc" />} />
            </Routes>
        </>
    );
}
