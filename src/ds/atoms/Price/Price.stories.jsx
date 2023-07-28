import Price from "./Price.jsx";

export default {
  component: Price,
  argTypes: {
    currency: {
      options: ["EUR", "USD"],
      control: { type: "radio" },
    },
  },
};

export const Main = {
  args: { value: 42.99 },
};

export const WithDollar = {
  args: { ...Main.args, currency: "USD" },
};

export const WithUnsupportedCurrency = {
  args: { ...Main.args, currency: "UNSUPPORTED" },
};
