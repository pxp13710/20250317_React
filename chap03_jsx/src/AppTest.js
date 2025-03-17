// 1. JSX는 ""로 묶지 않는다. 일반 태그처럼 사용
/*
const App = function () {
  return <h1>JSX - JavaScript XML</h1>;
};
export default App;
*/

/*
const elem = <h1>JSX - JavaScript XML 02</h1>;
const App = () => {
  return elem;
};
export default App;
*/

// 2. return되는 JSX는 단일 태그만 허용한다 (전체 view를 하나의 태그로 묶는다)
const One = function () {
  /* 
  // return <div> 로 시작은 OK
  return <div>
    <h1>JSX - JavaScript XML 03</h1>
    <div>This is Content</div>;
  </div>

  // 이렇게 return 개행 형태로 사용하면 에러
    return
      <div>
        <h1>JSX - JavaScript XML 03</h1>
        <div>This is Content</div>;
      </div>
  */

  // 따라서 View를 보통 ()로 묶어 처리한다
  return (
    <div>
      <h1>JSX - JavaScript XML 03</h1>
      <div>This is Content</div>;
    </div>
  )
};
// export default One;

const elem = (
  <div>
    <h1>JSX - JavaScript XML 04</h1>
    <div>This is Content</div>;
  </div>
)
const Two = function () {
  return elem;
}
export default Two;

