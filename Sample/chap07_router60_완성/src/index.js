import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router 기능을 사용하는 컴포넌트를 묶는다 => App.js의 Root Tag로 기술해도 된다
// BrowserRouter => 일반적인 패스, 히스토리 관리
// HashRouter => address/#/path/
// MemoryRouter => 메모리를 사용해서 패스 관리(모바일)
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: false, }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
