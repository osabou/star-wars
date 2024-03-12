import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { RoutesConfig } from "../../common/routes";
import { getItem } from "../../services/apis/movies";

const Planet = () => {
  const { productId } = useParams();
  const [planetName, setPlanet] = useState();

  const getPlanetsDetails = async () => {
    const planetDetails = await getItem(productId, RoutesConfig.planets);
    setPlanet(planetDetails.data.name);
    console.log(planetDetails);
    return;
  };

  useEffect(() => {
    getPlanetsDetails();
  }, []);

  return <Box>{planetName}</Box>;
};

export default Planet;
