import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/apis/movies";
import List from "../../components/List/ListWrapper/ListWrapper";
import { useCharacters } from "../../hooks/useCharacters";
import { usePlanets } from "../../hooks/usePlanets";
import { RoutesConfig } from "../../common/routes";

const Movie = () => {
  const { productId } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { setListOfPlanets } = usePlanets();
  const { setListOfCharacters } = useCharacters();

  const getMovieDetails = async () => {
    const movie = await getItem(productId, RoutesConfig.films);
    setTitle(movie.data.title);
    setDescription(movie.data.opening_crawl);
    return;
  };

  const getPlanetsDetails = async () => {
    const planets = await getItem("", RoutesConfig.planets);
    setListOfPlanets(planets.data.results);
    return;
  };

  const getCharactersDetails = async () => {
    const characters = await getItem("", RoutesConfig.characters);
    setListOfCharacters(characters.data.results);
    return;
  };

  useEffect(() => {
    getMovieDetails();
    getPlanetsDetails();
    getCharactersDetails();
  }, []);

  return (
    <Paper sx={{ margin: 5, padding: 2 }} elevation={2}>
      <h1>{title}</h1>
      <Typography>{description}</Typography>
      <List />
    </Paper>
  );
};

export default Movie;
