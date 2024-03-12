import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   planets: [],
};

export const planetsSlice = createSlice({
    name: "planets",
    initialState,
    reducers: {
        setPlanets: (state, action) => {
            state.planets = action.payload;
        },
    }
})

export const {
    setPlanets,
} = planetsSlice.actions;

export default planetsSlice.reducer;
