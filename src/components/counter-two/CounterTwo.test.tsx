import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const HeadEl = screen.getByRole("heading");
    expect(HeadEl).toBeInTheDocument();

    const countEl = screen.getByText("Count-0");
    expect(countEl).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrHandler = jest.fn();
    const decrHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrHandler}
        handleDecrement={decrHandler}
      />
    );

    const incrBtn = screen.getByRole("button", { name: "Increment" });
    const decrBtn = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrBtn);
    await user.click(decrBtn);

    expect(incrHandler).toHaveBeenCalledTimes(1);
    expect(decrHandler).toHaveBeenCalledTimes(1);
  });
});
