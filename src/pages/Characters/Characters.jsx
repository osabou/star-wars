import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { RoutesConfig } from "../../common/routes";
import { getItem } from "../../services/apis/movies";

const Character = () => {
  const { productId } = useParams();
  const [characterName, setCharacterName] = useState();

  const getCharactersDetails = async () => {
    const charactersDetails = await getItem(productId, RoutesConfig.characters);
    setCharacterName(charactersDetails.data.name);
    return;
  };

  useEffect(() => {
    getCharactersDetails();
  }, []);

  return <Box>{characterName}</Box>;
};

export default Character;
