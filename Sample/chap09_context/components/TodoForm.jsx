import React, { useCallback, useRef, useState } from 'react'

function TodoForm() {
  const inputFiled = useRef();
  const [text, setText] = useState('');
  const changeText = useCallback( (evt) => setText(evt.target.value), [] )
  
  const sendData = (evt) => {
    evt.preventDefault()
  }
  
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled} value={text} onChange={changeText} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>  
    </form>
  )
}
export default TodoForm;
