import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   characters: [],
};

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
    }
})

export const {
    setCharacters,
} = charactersSlice.actions;

export default charactersSlice.reducer;
