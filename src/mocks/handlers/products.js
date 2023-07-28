import { rest } from "msw";
import { apiUrl } from "../apiUrl";

export const productsHandler = [
  rest.get(apiUrl("/products/:id"), (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: "Product Name",
        price: 42.99,
      })
    );
  }),
];
