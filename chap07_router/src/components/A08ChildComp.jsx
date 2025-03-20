import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const isActive = ({ isActive, isPending }) => isActive ? { color: 'orange', fontWeight: 'bold' } : {}

function ChildComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>CHILD ROUTER</h3>

      <div className="mb-3">
        <NavLink to="">ONE</NavLink> | {' '}
        <NavLink to="">TWO</NavLink> |{' '}
        <NavLink to="">THREE</NavLink>
      </div>

      <hr />


    </div>
  );
};
export default ChildComponent;
