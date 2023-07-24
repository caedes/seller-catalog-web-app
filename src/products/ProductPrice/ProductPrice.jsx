import { number } from "prop-types";
import { Price } from "../../ds/atoms";

export default function ProductPrice({ price }) {
  return <Price value={price} />;
}

ProductPrice.propTypes = {
  price: number,
};
