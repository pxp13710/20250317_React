import React, { memo } from "react";
import style from "./css/todos.module.css";

function TodoListItem(props) {
  const { todo = {}, updateTodo, deleteTodo } = props;

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? style.done : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
export default memo(TodoListItem);
