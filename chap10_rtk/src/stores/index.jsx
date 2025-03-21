import { configureStore } from '@reduxjs/toolkit'
import countStore from './countStore.jsx'
const store = configureStore({
  // 값을 병합
  reducer: {
    countStore,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck: true => store에 넘어오는 값이 직렬화된 값이니?
    return getDefaultMiddleware({ serializableCheck: true })
  }
})
export default store;
