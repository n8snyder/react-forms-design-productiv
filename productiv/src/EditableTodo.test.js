import EditableTodo from './EditableTodo';
import { defaultTodos } from './App';
import { render, fireEvent } from "@testing-library/react";

describe("EditableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo
      todo={defaultTodos[0]}
      update={() => { }}
      remove={() => { }} />);
  });

  it("snapshot", function () {
    const { container } = render(<EditableTodo
      todo={defaultTodos[0]}
      update={() => { }}
      remove={() => { }} />);
    expect(container).toMatchSnapshot();
  });

  it("should toggle form when editing and submitting form", function () {
    const { container } = render(<EditableTodo
      todo={defaultTodos[0]}
      update={() => { }}
      remove={() => { }} />);

    // Click edit button
    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);
    // Should no longer see todo, see form instead
    expect(container.querySelector(".Todo")).not.toBeInTheDocument();
    expect(container.querySelector(".TodoForm")).toBeInTheDocument();
    // Click submit
    const editForm = container.querySelector(".TodoForm");
    fireEvent.submit(editForm);
    // Should hide form, show the todo
    expect(container.querySelector(".EditableTodo")).toBeInTheDocument();
    expect(container.querySelector(".TodoForm")).not.toBeInTheDocument();
  });
});