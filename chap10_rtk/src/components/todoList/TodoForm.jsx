import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoAction, changeTextAction } from '@stores/todoStore'

function TodoForm() {
  const { text } = useSelector(store => store.todoStore);
  const dispach = useDispatch();

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    dispach(addTodoAction(text));
    dispach(changeTextAction(''));
    document.querySelector('input').focus();
  }, [dispach, text])

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control"
          value={text} onChange={(evt) => dispach(changeTextAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
