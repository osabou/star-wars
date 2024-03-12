import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    movies: [],
    search: "",
    id: null,
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
})

export const {
    setMovies,
    setSearch,
    setId,
} = moviesSlice.actions;

export default moviesSlice.reducer;
