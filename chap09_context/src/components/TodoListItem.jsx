import React, { useContext } from "react";
import "./css/todos.css";
import { TodoContext } from './../context/TodoContext.jsx'

function TodoListItem(props) {
  const { todo } = props;
  const { action } = useContext(TodoContext);

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => action.updateTodo(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => action.deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);
