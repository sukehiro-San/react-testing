import { logRoles, render, screen } from "@testing-library/react";
import { MockSkills } from "./MockData";
import Skills from "./Skills";

describe("Skills Tests", () => {
  test("Component Renders Correctly", () => {
    render(<Skills skills={MockSkills} />);

    const skillsList = screen.getByRole("list");
    expect(skillsList).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={MockSkills} />);

    const skillListItems = screen.getAllByRole("listitem");
    expect(skillListItems).toHaveLength(MockSkills.length);
  });

  test("renders a login button", () => {
    render(<Skills skills={MockSkills} />);

    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("renders a start learning button", () => {
    render(<Skills skills={MockSkills} />);

    const STLBtn = screen.queryByRole("button", { name: "Start Learning" });
    expect(STLBtn).not.toBeInTheDocument();
  });

  test("start learning button eventually renders", async () => {
    const view = render(<Skills skills={MockSkills} />);
    logRoles(view.container);
    screen.debug();
    const STLBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 1200 }
    );
    expect(STLBtn).toBeInTheDocument();
  });
});
