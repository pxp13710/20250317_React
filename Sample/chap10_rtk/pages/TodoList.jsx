import React from 'react';
import TodoForm from './../components/todoList/TodoForm.jsx';
import TodoList from './../components/todoList/TodoList.jsx';

const TodoTemplate = () => {
  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm />
      <TodoList />
    </div>
  );
};
export default TodoTemplate;
