import { createBrowserRouter } from 'react-router-dom'
import App from './../App.jsx'
import A01Currency from './../components/A01Currency.jsx'
import A02StateOne from './../components/A02StateOne.jsx'
import A02StateTwo from './../components/A02StateTwo.jsx'
import A03Navigate from './../components/A03Navigate.jsx'
import A04Navigate from './../components/A04Navigate.jsx'
import A05Props from './../components/A05Props.jsx'

const routes = createBrowserRouter([
  // 한개의 패스당 표시될 컴포넌트를 지정
  {
    // App 컴포넌트에서 자식 컴포넌트가 표시될 위치를 <Outlet>으로 지정
    path: '/', element: <App />, children: [
      { path: '/', element: <h3>INDEX PAGE</h3> },
      { path: '/currency', element: <A01Currency /> },
      { path: '/state', element: <A02StateOne /> },
      { path: '/state/:id', element: <A02StateTwo /> },
      { path: '/navi', element: <A03Navigate /> },
      { path: '/redirect', element: <A04Navigate /> },
      { path: '/props', element: <A05Props /> },

    ]
  },
],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_startTransition: true,
      v7_relativeSplatPath: true
    },
  }
)
export default routes;
