import React, { useCallback, useState } from "react";

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      arr: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback((x) => {
    // const newData = { ...person, name: x };
    // setPerson(newData);

    setPerson((data) => { // data => person을 의미
      return { ...data, name: x };
    });
  }, []);
  const changeAddress = useCallback((x) => {
    setPerson((data) => { // data => person을 의미
      const newData = {
        ...data, // ...person
        info: {
          ...data.info, // ...person 내부의 info를 새롭게 생성
          address: x,
        }
      }
      return newData
    });
  }, []);
  const changeOne = useCallback(() => {
    setPerson((data) => { // data => person을 의미
      const newData = {
        ...data,
        info: {
          ...data.info,
          etc: {
            ...data.info.etc,
            one: '복잡하기도 하다...'
          }
        }
      }
      return newData
    });
  }, []);
  const addArray = useCallback(() => {
    setPerson((data) => { // data => person을 의미
      const random = Math.ceil(Math.random() * 100);
      const newArr = data.info.arr.concat(random);

      const newData = {
        ...data,
        info: {
          ...data.info,
          arr: newArr
        }
      }
      return newData
    });
  }, []);



  return (
    <div className="mb-5">
      <h3>A08 Immer</h3>

      <div className="mb-3">
        Name: {person.name}
        <br />

        Address: {person.info.address}
        <br />

        One: {person.info.etc.one}
        <br />

        Ary:{" "}
        {person.info.arr.map((item, i) => (
          <span key={i}>{item} </span>
        ))}
      </div>

      <div className="mb-3">
        <button onClick={() => changeName('홍길동')}>Name</button>
        <button onClick={() => changeAddress('서울')}>Address</button>
        <button onClick={changeOne}>One</button>
        <button onClick={addArray}>ADD</button>
        <br />

        <button>Name</button>
        <button>Address</button>
        <button>One</button>

        <button>ADD</button>
        <button>UPDATE</button>
        <button>DELETE</button>
      </div>
    </div>
  );
}
export default A08Immer;
