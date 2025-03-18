// 연습은 AppTest.js에 정의
import React, { useState } from "react"
import logo from './logo.svg';
import capetown from './assets/images/capetown.jpg'

import A01 from './components/A01Comp'
import A02Fragment from './components/A02Fragment'
import A03Library from './components/A03Library'

// 일반 변수 - React가 관여하지 않는 변수. 변경하면 값은 변경된 상태

const arr = [10, 11];
const user = { name: 'ABC', age: 20 };
const check = true;
const num = 1000;

const addArray = () => arr.push(100);
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
const makeDOM = () => {
  return <div className="mb-3">
    <h3>makeDOM Function</h3>
    <div>Good Morning!!!</div>
  </div>
}

const MakeDOM = () => {
  return <div className="mb-3">
    <h3>MakeDOM Function</h3>
    <div>Good Morning!!!</div>
  </div>
}

// JSX의 태그의 속성은 JavaScript 속성을 따른다
function App() {
  // 일반변수
  let name = '놀부';
  const changeName = () => name = '변경 안됨';

  // 상태변수
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);

  return (
    <div className="m-3">
      <h1>Chap03 JSX / {count}</h1>
      <div className="mb-3">
        This is Content!!!
      </div>

      <div className="mb-3">
        Name: {name}<br />
        Number: {num}<br />
        Check: {check ? '동의' : '동의 안함'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        Object: {user.name} / {user.age} / {user.address}<br />
        Function: {onAdd(10, 20)}<br />
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={addArray}>ADD</button>
        <button onClick={increase}> + </button>
      </div>

      <A03Library />

      <A02Fragment />

      {makeDOM()}

      <MakeDOM />

      <A01 />

      <div className="mb-3">
        <img src={logo} width="80" alt="logo" />
        <img src={capetown} width="80" alt="capetown" />
        <img src="images/machu.jpg" width="80" alt="machu" />
      </div>
    </div>
  );
}

export default App;
