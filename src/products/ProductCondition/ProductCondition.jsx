import { oneOf } from "prop-types";

export default function ProductCondition({ condition }) {
  return condition === "new" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf(["new", "used"]),
};
