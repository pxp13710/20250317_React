import React from "react";
import "./css/todos.css";

function TodoListItem(props) {
  const { todo, updateTodo, deleteTodo } = props;

  return (
    <tr>
      <td></td>
      <td>
        <span></span>
      </td>
      <td>
        <button className="btn btn-primary">Complete</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);
