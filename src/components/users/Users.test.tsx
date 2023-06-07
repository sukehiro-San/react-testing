import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../Mocks/server";
import Users from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textEl = screen.getByText("Users");
    expect(textEl).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("Renders Error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500),ctx.json({errMess:"Something went wrong..."}));
        }
      )
    );
    render(<Users />);
    const errorTxt = await screen.findByText("Something went wrong...");
    expect(errorTxt).toBeInTheDocument();
  });
});
