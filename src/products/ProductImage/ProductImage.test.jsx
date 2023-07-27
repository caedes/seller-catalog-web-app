import { render, screen } from "@testing-library/react";
import ProductImage from "./ProductImage";

describe("ProductImage", () => {
  test("renders an image", () => {
    render(<ProductImage imageUrl="//test/image.png" name="Alt Text" />);

    expect(screen.getByAltText("Alt Text")).toHaveAttribute(
      "src",
      "//test/image.png"
    );
  });

  /**
   * Préférons l'accessibilité portée par Testing Library pour tester nos composants.
   */
  test.skip("renders correctly", () => {
    const { container } = render(
      <ProductImage imageUrl="//test/image.png" name="Alt Text" />
    );

    expect(container).toMatchSnapshot();
  });
});
