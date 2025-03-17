import React from 'react';
import TodoForm from './../components/todoList/TodoForm';
import TodoList from './../components/todoList/TodoList';

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
