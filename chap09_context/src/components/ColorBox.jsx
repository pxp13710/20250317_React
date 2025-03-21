import React, { useContext } from "react";
import ColorContext from './../context/ColorContext.jsx'
import { SelectContext } from './../context/SelectContext.jsx'

function ColorBox() {
  // const context = useContext(ColorContext);
  // console.log(context);
  const { color, setColor, contextName } = useContext(ColorContext);
  const { state, action } = useContext(SelectContext);

  return (
    <div>
      <div className="mb-5">
        <h3>{contextName}</h3>

        <div>
          Color: {color} <br />
          <button onClick={() => setColor('RED')}>COLOR</button>
        </div>
      </div>

      <div className="mb-5">
        <h3>{state.contextName}</h3>

        <div>
          Color: {state.color} <br />
          <button onClick={() => action.setColor('검정색')}>COLOR</button>
        </div>
      </div>
    </div>
  );
}
export default ColorBox;
