import { CustomPaper } from "./Home.styles";
import SearchAppBar from "../../components/Search/Search";
import { useMovies } from "../../hooks/useMovies";
import { useSelector } from "react-redux";
import { getFilteredMovies } from "../../store/selectors/moviesSelectors";
import { getAllMovies } from "../../services/apis/movies";
import { useEffect } from "react";
import ListMovies from "../../components/Movies/ListMovies";

const Home = () => {
  const { setListOfMovies } = useMovies();
  const searchValue = useSelector(getFilteredMovies);

  const getMovies = async () => {
    const movies = await getAllMovies(searchValue);
    setListOfMovies(movies.data.results);
    return;
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);

  return (
    <>
      <SearchAppBar />
      <CustomPaper elevation={2}>
        <ListMovies />
      </CustomPaper>
    </>
  );
};

export default Home;
