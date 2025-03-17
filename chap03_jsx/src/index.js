// 프로젝트 전체 설정 사항을 기술
import React from 'react';
import ReactDOM from 'react-dom/client';

// 프로젝트 전체에서 사용할 CSS 파일(통파일)
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// 전체 View를 통합한 파일(실질적인 View 파일)
// 반환값이 JSX(JavaScript XML) 형식의 파일을 import 하는 경우
// 첫 글자를 대문자로 정의하면 사용자 정의 태그로 변경
import App from './App';
// import reportWebVitals from './reportWebVitals';

// StrictMode은 잘못된 사용법이나 폐지된 명령을 사용하면 경고 출력
// 빌드시 삭제된다.
// 제거하고 시작해도 됨
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {App()} */}
    <App />
  </React.StrictMode>
);

// reportWebVitals(console.log);
