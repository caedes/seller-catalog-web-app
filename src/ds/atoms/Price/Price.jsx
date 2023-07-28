import { Typography } from "@mui/material";
import { number, oneOf } from "prop-types";

const defaultCurrency = "EUR";
const supportedCurrencies = [defaultCurrency, "USD"];

export default function Price({ value, currency = defaultCurrency }) {
  const isoCurrency = supportedCurrencies.includes(currency)
    ? currency
    : defaultCurrency;

  const priceWithCurrency = new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: isoCurrency,
  }).format(value);

  return <Typography component="span">{priceWithCurrency}</Typography>;
}

Price.propTypes = {
  value: number,
  currency: oneOf(supportedCurrencies),
};
