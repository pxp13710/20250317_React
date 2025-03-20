import React, { useCallback, useState } from "react";
import { produce } from 'immer'

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

  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return produce(todoList, draft => {
        const idx = todoList.findIndex(todo => todo.id === id);
        draft[idx].done = !draft[idx].done;
      })
    });
  }, []);
  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      const idx = todoList.findIndex(todo => todo.id === id);
      return produce(todoList, draft => {
        draft.splice(idx, 1)
      })
    });
  }, []);
  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      const cnt = todoList.at(-1) ? todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text, done: false };
      return produce(todoList, draft => {
        draft.push(todo);
      })
    });
  }, []);

  /*
  // todo => [ {id: 1, text: '첫번째 할 일', done: false } ]
  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return todoList.map(todo => {
        return (todo.id === id) ? { ...todo, done: !todo.done } : todo;
      });
    });
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return todoList.filter((todo) => {
        return (todo.id !== id) ? true : false;
      });
    });
  }, []);

  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      // ES2015+ => at
      const cnt = todoList.at(-1) ? todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text, done: false };
      return todoList.concat(todo);
    });
  }, []);
  */

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
};
export default TodoTemplate;
