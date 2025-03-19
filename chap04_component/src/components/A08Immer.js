import React, { useCallback, useState } from "react";

// npm i immer
import { produce } from 'immer' // 10.X
// import produce from 'immer'  // 9.X

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


  const changeNameImmer = useCallback((x) => {
    /*
    const newData = produce(person, (draft) => {
      draft.name = x;
    });
    setPerson(newData);
    */
    setPerson((data) => { // data => person
      const newData = produce(data, (draft) => {
        draft.name = x;
      });
      return newData;
    })
  }, []);
  const changeAddressImmer = useCallback((x) => {
    setPerson((data) => { // data => person
      return produce(data, (draft) => {
        draft.info.address = x;
      });
    })
  }, []);
  const changeOneImmer = useCallback(() => {
    setPerson((data) => { // data => person
      return produce(data, (draft) => {
        draft.info.etc.one = '간단하다...';
      });
    })
  }, []);
  const addArrayImmer = useCallback(() => {
    setPerson((data) => { // data => person
      const random = Math.ceil(Math.random() * 100);
      return produce(data, (draft) => {
        draft.info.arr.push(random);
      });
    })
  }, []);
  const updateArrayImmer = useCallback((idx, value) => {
    setPerson((data) => { // data => person
      return produce(data, (draft) => {
        draft.info.arr[idx] = value;
      });
    })
  }, []);
  const deleteArrayImmer = useCallback((idx) => {
    setPerson((data) => { // data => person
      return produce(data, (draft) => {
        draft.info.arr.splice(idx, 1);
      });
    })
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

        <button onClick={() => changeNameImmer('놀부')}>Name</button>
        <button onClick={() => changeAddressImmer('부산')}>Address</button>
        <button onClick={changeOneImmer}>One</button>

        <button onClick={addArrayImmer}>ADD</button>
        <button onClick={() => updateArrayImmer(1, 2000)}>UPDATE</button>
        <button onClick={() => deleteArrayImmer(1)}>DELETE</button>
      </div>
    </div>
  );
}
export default A08Immer;
