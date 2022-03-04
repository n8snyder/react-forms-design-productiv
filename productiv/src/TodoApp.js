import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos([...todos, newTodo])
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos.map(t => {
      return t.id === updatedTodo.id ? updatedTodo : t
    }));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  const editableTodosHTML = todos.length > 0
    ? <EditableTodoList todos={todos} update={update} remove={remove} />
    : <span className="text-muted">You have no todos.</span>

  const topTodoHTML = todos.length > 0
    ? (
      <section className="mb-4">
        <h3>Top Todo</h3>
        <TopTodo todos={todos} />
      </section>
    )
    : "";

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {editableTodosHTML}
        </div>

        <div className="col-md-6">
          {topTodoHTML}
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;