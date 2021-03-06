import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State
 * - showTodo: boolean used for displaying todo or edit form
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [showTodo, setShowTodo] = useState(true);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setShowTodo(!showTodo);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update(formData);
  }

  return (
    <div className="EditableTodo">
      {showTodo &&
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo todo={todo} />
        </div>
      }

      {!showTodo &&
        <TodoForm handleSave={handleSave} initialFormData={todo} />
      }
    </div>
  );
}

export default EditableTodo;
