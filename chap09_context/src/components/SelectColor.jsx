import React, { useContext } from 'react'
import ColorContext from './../context/ColorContext.jsx'
import { SelectContext } from './../context/SelectContext.jsx'

function SelectColor() {
  const { color, setColor, contextName } = useContext(ColorContext);
  const { state, action } = useContext(SelectContext);

  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  return (
    <div>
      <div className="mb-5">
        <h3>{contextName}</h3>

        <div>
          Color: {color} <br />
          <button onClick={() => setColor('RED')}>COLOR</button>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div>
          Color: {state.color}<br />
        </div>

        {colors.map(color =>
          <div key={color} style={{ ...style, background: color }}
            onClick={() => action.setColor(color)}>{color}</div>)}
      </div>
    </div>
  )
}
export default SelectColor
