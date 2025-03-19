import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

function A05Hook() {
  // 1. 상태 변수 - 값이 변경되면 해당 함수를 재 실행(리 렌더링)
  // 최초 1번만 등록된다.
  // const [getter, setter] = useState(초기화);
  const [data, setData] = useState({
    num: 0,
    str: '',
    avg: '',
    list: [],
  });
  const [today, setToday] = useState(new Date());


  // 4. 값 유지, DOM 요소 참조 => useRef(초기화)
  // 최초 1번만 등록. useState와는 달리 값 변경되도 화면 리렌더링은 하지 않는다
  const count = useRef(0);

  // 연결될 DOM 요소에 속성으로 ref = {numElem} 형태로 지정
  const numElem = useRef(null);

  // Event Handler
  // 2. 함수 자체를 메모이제이션 - useCallback( 함수 )
  // setter의 참조값도 초기값을 물고 올라간다. 즉 항상 초기값 기반으로 동작
  // 이벤트가 발생할때마다 data의 값은 { num: 0, str: '' }
  // 어떤 상태 변수가 변경될때마다 이 캐쉬화된 이벤트핸들러를 재 정의 할 것인가를
  // [변수명, 또는 Hook을 사용한 함수명] 형태로 기술

  /*
  const changeNumber = useCallback((evt) => {
    let value = Number(evt.target.value);
    if (Number.isNaN(value)) value = 0;
    // const newData = { ...data, num: value };
    // newData.num = value;
    // setData(newData);
    setData({ ...data, [evt.target.name]: value });
  }, [data]);

  const changeString = useCallback((evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }, [data]);
  */

  const changeNumber = useCallback((evt) => {
    // x는 setter가 참조하는 현재(변경된) getter의 값이다
    setData((x) => {
      // console.log(x)     // x는 현재 변경된 data의 값
      let value = Number(evt.target.value);
      if (Number.isNaN(value)) value = 0;
      return { ...x, [evt.target.name]: value }
    });
  }, []);

  const changeString = useCallback((evt) => {
    // setData({ ...data, [evt.target.name]: evt.target.value });
    setData((data) => {
      return { ...data, [evt.target.name]: evt.target.value }
    })
  }, []);

  const increase = useCallback(() => {
    count.current = count.current + 1;
  }, []);
  const decrease = useCallback((x) => {
    count.current = count.current - x;
  }, []);

  const addList = useCallback(() => {
    setData((data) => {
      const newList = data.list.concat(data.avg)
      return { ...data, list: newList }
    })
  }, []);

  // 5. 함수의 값을 메모이제이션 => useMemo
  // useMemo로 지정된 함수는 getter 형식으로 사용. 즉 프로퍼티 형태로 사용
  const getAverage = useMemo(() => {
    console.log('계산중...');
    if (data.list.length === 0) return 0;
    // list => [10, 11, 100]
    // 1실행 => acc => 0, item => 10, 실행 return 0 + 10
    // 2실행 => acc => 10, item => 11, 실행 return 10 + 11 => acc의 값
    // 2실행 => acc => 21, item => 100, 실행 return 21 + 100 => 반환
    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);

    return total / data.list.length;
  }, [data.list])


  // 3. LifeCycle Hook => useEffect(() => {}, cleanUp함수 )
  // DOM이 모두 구현된 후에 자동 실행 - 여러번 기술 가능
  // console.log('Hello');        // 리렌더링될때마다 무조건 실행된다

  // [] 없음 => 리렌더링될때마다 무조건 실행된다. 즉 useEffect를 구현하지 않은것과 동일
  // [] 빈배열 => 최초 1번만 실행
  // [상태변수 or hook 함수] => 최초 1번과 지정한 상태 변수, 함수가 변경될때만 재 실행
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date())
    }, 1000);
  }, [data.num]);

  useEffect(() => {
    // document.querySelector('input[name="num"]').style.backgroundColor = 'lightgray';
    // console.log(numElem.current)
    // numElem.current => document.querySelector('input[name="num"]')
    numElem.current.style.backgroundColor = 'orange';
  }, []);

  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        화면이 리렌더링되야 변경된 값이 표시된다: {count.current} <br />
        <button onClick={increase}>+</button>
        <button onClick={() => decrease(2)}>-</button>
      </div>

      <div className="mb-3">
        Num: {data.num + 1}
        <input type="text" name="num" className="form-control" ref={numElem}
          onChange={changeNumber} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {today.toLocaleString()}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(', ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
