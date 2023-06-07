import { render, screen } from "../../test-utls";
import MuiMode from "./Mui-mode";

describe("MuiMode", () => {
  test("renders correctly", () => {
    render(<MuiMode />);

    const headingEl = screen.getByRole("heading");
    expect(headingEl).toHaveTextContent("dark mode");
  });
});
