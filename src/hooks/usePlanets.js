import { useDispatch } from "react-redux";
import { setPlanets } from "../store/planetsSlice";

export const usePlanets = () => {
    const dispatch = useDispatch();

    const setListOfPlanets = (data) => dispatch(setPlanets(data));

    return {
        setListOfPlanets,
    };
};