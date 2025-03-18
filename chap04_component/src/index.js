import React from 'react';
import ReactDOM from 'react-dom/client';
// 프로젝트 전체에서 사용할 CSS 파일 로드
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

