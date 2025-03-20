import React from 'react'

function PropsComp(props) {
  const { name, age, user } = props;

  return (
    <div className="mb-3">
      <h3>PROPS</h3>

      <div className="mb-3">
        Name: {name}<br />
        Age: {age + 100}<br />
        User: {user.name} / {user.age}
      </div>
    </div>
  )
}
export default PropsComp;
