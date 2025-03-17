import React from "react";
import { Link, Outlet } from "react-router-dom";

function ChildComp() {
  return (
    <div>
      <h3>Children Component</h3>
      <br />

      <div>
        <Link to="">ONE</Link> | {' '}
        <Link to="two">TWO</Link> | {' '}
        <Link to="/A08Child/three">THREE</Link>| {' '}
        <Link to="/A01State">A01State</Link>
      </div>

      <hr />

      <div>
        {/* 자식 컴포넌트 즉 "A08Child/서브패스"로 지정된 컴포넌트가 표시될 위치 */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default ChildComp;
