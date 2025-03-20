import React from 'react'

function PropsComp(props) {
  const { name, age } = props;

  return (
    <div className="mb-3">
      <h3>PROPS</h3>

      <div className="mb-3">
        Name: {name}<br />
        Age: {age + 100}<br />
      </div>
    </div>
  )
}
export default PropsComp;
