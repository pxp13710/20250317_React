import React from 'react'
import { useOutletContext } from 'react-router-dom'

function ChildOne() {
  // Outlet에서 전달한 값을 useOutletContext를 이용해 받아온다
  const { count, setCount } = useOutletContext();

  return (
    <div className="mb-3">
      <h3>ONE</h3>

      <div className="mb-3">
        Count: {count} <br />
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
    </div>
  )
}

export default ChildOne