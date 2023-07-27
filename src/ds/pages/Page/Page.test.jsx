import { render, screen } from "@testing-library/react";
import Page from "./Page";

const EmptyComponent = () => <span data-testid="empty-component" />;

describe("Page", () => {
  it("renders the title", () => {
    render(
      <Page title="Test Title">
        <EmptyComponent />
      </Page>
    );

    expect(
      screen.getByRole("heading", { name: "Test Title" })
    ).toBeInTheDocument();
  });

  it("renders the children", () => {
    render(
      <Page title="Test Title">
        <EmptyComponent />
      </Page>
    );

    expect(screen.getByTestId("empty-component")).toBeInTheDocument();
  });
});
