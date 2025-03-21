/* eslint-disable no-undef */
// npm i react-router-dom react-spinners sweetalert2
import { useSelector } from 'react-redux';
import { Outlet, NavLink, useNavigation } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

const isActive = ({ isActive }) => isActive ? { color: 'green', fontWeight: 'bold' } : undefined;

function App() {
  const navigation = useNavigation();
  const { count } = useSelector(store => store.countStore)

  return (
    <div className="m-3">
      <h1>Chap06 TodoList / {__VERSION__} / {count}</h1>

      <div className="mb-3">
        <NavLink to="/" className={isActive}>HOME</NavLink> | {' '}
        <NavLink to="/count" className={isActive}>COUNT</NavLink> | {' '}
        <NavLink to="/todoList" className={isActive}>TODO</NavLink> | {' '}
        <NavLink to="/contactList" className={isActive}>LIST</NavLink> | {' '}
      </div>

      <hr />

      <div>
        {navigation.state === 'loading' ? <BarLoader color='orange' /> : <Outlet></Outlet>}
      </div>
    </div>
  );
}

export default App;
