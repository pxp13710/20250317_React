/* eslint-disable no-unused-vars */
// npm i react-router-dom@6 react-spinners
import { Link, NavLink, Outlet } from "react-router-dom";
import './css/router.css'

const isActive = (props) => {
  const { isActive, isPendding } = props;
  return isActive ? { color: 'green', fontWeight: 'bold' } : undefined;
}
const isActiveClass = ({ isActive }) => isActive ? 'active' : undefined;


// index에 BrowserRouter 세팅 필요
function App() {
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
      </div>

      <hr />

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
