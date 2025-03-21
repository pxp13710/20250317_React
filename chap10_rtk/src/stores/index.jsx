import { configureStore } from '@reduxjs/toolkit'
import countStore from './countStore.jsx'
import todoStore from './todoStore.jsx'
import contactStore from './contactStore.jsx'

const store = configureStore({
  // 값을 병합
  reducer: {
    countStore: countStore.reducer,
    todoStore: todoStore.reducer,
    contactStore: contactStore.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck: true => store에 넘어오는 값이 직렬화된 값이니?
    // evt.target 이런형태로 값이 넘어오면 직렬화가 안된 상태 => 에러 발생
    return getDefaultMiddleware({ serializableCheck: false })
  }
})
export default store;
