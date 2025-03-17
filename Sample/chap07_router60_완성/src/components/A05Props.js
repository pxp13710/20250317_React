import React from 'react'

function PropsComp(props) {
  const { name, age, arr, user, onAdd } = props;

  return (
    <div>
      <h3>Props</h3>

      <div>
        Name: {name}<br />
        Age: {age + 100}<br />
        Array: {arr[0]} / {user.name} / {onAdd(10, 20)}
      </div>
    </div>
  )
}
export default PropsComp;
