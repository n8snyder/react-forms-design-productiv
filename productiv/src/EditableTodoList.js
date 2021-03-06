import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  return (
    <div className="EditableTodoList">
      {todos.map(t => {
        return <EditableTodo todo={t} update={update} remove={remove} key={t.id} />
      })}
    </div>
  );
}

export default EditableTodoList;
