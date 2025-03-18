import React, { useState } from 'react'

// function A02Props({today, btnName}) {
function A02Props(props) {
  // console.log(props);
  const { today = '', btnName = 'ADD', name = 'Unknown', changeName = () => { } } = props;
  const [num, setNumber] = useState(10);

  const changeNumber = () => setNumber(num + 1);

  const getToday = () => {
    const now = new Date();

    switch (today) {
      case 'date':
        return now.toLocaleDateString();
      case 'time':
        return now.toLocaleTimeString();
      default:
        return now.toLocaleString();
    }
  }

  return (
    <div className="mb-5">
      <h3>A02Props</h3>

      <div className="mb-3">
        Today: {getToday()}<br />
        Number(state): {num}<br />
        Name: {name}<br />
      </div>

      <div className="mb-3">
        <button>{btnName}</button>
        <button onClick={changeNumber}>Num</button>
        <button onClick={() => changeName('흥부')}>Name</button>
      </div>
    </div>
  )
}

export default A02Props