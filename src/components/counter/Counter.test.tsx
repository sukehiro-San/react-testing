import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toBeInTheDocument();

    const incrBtnEl = screen.getByRole("button", { name: "Increment" });
    expect(incrBtnEl).toBeInTheDocument();
  });

  test("renders a count of O", () => {
    render(<Counter />);
    const countEL = screen.getByRole("heading");
    expect(countEL).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrBtn = screen.getByRole("button", { name: /increment/i });
    await user.click(incrBtn);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrBtn = screen.getByRole("button", { name: /increment/i });
    await user.dblClick(incrBtn);

    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("2");
  });

  test("renders a count of 10 after input 10 and clicking set btn", async () => {
    user.setup();
    render(<Counter />);

    const inpBox = screen.getByRole("textbox");
    await user.type(inpBox, "10");
    expect(inpBox).toHaveValue("10");
    const setBtn = screen.getByRole("button", { name: "Set" });
    await user.click(setBtn);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInp = screen.getByRole("textbox");
    const setBtn = screen.getByRole("button", { name: "Set" });
    const incrBtn = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrBtn).toHaveFocus();

    await user.tab();
    expect(amountInp).toHaveFocus();

    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
