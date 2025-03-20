import React from 'react'
import { Navigate } from 'react-router-dom';

function NavigateTag() {
  const isChecked = false;

  if (!isChecked) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="mb-3">
      <h3>NAVIGATE TAG</h3>
    </div>
  )
}

export default NavigateTag