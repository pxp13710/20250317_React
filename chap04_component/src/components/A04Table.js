import React from 'react'

function A04Table(props) {
  const { item } = props;

  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.value}</td>
    </tr>
  )
}

export default React.memo(A04Table)
