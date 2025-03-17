// npm i react-router-dom react-loader-spinner(로딩바)
// npm i p-min-delay (setTimeout)
// index에 BrowserRouter 세팅 필요
import { Link, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import pMinDealy from 'p-min-delay'
import { Bars, DNA, Audio } from 'react-loader-spinner'
import './components/nav.css';

import A01State from './components/A01State'
import A02Currency from './components/A02Currency'
import A03Navigate from './components/A03Navigate'
import A04Navigate from './components/A04Navigate'
import A05Props from './components/A05Props'
import A06ParamsOne from './components/A06ParamsOne'
import A06ParamsTwo from './components/A06ParamsTwo'
import A07Query from './components/A07Query'
// import A07Search from './components/A07SearchParams'
// import A08ChildComp from './components/A08ChildComp'
// import A09NotFound from './components/A09NotFound'

// load되는 동안 표시될 대체 컴포넌트를 Suspense 태그로 지정한다
const A07Search = lazy(() => pMinDealy(import('./components/A07SearchParams'), 1000))
const A08ChildComp = lazy(() => pMinDealy(import('./components/A08ChildComp'), 1000))
const A09NotFound = lazy(() => pMinDealy(import('./components/A09NotFound'), 1000))

function App() {
  const user = { name: 'HungBu', age: 20 };
  const arr = [10, 11];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const style = { color: 'orange', fontWeight: 'bold' };
  const getStyle = (props) => {
    // console.log(props);
    return props.isActive ? style : undefined;
  }
  const getClass = (props) => props.isActive ? 'active' : undefined;


  return (
    <div className="m-3">
      <h1>React Router</h1>

      <Link to="/">INDEX</Link> | &nbsp;
      <Link to={'/A02Curr'}>A02Curr</Link> | {' '}
      <NavLink style={getStyle} to="/A03Navi">A03Navi</NavLink> | {' '}
      <NavLink style={getStyle} to="/A04Navi">A04Navi</NavLink> | {' '}
      <NavLink className={getClass} to="/A05Props">A05Props</NavLink> | {' '}

      <NavLink className={getClass} to="/A06One/놀부/1001">A06 1001</NavLink> | {' '}
      <NavLink className={getClass} to="/A06One/흥부/1002">A06 1002</NavLink> | {' '}

      <NavLink className={getClass} to="/A06Two/흥부/1003">A06 1003</NavLink> | {' '}
      <NavLink className={getClass} to="/A06Two/흥부/1004/100">A06 1004</NavLink> | {' '}

      <NavLink className={getClass} to="/A07Query?id=1005&name=향단&address=전주#TOP">A07 1005</NavLink> | {' '}
      <NavLink className={getClass} to="/A07Query?id=1006&name=춘향&address=남원#MID">A07 1006</NavLink> | {' '}

      <NavLink className={getClass} to="/A07Search?id=1001&name=향단&address=전주#TOP">A07 1001</NavLink> | {' '}
      <NavLink className={getClass} to="/A07Search?id=1002&name=춘향&address=남원#MID">A07 1002</NavLink> | {' '}


      <NavLink className={getClass} to="/A08Child" end>A08Child</NavLink> | {' '}
      <NavLink className={getClass} to="/A08Child/two" end>A08 TWO</NavLink> | {' '}

      <NavLink className={getClass} to="/ABC">ABC</NavLink> | {' '}

      <hr />

      <Routes>
        {/* path="/"를 index로 변경 사용 가능 */}
        <Route path="/" element={<Navigate to="/A03Navi" replace={true} />}></Route>
        <Route path="/A01State" element={<A01State />}></Route>
        <Route path="/A02Curr" element={<A02Currency />}></Route>
        <Route path="/A03Navi" element={<A03Navigate />}></Route>
        <Route path="/A04Navi" element={<A04Navigate />}></Route>

        {/* 속성을 이용한 값 전달 */}
        <Route path="/A05Props" element={<A05Props name="NolBu" age={30} arr={arr} user={user} onAdd={onAdd} />}></Route>

        {/* 
          패스를 이용한 값 전달 - 패스 역할을 하면서 지정한 이름이 변수가 된다
          패스가 to="/A06One/놀부/1001"라면 name="놀부", id="1001" 형태가 된다
          값은 A06ParamsOne 컴포넌트에서 useParams()로 추출해서 사용
        */}
        <Route path="/A06One/:name/:id" element={<A06ParamsOne />}></Route>

        {/* 모든 패스를 다 받아 처리해야 할 경우 */}
        <Route path="/A06Two/*" element={<A06ParamsTwo />}></Route>

        {/* 브라우저의 주소줄에 ?key=value&key=value&..#hash 값 취득 */}
        <Route path="/A07Query" element={<A07Query />}></Route>

        {/* 브라우저의 주소줄에 ?key=value&key=value&..#hash 값 취득. 브라우저의 searchParams 객체 이용 */}
        <Route path="/A07Search" element={
          <Suspense fallback={<Audio />}><A07Search /></Suspense>
        }></Route>

        {/* 
          하위 라우터 구성. 서브패스 또는 표시될 영역을 지정해서 설정해야 하는 경우(ajax 예제 참조)
          주소줄의 패스가 "/A08Child/패스" 형태면 A08ChildComp 컴포넌트의 <Outlet /> 태그 내부에 표시된다
        */}
        <Route path="/A08Child" element={
          <Suspense fallback={<Bars />}><A08ChildComp /></Suspense>
        }>
          {/* <Route path="" element={<h3>ONE</h3>}></Route> */}
          <Route index element={<h3>ONE</h3>}></Route>
          <Route path="two" element={<h3>TWO</h3>}></Route>
          <Route path="/A08Child/three" element={<h3>THREE</h3>}></Route>
        </Route>

        <Route path="*" element={
          <Suspense fallback={<DNA />}><A09NotFound /></Suspense>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
