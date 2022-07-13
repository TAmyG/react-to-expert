import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../pages";

/**
 * 
 * al final agregar id al path hero
 */
export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />Ï

            <div className="container">
                <Routes>
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/dc" />} />
                </Routes>
            </div>


        </>
    )
}
