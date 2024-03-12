export const getListOfMovies = (state) => state.moviesSlice.movies;
export const getFilteredMovies = (state) =>  state.moviesSlice.search;
export const getMovieId = (state) => state.moviesSlice.id