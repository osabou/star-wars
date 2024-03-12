import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import planetsReducer from "./planetsSlice";
import charactersReducer from "./charactersSlice";

export const store = configureStore({
    reducer: {
        moviesSlice: moviesReducer,
        planetsSlice: planetsReducer,
        charactersSlice: charactersReducer
    }
})


