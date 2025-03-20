import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorComp() {
  const error = useRouteError();

  return (
    <div className="mb-3">
      <h3>ERROR: {error.message} </h3>
    </div>
  )
}

export default ErrorComp;
