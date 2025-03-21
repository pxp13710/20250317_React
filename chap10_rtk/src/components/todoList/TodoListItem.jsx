import React, { memo } from 'react';
import style from '@css/todos.module.css'
import { useDispatch } from 'react-redux';

import { updateTodoAction, deleteTodoAction } from '@stores/todoStore'

function TodoListItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? style.done : ''}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => dispatch(updateTodoAction(todo.id))}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => dispatch(deleteTodoAction(todo.id))}>Delete</button>
      </td>
    </tr>
  );
}
export default memo(TodoListItem);
