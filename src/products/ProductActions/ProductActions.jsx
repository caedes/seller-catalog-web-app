import { IconButton } from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { string } from "prop-types";

export default function ProductActions({ id }) {
  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit />
      </IconButton>
      <IconButton>
        <Favorite />
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
