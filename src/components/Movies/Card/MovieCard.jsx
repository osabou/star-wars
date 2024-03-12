import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RoutesConfig } from "../../../common/routes";

const MovieCard = (props) => {
  const { title, description, movieId } = props;

  return (
    <Card variant="outlined" sx={{ width: 360 }}>
      <CardContent>
        <Box sx={{ p: 2 }}>
          <Typography>{title}</Typography>
          <br />
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={`${RoutesConfig.films}/${movieId}`}>Show More</Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
