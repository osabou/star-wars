import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import { RoutesConfig } from "./common/routes";
import Planet from "./pages/Planet/Planet";
import Character from "./pages/Characters/Characters";

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={RoutesConfig.home} element={<Home/>}/>
                <Route path={`${RoutesConfig.films}/:productId`} element={<Movie/>}/>
                <Route path={`${RoutesConfig.planets}/:productId`} element={<Planet/>}/>
                <Route path={`${RoutesConfig.characters}/:productId`} element={<Character/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;