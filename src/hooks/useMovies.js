import { useDispatch } from "react-redux";
import { setId, setMovies, setSearch } from "../store/moviesSlice";

export const useMovies = () => {
    const dispatch = useDispatch();

    const setListOfMovies = (data) => dispatch(setMovies(data));
    const setSearchInput = (data) => dispatch(setSearch(data)); 
    const setMovieId = (data) => dispatch(setId(data));

    return {
        setListOfMovies,
        setSearchInput,
        setMovieId,
    };
};