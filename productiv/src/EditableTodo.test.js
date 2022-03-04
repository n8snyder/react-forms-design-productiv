import EditableTodo from './EditableTodo';
import { defaultTodos } from './App';
import { render } from "@testing-library/react";

describe("EditableTodoList", function () {
  it("renders without crashing", function () {
    render(<EditableTodo 
      todo={defaultTodos[0]} 
      update={()=>{}} 
      remove={()=>{}}/>);
  });

  // it("snapshot", function () {
  //   const { container } = render(<EditableTodo 
  //     todos={defaultTodos} 
  //     update={()=>{}} 
  //     remove={()=>{}}/>);
  //   expect(container).toMatchSnapshot();
  // });

  // it("display three EditableTodos", function () {
  //   const { container } = render(<EditableTodo 
  //     todos={defaultTodos} 
  //     update={()=>{}} 
  //     remove={()=>{}}/>);
  //   expect(container.querySelectorAll(".EditableTodo").length).toEqual(3);
  //   expect(container.querySelector(".EditableTodoList")).toBeInTheDocument();
    
  // });

});