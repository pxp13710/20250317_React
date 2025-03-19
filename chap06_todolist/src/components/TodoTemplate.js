import React, { useState } from "react";
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState(makeTodo());

  // todo => [ {id: 1, text: '첫번째 할 일', done: false } ]
  const updateTodo = (id) => {
    const todos = todoList.map(todo => {
      if (todo.id === id) {
        const newTodo = { ...todo, done: !todo.done }
        return newTodo;
      } else {
        return todo;
      }
    });
    setTodoList(todos);
  }

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo}></TodoList>
    </div>
  );
};
export default TodoTemplate;
