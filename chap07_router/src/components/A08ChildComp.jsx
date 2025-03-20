import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
const isActive = ({ isActive }) => isActive ? { color: 'orange', fontWeight: 'bold' } : {}

function ChildComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>CHILD ROUTER</h3>

      <div className="mb-3">
        <NavLink to="/child" style={isActive} end>ONE</NavLink> | {' '}
        <NavLink to="/child/two" style={isActive} end>TWO</NavLink> | {' '}
        <NavLink to="/child/three" style={isActive} end>THREE</NavLink> | {' '}
        <NavLink to="/state" style={isActive} end>STATE</NavLink> | {' '}
      </div>

      <hr />

      <div>
        {/* 자식 컴포넌트로 로드되는 모든 컴포넌트에서 사용하도록 공유 */}
        <Outlet context={{ count, setCount }}></Outlet>
      </div>
    </div>
  );
};
export default ChildComponent;
