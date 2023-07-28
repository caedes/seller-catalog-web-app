import { vi } from "vitest";
import { FavoritesContext } from "../../contexts";
import { render, screen } from "../../test-utils/index.jsx";
import ProductRoute from "./ProductRoute";

describe("ProductRoute", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("renders correctly", async () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });

    render(<ProductRoute />, {
      initialEntries: ["/products/123"],
      path: "/products/:id",
      wrapper: FavoritesContext.Provider,
    });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", { name: "Product Name" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("alert", { name: "product-enrichment" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ajouter aux favoris" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Éditer" })).toBeInTheDocument();

    expect(
      screen.getByRole("row", {
        name: /Prix.42,99.€/i,
      })
    ).toBeInTheDocument();
  });
});
