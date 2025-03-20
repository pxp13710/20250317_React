import { createBrowserRouter } from 'react-router-dom'
// npm i p-min-delay
import pMinDelay from 'p-min-delay'

import App from './../App.jsx'
import A01Currency from './../components/A01Currency.jsx'
import A02StateOne from './../components/A02StateOne.jsx'
import A02StateTwo from './../components/A02StateTwo.jsx'
import A03Navigate from './../components/A03Navigate.jsx'
import A04Navigate from './../components/A04Navigate.jsx'
import A05Props from './../components/A05Props.jsx'
import A06ParamsOne from './../components/A06ParamsOne.jsx'
import A06ParamsTwo from './../components/A06ParamsTwo.jsx'
// import A07Location from './../components/A07Location.jsx'
// import A07SearchParams from './../components/A07SearchParams.jsx'
import A09NotFound from './../components/A09NotFound.jsx'
import A08ChildComp from './../components/A08ChildComp.jsx'
import A08ChildOne from './../components/A08ChildOne.jsx'
import A08ChildTwo from './../components/A08ChildTwo.jsx'
import A10ErrorElem from './../components/A10ErrorElem.jsx'
import A10Exception from './../components/A10Exception.jsx'


const routes = createBrowserRouter([
  // 한개의 패스당 표시될 컴포넌트를 지정
  {
    // App 컴포넌트에서 자식 컴포넌트가 표시될 위치를 <Outlet>으로 지정
    path: '/', element: <App />, errorElement: <A10ErrorElem />, children: [
      { path: '/', element: <h3>INDEX PAGE</h3> },
      { path: '/currency', element: <A01Currency /> },
      { path: '/state', element: <A02StateOne /> },
      { path: '/state/:id', element: <A02StateTwo /> },
      { path: '/navi', element: <A03Navigate /> },
      { path: '/redirect', element: <A04Navigate /> },

      // 속성을 이용해서 데이터 전달
      { path: '/props', element: <A05Props name="놀부" age={30} user={{ name: 'ABC', age: 10 }} /> },

      // 패스를 이용한 데이터 전달. 
      // :변수명(?) => ? 생략 가능. 따라서 맨 뒤에 기술해야 한다
      // 전체 패스명은 '/paramOne/1001/홍길동/1' => id = '1001; name="홍길동"; no="1"
      // 전체 패스명은 '/paramOne/1001/' => id = '1001;
      // 각각의 값은 Link에서 초기화를 한다
      { path: '/paramOne/:id/:name?/:no?', element: <A06ParamsOne /> },
      { path: '/paramTwo/*', element: <A06ParamsTwo /> },

      // 패스가 매칭되지 않는 경우 기본으로 보여줄 컴포넌트 지정
      // 패스 등록 순서
      // 1. 패스만 존재, 2. 패스/:id, 3. path/* 4. *
      { path: '*', element: <A09NotFound /> },

      // 주소줄에 "패스?key=value&key=value#HASH" 정보 취득
      {
        path: '/location', /*element: <A07Location />*/ lazy: async () => {
          try {
            // 대체 컴포넌트 표시는 App.jsx에서...
            const module = await pMinDelay(import('./../components/A07Location.jsx'), 2000);
            console.log(module)
            return { Component: module.default }
          } catch {
            console.log('컴포넌트를 로드할 수 없습니다...');
            // 에러가 발생하면 표시할 대체 컴포넌트
            return { Component: () => <A10ErrorElem /> }
          }
        }
      },
      {
        path: '/search', /*element: <A07SearchParams />*/  lazy: async () => {
          try {
            const module = await pMinDelay(import('./../components/A07SearchParams.jsx'), 2000);
            console.log(module)
            return { Component: module.default }
          } catch {
            console.log('컴포넌트를 로드할 수 없습니다...');
            // 에러가 발생하면 표시할 대체 컴포넌트
            return { Component: () => <A10ErrorElem /> }
          }
        }
      },

      // 자식 컴포넌트 지정
      // 부모인 A08ChildComp 내부에는 자식 컴포넌트가 표시될 위치를 <Outlet>으로 지정해야 한다
      {
        path: '/child', element: <A08ChildComp />, children: [
          { path: '', element: <A08ChildOne /> },
          { path: '/child/two', element: <A08ChildTwo /> },
          { path: 'three', element: <h3>THREE</h3> },
        ]
      },

      // root 요소인 App에 지정 가능 => 페이지 전체가 Error 페이지로 변경된다
      // { path: '/exception/:id', element: <A10Exception />, errorElement: <A10ErrorElem /> },
      { path: '/exception/:id', element: <A10Exception /> },

    ]
  },
],
  {
    future: {},
  }
)
export default routes;
