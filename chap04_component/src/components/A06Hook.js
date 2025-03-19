import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { reducer, init } from './../reducer/A06Reducer'
/*
const reducer = (state, action) => {
  switch (action.type) {
    case 'A06HOOK/CHANGENUMBER':
      // action.payload => evt.target
      let value = Number(action.payload.value);
      if (Number.isNaN(value)) value = '';
      return { ...state, [action.payload.name]: value }
    case 'A06HOOK/CHANGESTRING':
      // action.payload => evt.target
      return { ...state, [action.payload.name]: action.payload.value }
    case 'A06HOOK/CHANGETODAY':
      return { ...state, today: new Date() }
    case 'A06HOOK/ADDLIST':
      if (state.avg >= 1) {
        const newList = state.list.concat(state.avg)
        return { ...state, list: newList }
      } else {
        return state;
      }

    default:
      return state;
  }
};
const init = {
  num: '',
  str: 'A',
  today: new Date(),
  avg: '',
  list: []
}
*/

function A06Hook() {
  // VM(View Model)을 통합
  // data => useReducer가 반환하는 값 (상태 변수 - getter)
  // dispatch => useReducer 첫번째 매개변수 함수에 대한 참조
  // useReducer 첫번째 매개변수 함수 => data 값을 변경할 로직
  // useReducer 두번째 매개변수 => 초기 data의 값

  const [data, dispatch] = useReducer(reducer, init)
  /*
  const [data, dispatch] = useReducer((state, action) => {
    // console.log(state);
    // console.log(action);

    switch (action.type) {
      case 'A06HOOK/CHANGENUMBER':
        // action.payload => evt.target
        let value = Number(action.payload.value);
        if (Number.isNaN(value)) value = '';
        return { ...state, [action.payload.name]: value }
      case 'A06HOOK/CHANGESTRING':
        // action.payload => evt.target
        return { ...state, [action.payload.name]: action.payload.value }
      case 'A06HOOK/CHANGETODAY':
        return { ...state, today: new Date() }
      case 'A06HOOK/ADDLIST':
        if (state.avg >= 1) {
          const newList = state.list.concat(state.avg)
          return { ...state, list: newList }
        } else {
          return state;
        }

      default:
        return state;
    }
  }, {
    num: '',
    str: 'A',
    today: new Date(),
    avg: '',
    list: []
  });
  */

  const changeNumber = useCallback((evt) => {
    dispatch({ type: 'A06HOOK/CHANGENUMBER', payload: evt.target })
  }, []);
  const changeString = useCallback((evt) => {
    dispatch({ type: 'A06HOOK/CHANGESTRING', payload: evt.target })
  }, []);
  const addList = useCallback(() => {
    dispatch({ type: 'A06HOOK/ADDLIST' })
  }, []);

  const getAverage = useMemo(() => {
    console.log('계산중2...');
    if (data.list.length === 0) return 0;
    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return total / data.list.length;
  }, [data.list])

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'A06HOOK/CHANGETODAY' })
    }, 1000);
  }, []);


  return (
    <div className="mb-5">
      <h3>A06 useReducer</h3>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control" onChange={changeNumber} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {data.today.toLocaleString()}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(' - ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
