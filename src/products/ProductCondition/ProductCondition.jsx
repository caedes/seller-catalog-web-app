import { shape, oneOf } from "prop-types";

export default function ProductCondition({ row }) {
  return row.condition === "new" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  row: shape({
    condition: oneOf(["new", "used"]),
  }),
};
