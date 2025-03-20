import React from 'react'
import { useOutletContext } from 'react-router-dom'

function ChildTwo() {
  const { count } = useOutletContext();

  return (
    <div className="mb-3">
      <h3>TWO: {count}</h3>
    </div>
  )
}

export default ChildTwo