import React from "react";
import TodoListItem from './TodoListItem'

// props는 읽기 전용 속성이다
function Todolist(props) {
  const { todoList = [], updateTodo = () => { }, deleteTodo = () => { } } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th>Todo</th>
            <th style={{ width: "10%" }}>Complete</th>
            <th style={{ width: "10%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* todo => {id: 1, text: '첫번째 할 일', done: false } */}
          {todoList.map(todo =>
            <TodoListItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}

          {/* {todoList.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td>수정</td>
              <td>삭제</td>
            </tr>
          ))} */}

        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
