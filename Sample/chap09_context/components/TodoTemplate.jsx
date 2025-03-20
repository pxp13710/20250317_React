import React from "react";
import Todolist from "./TodoList";
import TodoForm from "./TodoForm";

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
}

const TodoTemplate = () => {
  /*
  const [todoList, setTodoList] = useState(makeTodo());
  const cnt = useRef(6);

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
  */

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
