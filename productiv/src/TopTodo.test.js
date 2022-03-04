import TopTodo from './TopTodo';
import { defaultTodos } from './App';
import { render } from "@testing-library/react";

describe("Todo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={defaultTodos}/>);
  });

  it("snapshot", function () {
    const { container } = render(<TopTodo todos={defaultTodos}/>);
    expect(container).toMatchSnapshot();
  });

  it("presentation of Todo", function(){
    const { container } = render(<TopTodo todos={defaultTodos}/>);
    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container.querySelector(".Todo")).toContainHTML("priority: 1");
    expect(container.querySelector(".Todo")).not.toContainHTML("priority: 4");
  });
});