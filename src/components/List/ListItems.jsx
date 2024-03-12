import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export const ListItems = (props) => {
  const { route, list, title } = props;

  return (
    <>
      <h3>{title}</h3>
      <List>
        {list.map((item) => {
          return (
            <ListItem key={list.indexOf(item)}>
              <Link to={`${route}/${list.indexOf(item) + 1}`}>{item.name}</Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ListItems;
