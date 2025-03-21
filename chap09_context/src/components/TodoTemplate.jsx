import React from "react";
import Todolist from "./TodoList";
import TodoForm from "./TodoForm";

const TodoTemplate = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <TodoForm></TodoForm>
        <br />
        <Todolist></Todolist>
      </div>
    </div>
  );
};
export default TodoTemplate;
