import { number, shape } from "prop-types";

export default function ProductPrice({ row }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(row.price);
}

ProductPrice.propTypes = {
  row: shape({
    price: number,
  }),
};
