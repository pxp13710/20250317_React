// 연습은 AppTest.js에 정의
import logo from './logo.svg';
import capetown from './assets/images/capetown.jpg'

// JSX의 태그의 속성은 JavaScript 속성을 따른다
function App() {
  return (
    <div className="m-3">
      <h1>Chap03 JSX</h1>
      <div className="mb-3">
        This is Content!!!
      </div>

      <div className="mb-3">
        <img src={logo} width="80" alt="logo" />
        <img src={capetown} width="80" alt="capetown" />
        <img src="images/machu.jpg" width="80" alt="machu" />
      </div>
    </div>
  );
}

export default App;
