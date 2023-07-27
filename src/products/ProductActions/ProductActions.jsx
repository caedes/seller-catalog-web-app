import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { FavoritesContext } from "../../contexts";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { string } from "prop-types";

export default function ProductActions({ id }) {
  const { favoriteIds, toggleFavorite } = FavoritesContext.useContext();

  const isFavorite = favoriteIds.includes(id);

  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => toggleFavorite({ id })}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
