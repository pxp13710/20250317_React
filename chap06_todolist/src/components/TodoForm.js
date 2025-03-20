// 비제어 컴포넌트
import React, { useCallback } from "react";

function TodoForm(props) {
  const { addTodo } = props;

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    const todoElem = document.querySelector('input[name="todo"]');
    if (todoElem.value !== '') {
      addTodo(todoElem.value);
      todoElem.value = '';
      todoElem.focus();
    }
  }, [addTodo]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" name="todo" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;


/*
// 제어컴포넌트
import React, { useCallback, useRef, useState } from "react";

function TodoForm(props) {
  const { addTodo } = props;

  const [text, setText] = useState('');
  const todoRef = useRef(null);

  const changeText = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    if (text.trim() !== '') {
      addTodo(text); // text가 onChange에 의해 값이 변경되었다는 가정하에 실행
      setText('');
      // document.querySelector('input[name="todo"]').focus();
      todoRef.current.focus();
    }
  }, [text, addTodo]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" name="todo" ref={todoRef}
          value={text} onChange={changeText} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
*/
