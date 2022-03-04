import TodoApp from './TodoApp';
import { render } from "@testing-library/react";

describe("TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it("snapshot", function () {
    const { container } = render(<TodoApp />);
    expect(container).toMatchSnapshot();
  });

  it("initial state is empty", function(){
    const { container } = render(<TodoApp />);
    expect(container.querySelector("h3")).toContainHTML("Add Nü");
    expect(container.querySelector("span")).toContainHTML("You have no todos.");
    expect(container.querySelector(".Todo")).not.toBeInTheDocument();
    expect(container.querySelector(".TopTodo")).not.toBeInTheDocument();
  })
});