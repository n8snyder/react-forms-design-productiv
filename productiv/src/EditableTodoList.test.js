import EditableTodoList from './EditableTodoList';
import { defaultTodos } from './App';
import { render } from "@testing-library/react";

describe("EditableTodoList", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList 
      todos={defaultTodos} 
      update={()=>{}} 
      remove={()=>{}}/>);
  });

  it("snapshot", function () {
    const { container } = render(<EditableTodoList 
      todos={defaultTodos} 
      update={()=>{}} 
      remove={()=>{}}/>);
    expect(container).toMatchSnapshot();
  });

  it("display three EditableTodos", function () {
    const { container } = render(<EditableTodoList 
      todos={defaultTodos} 
      update={()=>{}} 
      remove={()=>{}}/>);
    expect(container.querySelectorAll(".EditableTodo").length).toEqual(3);
    expect(container.querySelector(".EditableTodoList")).toBeInTheDocument();
    
  });

});