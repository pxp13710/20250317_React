// 기본은 useReducer를 외부로 분리한 형태

import { createAction, createReducer } from '@reduxjs/toolkit'

// Action
export const increaseAction = createAction('COUNT/INCREASE');
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
