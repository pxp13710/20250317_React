const increaseAction = (no) => {
  // 선처리 작업이 이루어진다
  return { type: 'COUNT/INCREASE', payload: no }
}
const decreaseAction = () => {
  return { type: 'COUNT/DECREASE' }
}

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


const configureStore = (storeFunc) => {
  let state = storeFunc(undefined, ''); // 초기화
  // console.log(state)

  // useSelector
  const getState = () => {
    return state;
  }

  // dispatch
  const dispatch = (action) => {
    console.log(action)
    state = storeFunc(state, action);

    // 참조 컴퍼넌트에 Event 전달
  }

  return { getState, dispatch };
}

const store = configureStore(countStore);
console.log(store.getState());

store.dispatch(increaseAction(3))
console.log(store.getState());

store.dispatch(decreaseAction())
console.log(store.getState());