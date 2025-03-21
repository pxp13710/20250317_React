import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Action
import { increaseAction, decreaseAction } from './../stores/countStore'

function Counter() {
  // const count = useSelector(store => store.countStore);
  // console.log(count)
  const { storeName, count } = useSelector(store => store.countStore);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {storeName}: {count}
      </h3>
      <button onClick={() => dispatch(increaseAction(3))}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  );
}
export default Counter;
