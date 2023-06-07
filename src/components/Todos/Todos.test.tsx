import { render, screen } from "@testing-library/react";
import Todos from "./Todos";
import { TodoProps } from "./Todos.types";

describe("Todos", () => {
  const mockTodo: TodoProps = {
    id: 5,
    task: "Clean BathRoom",
    created: "9-Feb-23 10:15:00AM",
    due: "9-Feb-23 10:15:00AM",
  };
  test("Renders Correctly", () => {
    render(<Todos {...mockTodo} />);

    const todoHead = screen.getByRole("heading", { level: 2 });
    expect(todoHead).toHaveTextContent(mockTodo.task);

    const todoId = screen.getByRole("heading", { level: 4 });
    expect(todoId).toHaveTextContent(String(mockTodo.id));

    const createdEL = screen.getByText("Created: 9-Feb-23 10:15:00AM");
    expect(createdEL).toHaveTextContent(`Created: ${mockTodo.created}`);

    const dueEL = screen.getByText("Due: 9-Feb-23 10:15:00AM");
    expect(dueEL).toHaveTextContent(`Due: ${mockTodo.due}`);
  });
});
