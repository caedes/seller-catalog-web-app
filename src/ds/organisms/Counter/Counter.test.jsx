import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.jsx";

const counter = (name) => screen.getByRole("heading", { level: 4, name });
const incButton = () => screen.getByRole("button", { name: "increment" });
const decButton = () => screen.getByRole("button", { name: "decrement" });

describe("Counter with default values", () => {
  test("renders the counter at 0", () => {
    render(<Counter />);

    expect(counter("0")).toBeInTheDocument();
  });

  test("displays 2 buttons", () => {
    render(<Counter />);

    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  test("while clicking on the inc button increments the counter", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(incButton());

    expect(counter("1")).toBeInTheDocument();
  });

  test("while clicking on the dec button decrements the counter", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(decButton());

    expect(counter("-1")).toBeInTheDocument();
  });
});

describe("Counter with a step = 12", () => {
  test("renders the counter at 0", () => {
    render(<Counter step={12} />);

    expect(counter("0")).toBeInTheDocument();
  });

  test("displays 2 buttons", () => {
    render(<Counter step={12} />);

    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  test("while clicking on the inc button increments the counter", async () => {
    const user = userEvent.setup();
    render(<Counter step={12} />);

    await user.click(incButton());

    expect(counter("12")).toBeInTheDocument();
  });

  test("while clicking on the dec button decrements the counter", async () => {
    const user = userEvent.setup();
    render(<Counter step={12} />);

    await user.click(decButton());

    expect(counter("-12")).toBeInTheDocument();
  });
});
