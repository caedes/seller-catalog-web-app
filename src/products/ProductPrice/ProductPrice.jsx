import { number } from "prop-types";

export default function ProductPrice({ price }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

ProductPrice.propTypes = {
  price: number,
};
