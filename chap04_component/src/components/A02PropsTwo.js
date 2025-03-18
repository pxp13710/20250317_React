import React, { useState } from 'react'

function A02PropsTwo(props) {
  const { name = 'UNKNOWN', changeName = () => { } } = props;

  const [num, setNumber] = useState(100);
  const changeNumber = () => setNumber(num + 2);

  return (
    <div className="mb-5">
      <h3>A02PropsTwo</h3>

      <div className="mb-3">
        Name: {name}<br />
        Num: {num}<br />
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={changeNumber}>Num</button>
      </div>

      <div>
        {props.children}
      </div>
    </div>
  )
}

export default A02PropsTwo