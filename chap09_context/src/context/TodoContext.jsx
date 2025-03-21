/* eslint-disable no-unused-vars */
// TodoContext.jsx
import { createContext, useCallback, useRef, useState } from 'react'
const TodoContext = createContext({
  state: {
    todoList: [],
    text: ''
  },
  action: {
    updateTodo: (id) => { },
    deleteTodo: (id) => { },
    addTodo: (text) => { },
    changeText: (text) => { },
  }
});

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
}

const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState(makeTodo());
  const [text, setText] = useState('');

  const cnt = useRef(6);

  const changeText = useCallback((text) => setText(text), []);

  const updateTodo = useCallback((id) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) return { ...todo, done: !todo.done }
        else return todo;
      });
    });
  }, []);
  const deleteTodo = useCallback(id => {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  }, []);
  const addTodo = useCallback((text) => {
    const todo = { id: cnt.current++, text, done: false }
    setTodoList(todoList => todoList.concat(todo))
  }, []);


  const value = {
    state: { todoList, text },
    action: { updateTodo, deleteTodo, addTodo, changeText }
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  )
};
export { TodoContext, TodoContextProvider }