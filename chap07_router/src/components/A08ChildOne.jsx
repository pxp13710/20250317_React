import React from 'react'

function ChildOne() {
  // Outlet에서 전달한 값을 useOutletContext를 이용해 받아온다

  return (
    <div className="mb-3">
      <h3>ONE</h3>

      <div className="mb-3">
        Count: <br />
        <button> + </button>
      </div>
    </div>
  )
}

export default ChildOne