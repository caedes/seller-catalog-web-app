import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Price from "./Price";

describe("Price", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("in FR and Euro displays the price and the currency", () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });
    render(<Price value={100} />);

    expect(screen.getByText("100,00 €")).toBeInTheDocument();
  });

  test("in US and Dollar displays the price and the currency", () => {
    render(<Price value={100} currency="USD" />);

    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });
});
