/* eslint-disable no-unused-vars */
// 기본은 useReducer를 외부로 분리한 형태

// 3. createSlice 방식 => 동기, 비동기를 모두 지원 (redux + redux-thunk) 형태이다
// store의 index.jsx에 reducer의 { countStore: countStore, }를
//  { countStore: countStore: countStore.reducer, } 형태로 사용해야 한다
import { createSlice } from '@reduxjs/toolkit'

// 비동기 action은 여기에 정의. 값을 리턴 받아서 처리하는 구문은 

const countStore = createSlice({
  name: 'countStore',
  initialState: {
    storeName: 'Count Store',
    count: 0,
  },
  // 동기 처리 Action을 기술한다. export는 별도로 지정할 필요가 있다
  reducers: {
    increaseAction: (state, action) => {
      state.count = state.count + action.payload;
    },
    decreaseAction: (state) => {
      state.count = state.count - 1;
    },
  },
  // 비동기 처리. action은 위에 별도로 정의
  extraReducers: (builder) => {
    // 각 Action별로 loading, fulfiled, error에 따른 정의를 한다
  }
})
export default countStore;

// 동기 action은 별도로 export
export const { increaseAction, decreaseAction } = countStore.actions;



/*
// 1, 2방식 모두 동기만 가능. 비동기는 다른 미들웨어 redux-thunk 등을 이용해야 한다
// 2. createAction, createReducer 방식
import { createAction, createReducer } from '@reduxjs/toolkit'

// Action 
// dispatch로 호출시 전달한 값을 그대로 store에 전달
// export const increaseAction = createAction('COUNT/INCREASE');

export const increaseAction = createAction('COUNT/INCREASE', (no) => {
  let value = Number(no + 1);
  if (Number.isNaN(value)) value = 0;
  return { payload: value }
});
export const decreaseAction = createAction('COUNT/DECREASE');

const init = {
  storeName: 'Count Store',
  count: 0,
}
// createReducer 내부 state 변경은 immer 방식으로 구현
const countStore = createReducer(init, (builder) => {
  builder.addCase(increaseAction, (state, action) => {
    state.count = state.count + action.payload;
  });
  builder.addCase(decreaseAction, (state) => {
    state.count = state.count - 1;
  });
})
export default countStore;
*/

/*
// 1. 기존 Redux 방식으로 구현
// Action - 외부에서 호출할 메서드
// countStore의 action에 전달할 값을 리턴 
export const increaseAction = (no) => {
  return { type: 'COUNT/INCREASE', payload: no }
}
export const decreaseAction = () => {
  return { type: 'COUNT/DECREASE' }
}

// 기본값
const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = (state = init, action) => {
  switch (action.type) {
    case 'COUNT/INCREASE':
      return { ...state, count: state.count + action.payload }
    case 'COUNT/DECREASE':
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}
export default countStore;
*/
