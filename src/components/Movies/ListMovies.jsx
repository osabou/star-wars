import { useSelector } from "react-redux";
import { Grid, List } from "@mui/material";
import MovieCard from "./Card/MovieCard";
import { getListOfMovies } from "../../store/selectors/moviesSelectors";

const ListMovies = () => {
  const listOfMovies = useSelector(getListOfMovies);

  return (
    <List>
      <Grid container spacing={2}>
        {listOfMovies.map((movie) => {
          return (
            <Grid item xs={3} key={listOfMovies.indexOf(movie)}>
              <MovieCard
                title={movie.title}
                description={movie.opening_crawl}
                movieId={listOfMovies.indexOf(movie) + 1}
              />
            </Grid>
          );
        })}
      </Grid>
    </List>
  );
};

export default ListMovies;
