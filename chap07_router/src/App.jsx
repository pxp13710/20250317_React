/* eslint-disable no-unused-vars */
// npm i react-router-dom@6 react-spinners
import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import { CircleLoader } from 'react-spinners'
import './css/router.css'

const isActive = (props) => {
  const { isActive, isPendding } = props;
  return isActive ? { color: 'green', fontWeight: 'bold' } : undefined;
}
const isActiveClass = ({ isActive }) => isActive ? 'active' : undefined;


// index에 BrowserRouter 세팅 필요
function App() {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="m-3">
      <h1>React Router</h1>

      <div>
        <Link to="/">INDEX</Link> |&nbsp;
        <Link to="/currency">CURRENT</Link> | {' '}
        <NavLink to="/state" style={isActive} end>STATE</NavLink> | {' '}
        <NavLink to="/state/100" style={isActive} end>STATE10</NavLink> | {' '}
        <NavLink to="/navi" style={isActive}>navi</NavLink> | {' '}
        <NavLink to="/redirect" className={isActiveClass}>redirect</NavLink> | {' '}
        <NavLink to="/props" className={isActiveClass}>props</NavLink> | {' '}

        <NavLink to="/paramOne/1001/홍길동/1" className={isActiveClass}>P1001</NavLink> | {' '}
        <NavLink to="/paramOne/1002" className={isActiveClass}>P1002</NavLink> | {' '}

        <NavLink to="/paramTwo/1003/놀부/3" className={isActiveClass}>P1003</NavLink> | {' '}
        <NavLink to="/paramTwo/1004/향단" className={isActiveClass}>P1004</NavLink> | {' '}

        <NavLink to="/ABC" className={isActiveClass}>NOT</NavLink> | {' '}

        <NavLink to="/location?id=1005&name=방자&no=5#TOP" className={isActiveClass} end>Q1005</NavLink> | {' '}
        <NavLink to="/location?id=1006&name=흥부&no=6#BTN" className={isActiveClass} end>Q1006</NavLink> | {' '}

        <NavLink to="/search?id=1005&name=방자&no=5#TOP" className={isActiveClass} end>S1005</NavLink> | {' '}
        <NavLink to="/search?id=1006&name=흥부&no=6#BTN" className={isActiveClass} end>S1006</NavLink> | {' '}

        <NavLink to="/child" className={isActiveClass} end>CHILD</NavLink> | {' '}
        <NavLink to="/child/three" className={isActiveClass} end>CHILD THREE</NavLink> | {' '}


        <NavLink to="/exception/1001" className={isActiveClass} end>E1001</NavLink> | {' '}
        <NavLink to="/exception/1010" className={isActiveClass} end>E1010</NavLink> | {' '}
      </div>

      <hr />

      <div>
        {navigation.state === 'loading' ? <CircleLoader color="orange" /> : <Outlet></Outlet>}
      </div>
    </div>
  );
}

export default App;
