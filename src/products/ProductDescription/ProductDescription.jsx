import { Typography } from "@mui/material";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import { LargeField } from "../../ds/atoms";

export default function ProductDescription({ description, id, name }) {
  return (
    <LargeField>
      <Typography component={Link} to={`/products/${id}`}>
        {name}
      </Typography>
      <Typography noWrap>{description}</Typography>
    </LargeField>
  );
}

ProductDescription.propTypes = {
  description: string,
  id: string,
  name: string,
};
