import React, { useState } from 'react'

// Vite로 작성한 프로젝트는 설치해야 한다
// npm i prop-types
import CheckTypes from 'prop-types'

// function A02Props({today, btnName}) {
function A02Props(props) {
  // console.log(props);
  const {
    today = '', btnName = 'ADD', name = 'Unknown', changeName = () => { },
    age = 0, address = 'Busan', check = true
  } = props;
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
        Age: {age + 1}<br />
        Address: {address}<br />
        Check: {check ? '동의' : '동의 안함'}<br />
      </div>

      <div className="mb-3">
        <button>{btnName}</button>
        <button onClick={changeNumber}>Num</button>
        <button onClick={() => changeName('흥부')}>Name</button>
      </div>
    </div>
  )
}

A02Props.propTypes = {
  today: CheckTypes.number.isRequired,
  btnName: CheckTypes.number,
}

// 사용하지 않음(deprecated)
/*
  A02Props.defaultProps = {
    today: 'date'
  }
*/

export default A02Props