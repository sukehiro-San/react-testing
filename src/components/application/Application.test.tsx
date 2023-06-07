import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeadEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadEl).toBeInTheDocument();

    const sectionHeadEl = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeadEl).toBeInTheDocument();

    const nameEl4 = screen.getByDisplayValue("Sunny");
    expect(nameEl4).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const altEl = screen.getByAltText("a person");
    expect(altEl).toBeInTheDocument();

    const testIDEl = screen.getByTestId("custom-element");
    expect(testIDEl).toBeInTheDocument();

    const titleEl = screen.getByTitle("close");
    expect(titleEl).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", { name: "Bio" });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
  });
});
