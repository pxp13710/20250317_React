/*
  npm i bootstrap sweetalert2
  npm i react-router-dom@6 axios

  npm i @reduxjs/toolkit react-redux
  이전 npm i redux redux-thunk(redux-saga) react-redux
  대체 라이브러리 => npm i recoil 또는 zustand
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import { RouterProvider } from 'react-router-dom'
import router from './router'

import { Provider } from 'react-redux'

// toolkit 설정
import store from './stores/index.jsx'
/*
import { configureStore } from '@reduxjs/toolkit'
import countStore from './stores/countStore.jsx'
const store = configureStore({
  // 값을 병합
  reducer: {
    countStore: countStore,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck: true => store에 넘어오는 값이 직렬화된 값이니?
    return getDefaultMiddleware({ serializableCheck: true })
  }
})
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

