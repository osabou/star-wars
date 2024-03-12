import { useDispatch } from "react-redux";
import { setCharacters } from "../store/charactersSlice";

export const useCharacters = () => {
    const dispatch = useDispatch();

    const setListOfCharacters= (data) => dispatch(setCharacters(data));

    return {
        setListOfCharacters,
    };
};