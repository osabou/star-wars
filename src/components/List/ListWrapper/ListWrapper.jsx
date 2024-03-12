import { useSelector } from "react-redux";
import { ListItems } from "../ListItems";
import { getPlanets } from "../../../store/selectors/planetsSelectors";
import { getCharacters } from "../../../store/selectors/charactersSelector";
import { RoutesConfig } from "../../../common/routes";
import { Dictionary } from "../../../common/dictionary";

const ListWrapper = () => {
  const listofPlanets = useSelector(getPlanets);
  const listofCharacters = useSelector(getCharacters);

  return (
    <>
      <ListItems
        route={RoutesConfig.planets}
        list={listofPlanets}
        title={Dictionary.planetsListTitle}
      />
      <ListItems
        route={RoutesConfig.characters}
        list={listofCharacters}
        title={Dictionary.charactersListTitle}
      />
    </>
  );
};

export default ListWrapper;
