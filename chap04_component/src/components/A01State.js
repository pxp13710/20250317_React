import React, { useState } from "react"

function A01State() {
  // 상태변수 => 값(getter)이 변경되면 즉각 해당 함수를 재 실행
  // 선언방법
  // const [getter, setter] = useState(초기화);
  const [name, setName] = useState('');
  const [num, setNumber] = useState(0);
  const [check, setCheck] = useState(true);
  const [arr, setArray] = useState([10, 11]);
  const [user, setUser] = useState({ name: 'ABC', age: 10 });

  // setter를 이용해 값 변경
  const changeName = (x) => setName(x);
  const increase = () => setNumber(num + 1);
  const decrease = () => setNumber(num - 1);
  const changeCheck = () => setCheck(!check);

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    // const newArr = [...arr];
    // newArr.push(random);

    // const newArr = [...arr, random];

    const newArr = arr.concat(random);
    setArray(newArr)
  }

  const updateArray = (idx, value) => {
    /*
    const newArr = [...arr];
    newArr.splice(idx, 1, value);
    setArray(newArr)
    */
    const newArr = arr.map((item, i) => {
      /*
        if(idx === i) return value;
        else return item;
      */
      return (idx === i) ? value : item;
    });
    setArray(newArr)
  }

  const deleteArray = (idx) => {
    /*
    const newArr = [...arr];
    newArr.splice(idx, 1);
    setArray(newArr)
    */

    // filter => return true => 순환요소의 item이 반환, false면 반환 안하고 skip(제거)
    const newArr = arr.filter((item, i) => {
      return (idx !== i) ? true : false;
    });
    setArray(newArr)
  }

  const addObject = (key, value) => {
    /*
    const newUser = { ...user };
    newUser[key] = value;
    */

    const newUser = { ...user, [key]: value };
    setUser(newUser);
  }

  // add와 동일. key가 없으면 추가, 있으면 값 덮어쓰기
  const updateObject = (key, value) => {
    /*
    const newUser = { ...user };
    newUser[key] = value;
    */

    const newUser = { ...user, [key]: value };
    setUser(newUser);
  }

  const deleteObject = (key) => {
    delete user[key];
    const newUser = { ...user };
    setUser(newUser);
  }

  return (
    <div className="mb-5">
      <h3>A01State</h3>

      <div className="mb-3">
        Name: {name}<br />
        Number: {num}<br />
        Check: {check ? '동의' : '동의안함'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2] ?? 0} / {arr[3]}<br />
        Object: {user.name} / {user.age} / {user.address ?? 'Unknown'}<br />
      </div>

      <div className="mb-3">
        <button onClick={() => changeName('홍길동')}>Name</button>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={changeCheck}>Check</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(1, 2000)}>Update Array</button>
        <button onClick={() => deleteArray(1)}>Delete Array</button>

        <button onClick={() => addObject('address', '부산')}>Add Object</button>
        <button onClick={() => updateObject('address', '광주')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>
      </div>
    </div>
  )
}

export default A01State
