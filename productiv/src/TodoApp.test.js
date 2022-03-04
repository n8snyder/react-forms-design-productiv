import TodoApp from './TodoApp';
import { defaultTodos } from './App';
import { render } from "@testing-library/react";

describe("TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it("snapshot", function () {
    const { container } = render(<TodoApp />);
    expect(container).toMatchSnapshot();
  });

  it("doesn't display when no todos", function () {
    const { container } = render(<TodoApp />);
    expect(container.querySelector(".TodoForm")).toBeInTheDocument();
    expect(container.querySelector("span")).toContainHTML("You have no todos.");
    expect(container.querySelector(".Todo")).not.toBeInTheDocument();
    expect(container.querySelector(".TopTodo")).not.toBeInTheDocument();
  });

  it("displays todos", function () {
    const { container } = render(<TodoApp initialTodos={defaultTodos} />);
    expect(container.querySelector(".EditableTodoList")).toBeInTheDocument();
    expect(container.querySelectorAll(".EditableTodo").length).toEqual(3);
    expect(container.querySelector(".TopTodo")).toBeInTheDocument();
  });
});