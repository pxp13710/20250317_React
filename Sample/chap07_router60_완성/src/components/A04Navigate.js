/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function NavigateTag() {
  const isChecked = false;
  const [error, setError] = useState(false)

  if (!isChecked) {
    // redirect
    return <Navigate to="/" replace={true} />
  }

  if (error) return <div>Error...</div>

  return (
    <div>
      <h3>Navigate Tag</h3>
    </div>
  )
}

export default NavigateTag