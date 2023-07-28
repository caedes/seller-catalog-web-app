import { render } from "@testing-library/react";
import TestContext from "./TestContext";

const customRender = (ui, options) => {
  const { initialEntries, path, ...renderOptions } = options;

  return render(
    <TestContext initialEntries={initialEntries} path={path}>
      {ui}
    </TestContext>,
    renderOptions
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
